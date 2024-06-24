import BreadCrumps from "../components/BreadCrumps.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { useState, useEffect } from "react";
import {
  // client,
  Product,
  fetchProductPromise,
  searchProductByNamePromise,
} from "../assets/utils/product-backend.ts";
import { Loader } from "@aws-amplify/ui-react";

const fetchLimit = 9;
let nextToken: string | null | undefined = null;

function Products() {
  const [productList, setProductList] = useState<Product[]>([]);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (nextToken) {
          console.log("fetching more products");
          fetchProductPromise(fetchLimit, nextToken).then((res) => {
            console.log(res);
            setProductList((prev) => [...prev, ...res.data]);
            nextToken = res.nextToken;

            if (!nextToken) {
              console.log("no more products to fetch");
              observer.unobserve(entries[0].target);
              entries[0].target.remove();
            }
          });
        }
      }
    },
    { threshold: 0.5, rootMargin: "0px 0px 400px 0px" }
  );

  function startObserver() {
    const productsLoader = document.getElementById("products-loader");
    if (!productsLoader) return;
    console.log("start observer");
    observer.observe(productsLoader);
  }

  // Removed OpenSearch integration
  // function testOpenSearch() {
  //   client.queries
  //     .searchProducts({
  //       authMode: "apiKey",
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    fetchProductPromise(fetchLimit).then((res) => {
      console.log(res);
      setProductList(res.data);
      nextToken = res.nextToken;
      startObserver();
    });
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
                document.getElementById("products-loader")?.remove();
                const keyword = (
                  (e.currentTarget as HTMLFormElement)
                    .elements[0] as HTMLInputElement
                ).value;
                searchProductByNamePromise(keyword).then((res) => {
                  console.log(res);
                  setProductList(res.data);
                });
              }}
            >
              <input type="text" required />
              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
          </>

          <div className="container py-lg-5 py-md-4 py-2">
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
