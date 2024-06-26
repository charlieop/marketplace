import "./css/productDetails.css";
import BreadCrumps from "../components/BreadCrumps";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { generateRandomProduct } from "../assets/utils/generateRandomProduct";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(generateRandomProduct());
  const [isModyfing, setIsModifying] = useState(false);
  const [img, setImg] = useState<File | null>(null);
  const authStatus = "authenticated";
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
    setIsModifying(false);
  }

  function handleDelete() {
    if (!product) {
      console.error("Product not found");
      return;
    }
    navigate("/products");
  }

  async function fetchProduct() {}

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
      // imagePath: product.imagePath,
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
                <div className="input-group">
                  <label htmlFor="name">
                    Product Name:
                    <span className="error"> (required)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    defaultValue={product.name}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="code">Product Code:</label>
                  <input
                    id="code"
                    name="code"
                    defaultValue={product.code ?? ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="version">Product Version:</label>
                  <input
                    id="version"
                    name="version"
                    defaultValue={product.version ?? ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="description">Product Descripton:</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    defaultValue={product.description ?? ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="requirement">Product Requirement:</label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    rows={3}
                    defaultValue={product.requirement ?? ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="price">
                    Product Price: <span className="error"> (required)</span>
                  </label>
                  <input
                    id="price"
                    name="price"
                    defaultValue={product.price}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="dimension">Product Dimension:</label>
                  <input
                    id="dimension"
                    name="dimension"
                    defaultValue={product.dimension ?? ""}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="remark">Product Remark:</label>
                  <textarea
                    id="remark"
                    name="remark"
                    rows={3}
                    defaultValue={product.remark ?? ""}
                  />
                </div>
              </form>
            </>
          )}
          {!product && !isModyfing && (
            <>
              <h1>Loading Product Info ...</h1>
            </>
          )}
        </div>
        <div className="grid-col">
          <img src="https://placehold.co/400x300" alt="Product Placeholder" />
          {authStatus === "authenticated" && isModyfing && (
            <div className="detail-btn">
              <span>Upload Product Image</span>
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
              ></input>
            </div>
          )}
          <button
            className="detail-btn"
            onClick={() => {
              navigate("/products");
            }}
          >
            Back to List View
          </button>
          {authStatus === "authenticated" && !isModyfing && (
            <button
              className="detail-btn"
              onClick={() => {
                setIsModifying(true);
              }}
            >
              Modify Product
            </button>
          )}
          {!id && !isModyfing && (
            <button className="detail-btn" onClick={fetchProduct}>
              Switch to a different Product
            </button>
          )}
          {authStatus === "authenticated" && isModyfing && (
            <button
              className="detail-btn"
              type="submit"
              onClick={() => {
                handleCommit();
              }}
            >
              Upload Change
            </button>
          )}
          {authStatus === "authenticated" && isModyfing && (
            <button
              className="detail-btn"
              onClick={handleDelete}
            >
              Delete this Product
            </button>
          )}
        </div>
      </section>
      <p className="id">{product?.id}</p>
    </>
  );
}

export default ProductDetails;
