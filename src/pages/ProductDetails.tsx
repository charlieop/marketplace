import "./css/productDetails.css";
import BreadCrumps from "../components/BreadCrumps";
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>({
  authMode: "identityPool",
});

function ProductDetails() {
  const [product, setProduct] = useState<Schema["Product"]["type"]>();
  const fetchProduct = async () => {
    const { data: items } = await client.models.Product.list();
    console.log(items);
    const num = Math.floor(Math.random() * items.length);
    setProduct(items[num]);
  };
  const createProduct = async () => {
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const a = await client.models.Product.create(
      {
        name: "New Product Type-" + letter[Math.floor(Math.random() * 26)],
        price: 100,
        code: "testCode",
        version: "1." + Math.random().toFixed(3),
        dimension: "10x10",
        description: "This is a new product",
        requirement: "This is a requirement",
        remark: "This is a remark",
      },
      {
        authMode: "userPool",
      }
    );
    console.log(a);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <BreadCrumps page="product-details" title="Product Details" />
      <section className="productDetail-wrapper">
        <h1>{product?.name ?? "No Product Info Found :("}</h1>
        {product && (
          <>
            <p>
              {product?.code} version - {product?.version}
            </p>
            <br></br>
            <h2>Description</h2>
            <p>{product?.description}</p>
            <br></br>
            <h2>Requirements</h2>
            <p>{product?.requirement}</p>
          </>
        )}
        <br></br> <br></br> <br></br>
        <button onClick={createProduct}>Create a new Product</button>
      </section>
    </>
  );
}

export default ProductDetails;
