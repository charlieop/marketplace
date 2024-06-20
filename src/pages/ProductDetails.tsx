import "./css/productDetails.css";
import BreadCrumps from "../components/BreadCrumps";
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { uploadData, remove } from "aws-amplify/storage";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Input, Loader } from "@aws-amplify/ui-react";

import { generateRandomProduct } from "../assets/utils/generateRandomProduct";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const client = generateClient<Schema>();

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Schema["Product"]["type"]>();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();

  function handelFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    console.log("getFile:", file);
    if (file.size > 1024 * 1024) {
      alert("File size is too large, please upload a file smaller than 1MB.");
      event.target.files = null;
      event.target.value = "";
      return;
    }
    if (!product) {
      alert("Product not found");
      event.target.files = null;
      event.target.value = "";
      return;
    }

    const res = uploadData({
      data: file,
      path: `productDetails/imgs/${product.id}`,
      options: {
        contentType: file.type,
      },
    }).result;
    res.then((result) => {
      console.log("upload result: ", result);
      modifyPath(result.path);
      setProduct((prev) => {
        if (prev) {
          return {
            ...prev,
            imagePath: result.path,
          };
        }
        return prev;
      });
    });

    event.target.files = null;
    event.target.value = "";
  }

  const modifyPath = async (path: string) => {
    if (!product) {
      return;
    }
    const a = await client.models.Product.update({
      id: product.id,
      imagePath: path,
    });
    console.log("modify path: ", a);
  };

  const fetchProduct = async () => {
    if (id) {
      const { data: item } = await client.models.Product.get({
        id: id,
      });
      if (!item) {
        console.error("Product not found");
        setProduct(undefined);
        navigate("/products");
        return;
      }
      setProduct(item);
      return;
    }
    const { data: items } = await client.models.Product.list();
    console.log(items);
    const num = Math.floor(Math.random() * items.length);
    setProduct(items[num]);
  };

  const createProduct = async () => {
    const newProduct = generateRandomProduct();
    const a = await client.models.Product.create({
      ...newProduct,
    });
    console.log("createProduct: ", a);
    if (a.data) {
      navigate(`/product-details/${a.data.id}`);
    }
    setProduct(a.data ?? undefined);
  };

  const switchProduct = async () => {
    await fetchProduct();
  };

  const deleteProduct = async () => {
    if (product) {
      if (product.imagePath) {
        remove({
          path: product.imagePath,
        }).then((result) => {
          console.log("delete image result: ", result);
        });
      }

      const a = await client.models.Product.delete({
        id: product.id,
      });
      console.log("deleted:", a);
      setProduct(undefined);
    }
    navigate("/products");
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <BreadCrumps page="product-details" title="Product Details" />
      <section className="productDetail-wrapper">
        <div className="grid-col">
          <h1>{product?.name ?? "Loading..."}</h1>
          {product ? (
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
          ) : (
            <Loader
              size="large"
              variation="linear"
              style={{
                marginTop: "2rem",
              }}
            />
          )}
        </div>
        <div className="grid-col">
          {product?.imagePath ? (
            <StorageImage
              path={product.imagePath}
              alt="Product Image"
              onGetUrlError={(e) => {
                console.log(e);
              }}
            ></StorageImage>
          ) : (
            <img src="https://placehold.co/400x300" alt="Product Placeholder" />
          )}
          {authStatus === "authenticated" && (
            <div className="detail-btn">
              <span>Upload Product Image</span>
              <Input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handelFileChange}
                placeholder="hihi"
                variation="quiet"
              ></Input>
            </div>
          )}
          <Button
            className="detail-btn"
            onClick={() => {
              navigate("/products");
            }}
            variation="primary"
          >
            Back to List View
          </Button>
          {!id && (
            <Button className="detail-btn" onClick={switchProduct}>
              Switch to a different Product
            </Button>
          )}
          {authStatus === "authenticated" && (
            <Button
              className="detail-btn"
              onClick={createProduct}
              colorTheme="success"
            >
              Create a new Product
            </Button>
          )}
          {authStatus === "authenticated" && (
            <Button
              className="detail-btn"
              onClick={deleteProduct}
              colorTheme="error"
              variation="primary"
            >
              Delete this Product
            </Button>
          )}
        </div>
      </section>
      <p className="id">{product?.id}</p>
    </>
  );
}

export default ProductDetails;
