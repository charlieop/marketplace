import "./css/productDetails.css";
import BreadCrumps from "../components/BreadCrumps";
import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import {
  Flex,
  Label,
  TextAreaField,
  useAuthenticator,
  Button,
  Input,
  Loader,
  Text,
} from "@aws-amplify/ui-react";
import { useParams, useNavigate } from "react-router-dom";

import { generateRandomProduct } from "../assets/utils/generateRandomProduct";
import { getUserAttributes } from "../assets/utils/userSession";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import {
  client,
  createProduct,
  uploadImage,
  updateProduct,
  deleteProduct,
  modifyImgPath,
} from "../assets/utils/product-backend";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Schema["Product"]["type"]>();
  const [isModyfing, setIsModifying] = useState(false);
  const [img, setImg] = useState<File | null>(null);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
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
    setImg(file);
  }

  async function handleCommit() {
    const product = updateProductFromForm();
    if (!product) {
      console.error("Product not found");
      return;
    }
    if (product.id == "null") {
      createProduct(product).then((res) => {
        console.log("createProduct: ", res);
        if (res.data) {
          if (img) {
            const resProduct = res.data;
            uploadImage(res.data.id, img).then((res) => {
              console.log("uploadImage: ", res);
              setProduct((prev) => {
                if (prev) {
                  prev.imagePath = res.path;
                }
                return prev;
              });
              modifyImgPath(resProduct, res.path).then((res) => {
                console.log("modifyImgPath: ", res);
              });
              setImg(null);
            });
          }
          navigate(`/product-details/${res.data.id}`);
        }
      });
    } else {
      await updateProduct(product).then((res) => {
        console.log("updateProduct: ", res);
      });
      if (img) {
        await uploadImage(product.id, img).then((res) => {
          console.log("uploadImage: ", res);
          setProduct((prev) => {
            if (prev) {
              prev.imagePath = res.path;
            }
            return prev;
          });
          modifyImgPath(product, res.path).then((res) => {
            console.log("modifyImgPath: ", res);
          });
          setImg(null);
        });
      }
    }
    setIsModifying(false);
  }

  function handleDelete() {
    if (!product) {
      console.error("Product not found");
      return;
    }
    deleteProduct(product.id).then((res) => {
      setProduct(undefined);
      console.log("deleteProduct: ", res);
      navigate("/products");
    });
  }

  async function fetchProduct() {
    if (window.location.href.split("/").at(-1) == "new") {
      console.log("new product");
      if (getUserAttributes() === null) {
        console.error("User not authenticated");
        navigate("/products");
        return;
      }
      setProduct(generateRandomProduct());
      setIsModifying(true);
      return;
    } else if (window.location.href.split("/").at(-1) == "random") {
      const { data: items } = await client.models.Product.list();
      console.log(items);
      const num = Math.floor(Math.random() * items.length);
      setProduct(items[num]);
      return;
    }
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
  }

  function updateProductFromForm() {
    const form = document.querySelector(
      "#product-info-form"
    ) as HTMLFormElement;
    if (!form) {
      console.error("Form not found");
      return;
    }
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!product) {
      console.error("Product not found");
      return;
    }
    const updatedProduct = {
      name: data.name.toString(),
      code: data.code.toString(),
      version: data.version.toString(),
      description: data.description.toString(),
      requirement: data.requirement.toString(),
      price: Number(data.price),
      dimension: data.dimension.toString(),
      remark: data.remark.toString(),
      id: product.id,
      imagePath: product.imagePath,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
    setProduct(updatedProduct);
    return updatedProduct;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, []);

  return (
    <>
      <BreadCrumps page="product-details" title="Product Details" />
      <section className="productDetail-wrapper">
        <div className="grid-col">
          {product && !isModyfing && (
            <>
              <h1>{product.name}</h1>
              <p>
                {product.code} version - {product.version}
              </p>
              <div className="group">
                <h2>Description</h2>
                <p>{product.description}</p>
              </div>
              <div className="group">
                <h2>Requirements</h2>
                <p>{product.requirement}</p>
              </div>
              <div className="group">
                <h2>Price</h2>
                <p>{product.price} HKD</p>
              </div>{" "}
              <div className="group">
                <h2>Dimension</h2>
                <p>{product.dimension}</p>
              </div>{" "}
              <div className="group">
                <h2>Remark</h2>
                <p>{product.remark}</p>
              </div>{" "}
            </>
          )}

          {isModyfing && product && (
            <>
              <form id="product-info-form">
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="name">
                    Product Name:
                    <Text as="span" fontSize="small" color="font.error">
                      {" "}
                      (required)
                    </Text>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={product.name}
                    isRequired
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="code">Product Code:</Label>
                  <Input
                    id="code"
                    name="code"
                    defaultValue={product.code ?? ""}
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="version">Product Version:</Label>
                  <Input
                    id="version"
                    name="version"
                    defaultValue={product.version ?? ""}
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <TextAreaField
                    label="Product Description:"
                    id="description"
                    name="description"
                    rows={5}
                    defaultValue={product.description ?? ""}
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <TextAreaField
                    label="Product Requirement:"
                    id="requirement"
                    name="requirement"
                    rows={3}
                    defaultValue={product.requirement ?? ""}
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="price">
                    Product Price:{" "}
                    <Text as="span" fontSize="small" color="font.error">
                      {" "}
                      (required)
                    </Text>
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    defaultValue={product.price}
                    isRequired
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="dimension">Product Dimension:</Label>
                  <Input
                    id="dimension"
                    name="dimension"
                    defaultValue={product.dimension ?? ""}
                  />
                </Flex>
                <Flex className="input-group" direction="column" gap="small">
                  <Label htmlFor="remark">Product Remark:</Label>
                  <Input
                    id="remark"
                    name="remark"
                    defaultValue={product.remark ?? ""}
                  />
                </Flex>
              </form>
            </>
          )}
          {!product && !isModyfing && (
            <>
              <h1>Loading Product Info ...</h1>
              <Loader
                size="large"
                variation="linear"
                style={{
                  marginTop: "2rem",
                }}
              />
            </>
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
          {authStatus === "authenticated" && isModyfing && (
            <div className="detail-btn">
              <span>Upload Product Image</span>
              <Input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
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
          {authStatus === "authenticated" && !isModyfing && (
            <Button
              className="detail-btn"
              onClick={() => {
                setIsModifying(true);
              }}
            >
              Modify Product
            </Button>
          )}
          {!id && !isModyfing && (
            <Button className="detail-btn" onClick={fetchProduct}>
              Switch to a different Product
            </Button>
          )}
          {authStatus === "authenticated" && isModyfing && (
            <Button
              className="detail-btn"
              colorTheme="success"
              variation="primary"
              type="submit"
              onClick={() => {
                handleCommit();
              }}
            >
              Upload Change
            </Button>
          )}
          {authStatus === "authenticated" && isModyfing && (
            <Button
              className="detail-btn"
              onClick={handleDelete}
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
