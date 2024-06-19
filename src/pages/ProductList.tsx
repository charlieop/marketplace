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
  const [productList, setProductList] = useState<Schema["Product"]["type"][]>(
    []
  );

  const fetchProduct = async () => {
    const { data: items } = await client.models.Product.list();
    console.log(items);
    const randomProduct = {
      name: "Product Name",
      id: "random",
      createdAt: "",
      updatedAt: "",
    };
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
          type="grid"
          gap="3rem"
          templateColumns="1fr 1fr 1fr 1fr"
        >
          {(product, index) => (
            <Card
              key={index}
              borderRadius="medium"
              maxWidth="20rem"
              variation="outlined"
            >
              {product?.imagePath ? (
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
