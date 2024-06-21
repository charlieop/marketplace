import BreadCrumps from "../components/BreadCrumps.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { useState, useEffect } from "react";
import { type Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Loader } from "@aws-amplify/ui-react";

interface Product {
  name: string;
  id: string;
  price: number;
  imagePath?: string | null;
}

const client = generateClient<Schema>();

function Products() {
  const [productList, setProductList] = useState<Product[]>([]);
  let nextToken: string | null | undefined = null;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (nextToken) {
          fetchProduct(nextToken);
        }
      }
    },
    { threshold: 0.5, rootMargin: "0px 0px 400px 0px" }
  );

  function searchProduct(keyword: string) {
    observer.disconnect();
    client.models.Product.list({
      filter: {
        name: {
          contains: keyword,
        },
      },
      selectionSet: ["name", "id", "imagePath", "price"],
    }).then((result) => {
      console.log(result);
      setProductList(result.data);
    });
  }

  const fetchProduct = async (tk?: string | null | undefined) => {
    const { data: items, nextToken: token } = await client.models.Product.list({
      selectionSet: ["name", "id", "imagePath", "price"],
      limit: 9,
      nextToken: tk,
    });
    nextToken = token;
    if (!token) {
      console.log("stop observer");
      document.getElementById("products-loader")?.remove();
      observer.disconnect();
    }

    setProductList((prevList) => [...prevList, ...items]);
  };

  function startObserver() {
    const productsLoader = document.getElementById("products-loader");
    if (!productsLoader) return;
    console.log("start observer");
    observer.observe(productsLoader);
  }

  useEffect(() => {
    fetchProduct();
    startObserver();
  }, []);

  return (
    <div>
      <BreadCrumps page="Products" title="All Products" />
      <section className="products">
        <div className="blog pb-5" id="products">
          <>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                const keyword = (
                  (e.currentTarget as HTMLFormElement)
                    .elements[0] as HTMLInputElement
                ).value;
                searchProduct(keyword);
              }}
            >
              <input type="text" />
              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
          </>

          <div className="container py-lg-5 py-md-4 py-2">
            {nextToken}
            {productList.length === -1 ? (
              <Loader
                size="large"
                style={{
                  marginTop: "2rem",
                  marginInline: "auto",
                  marginBottom: "10svh",
                  display: "block",
                  width: "5rem",
                }}
              />
            ) : null}
            <div className="row">
              {productList.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
            {true && (
              <Loader
                size="large"
                id="products-loader"
                style={{
                  marginTop: "10rem",
                  marginInline: "auto",
                  marginBottom: "10svh",
                  display: "block",
                  width: "5rem",
                }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
