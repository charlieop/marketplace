import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import BreadCrumps from "../components/BreadCrumps";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Collection,
  Divider,
  Heading,
  View,
} from "@aws-amplify/ui-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";

import "./css/productList.css";

const client = generateClient<Schema>();

function ProductList() {
  interface Product {
    name: string;
    id: string;
    imagePath?: string | null;
  }
  const randomProduct = {
    name: "View Random Product",
    id: "random",
  };

  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProduct = async () => {
    const { data: items } = await client.models.Product.list({
      selectionSet: ["name", "id", "imagePath"],
    });
    console.log(items);

    setProductList([randomProduct, ...items]);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <BreadCrumps page="product-details" title="Product List" />
      <section className="list">
        <Collection
          items={productList}
          // type="list"
          // direction="row"
          // wrap="wrap"
          gap="3rem"
          type="grid"
          templateColumns="repeat(auto-fill,minmax(15rem, 1fr))"
        >
          {(product, index) => (
            <Card
              className="product-card"
              key={index}
              borderRadius="medium"
              maxWidth="30rem"
              variation="outlined"
            >
              {product.imagePath ? (
                <StorageImage
                  className="product-image"
                  path={product.imagePath}
                  alt="Product Image"
                  onGetUrlError={(e) => {
                    console.log(e);
                  }}
                ></StorageImage>
              ) : (
                <img
                  className="product-image"
                  src="https://placehold.co/400x300"
                  alt="Product Placeholder"
                />
              )}
              <View padding="xs">
                <Divider padding="xs" />
                <Heading padding="medium">{product.name}</Heading>
                <Link to={"/product-details/" + product.id}>
                  <Button variation="primary" isFullWidth>
                    View
                  </Button>
                </Link>
              </View>
            </Card>
          )}
        </Collection>
      </section>
    </>
  );
}

export default ProductList;
