import "./css/productDetails.css";
import BreadCrumps from "../components/BreadCrumps";
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button } from "@aws-amplify/ui-react";

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

  function generateRandomWords() {
    const words = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      "ut",
      "enim",
      "ad",
      "minim",
      "veniam",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat",
      "duis",
      "aute",
      "irure",
      "dolor",
      "in",
      "reprehenderit",
      "in",
      "voluptate",
      "velit",
      "esse",
      "cillum",
      "dolore",
      "eu",
      "fugiat",
      "nulla",
      "pariatur",
      "excepteur",
      "sint",
      "occaecat",
      "cupidatat",
      "non",
      "proident",
      "sunt",
      "in",
      "culpa",
      "qui",
      "officia",
      "deserunt",
      "mollit",
      "anim",
      "id",
      "est",
    ];
    return words[Math.floor(Math.random() * words.length)];
  }

  function generateRandomParagraph(words: number) {
    let paragraph = "";
    for (let i = 0; i < words; i++) {
      paragraph += generateRandomWords() + " ";
    }
    return paragraph;
  }

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const createProduct = async () => {
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const a = await client.models.Product.create(
      {
        name: "New Product Type-" + letter[Math.floor(Math.random() * 26)],
        price: randInt(100, 1000),
        code:
          "testCode-" +
          letter[Math.floor(Math.random() * 26)] +
          letter[Math.floor(Math.random() * 26)] +
          letter[Math.floor(Math.random() * 26)],
        version: "1." + Math.random().toFixed(3),
        dimension:
          randInt(10, 100) + "x" + randInt(10, 100) + "x" + randInt(10, 100),
        description:
          "This is a new product: " + generateRandomParagraph(randInt(30, 40)),
        requirement:
          "This is a requirement: " + generateRandomParagraph(randInt(10, 20)),
        remark: "This is a remark: " + generateRandomParagraph(randInt(15, 30)),
      },
      {
        authMode: "userPool",
      }
    );
    console.log(a);
  };

  const switchProduct = async () => {
    await fetchProduct();
  };

  const deleteProduct = async () => {
    if (product) {
      const a = await client.models.Product.delete({
        id: product.id,
      });
      console.log(a);
      setProduct(undefined);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <BreadCrumps page="product-details" title="Product Details" />
      <section className="productDetail-wrapper">
        <div className="grid-col">
          <h1>{product?.name ?? "No Product Info Found :("}</h1>
          {product && (
            <>
              <p>
                {product?.code} version - {product?.version}
              </p>
              <div className="group">
                <h2>Description</h2>
                <p>{product?.description}</p>
              </div>
              <div className="group">
                <h2>Requirements</h2>
                <p>{product?.requirement}</p>
              </div>
              <div className="group">
                <h2>Price</h2>
                <p>{product?.price} HKD</p>
              </div>{" "}
              <div className="group">
                <h2>Dimension</h2>
                <p>{product?.dimension}</p>
              </div>{" "}
              <div className="group">
                <h2>Remark</h2>
                <p>{product?.remark}</p>
              </div>{" "}
            </>
          )}
        </div>
        <div className="grid-col">
          <img src="https://placehold.co/400x300" alt="" />
          <Button
            className="detail-btn"
            onClick={createProduct}
            colorTheme="success"
          >
            Create a new Product
          </Button>
          <Button className="detail-btn" onClick={switchProduct}>
            Switch to a different Product
          </Button>
          <Button
            className="detail-btn"
            onClick={deleteProduct}
            colorTheme="error"
            variation="primary"
          >
            Delete this Product
          </Button>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
