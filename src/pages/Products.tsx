import BreadCrumps from "../components/BreadCrumps.tsx";
import ProductCard from "../components/ProductCard.tsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { generateRandomProduct } from "../assets/utils/generateRandomProduct.ts";
import "./css/products.css";

let mounted = false;

function Products() {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState("authenticated");
  const [productList, setProductList] = useState([generateRandomProduct()]);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        console.log("no more products to fetch");
        observer.unobserve(entries[0].target);
        entries[0].target.remove();
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

  useEffect(() => {
    if (mounted) return;
    mounted = true;
    startObserver();
    for (let i = 0; i < 10; i++) {
      setProductList((prev) => [...prev, generateRandomProduct()]);
    }
  }, []);

  return (
    <div>
      <BreadCrumps page="Products" title="All Products" />
      <section className="products">
        <div className="blog pb-5" id="products">
          <div className="products-header container">
            <div className="">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  document.getElementById("products-loader")?.remove();
                  const keyword = (
                    (e.currentTarget as HTMLFormElement)
                      .elements[0] as HTMLInputElement
                  ).value;
                  console.log(keyword);
                }}
                className="input-group mb-3 input-group-lg w-75 mx-auto"
              >
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Search Products for exact name"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    Button
                  </button>
                </div>
                {authStatus === "authenticated" && (
                  <button
                    type="button"
                    className="btn btn-outline-info ml-5"
                    aria-label="Create New Product"
                    onClick={() => {
                      navigate("/product-details/new");
                    }}
                  >
                    Create New Product
                  </button>
                )}
              </form>
            </div>
          </div>

          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              {productList.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
            {/* {true && (
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
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
