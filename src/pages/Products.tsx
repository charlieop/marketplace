import BreadCrumps from "../components/BreadCrumps.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Loader } from "@aws-amplify/ui-react";

interface Product {
  name: string;
  id: string;
  price: number;
  imagePath?: string | null;
}

const randomProduct = {
  name: "View Random Product",
  id: "random",
  price: 0,
};

const client = generateClient<Schema>();

function Products() {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProduct = async () => {
    const { data: items } = await client.models.Product.list({
      selectionSet: ["name", "id", "imagePath", "price"],
    });
    console.log(items);

    setProductList([randomProduct, ...items]);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <BreadCrumps page="Products" title="All Pourses" />
      <section className="products">
        <div className="blog pb-5" id="products">
          <div className="container py-lg-5 py-md-4 py-2">
            {productList.length === 0 ? (
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
            {/* pagination */}
            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul className="page-pagination">
                <li>
                  <a className="next" href="#url">
                    <span className="fa fa-angle-left"></span> Prev
                  </a>
                </li>
                <li>
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    2
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    3
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    ....
                  </a>
                </li>
                <li>
                  <a className="next" href="#url">
                    Next <span className="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* //pagination */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
