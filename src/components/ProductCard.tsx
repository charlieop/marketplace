import { Link } from "react-router-dom";

import "./css/producrCard.css";

interface Product {
  name: string;
  id: string;
  price: number;
  imagePath?: string | null;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 item mt-5 product-card">
        <div className="card">
          <div className="card-header p-0 position-relative">
            <Link
              to={"/product-details/" + product.id}
              className="zoom d-block"
            >
              <img
                className="product-image"
                src="https://placehold.co/400x300"
                alt="Product Placeholder"
              />
            </Link>
            {/* floating items start*/}
            {/* <div className="product-price-badge"> Free</div>
            <div className="post-pos">
              <a href="#reciepe" className="receipe blue">
                Beginner
              </a>
            </div> */}
            {/* floating item ends */}
          </div>
          <div className="card-body product-details">
            <div className="price-review d-flex justify-content-between mb-1align-items-center">
              <p>${product.price} HKD</p>
              {/* rating stars start */}
              {/* <ul className="rating-star">
                <li>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span className="fa fa-star-o"></span>
                </li>
              </ul> */}
              {/* rating stars end */}
            </div>
            <Link
              to={"/product-details/" + product.id}
              className="product-desc"
            >
              {product.name}
            </Link>

            {/* tags start */}
            {/* <div className="product-meta mt-4">
              <div className="meta-item product-lesson">
                <span className="fa fa-clock-o"></span>
                <span className="meta-value"> 20 hrs </span>
              </div>
              <div className="meta-item product-">
                <span className="fa fa-user-o"></span>
                <span className="meta-value"> 50 </span>
              </div>
            </div> */}
            {/* meta tags end */}
          </div>
          <div className="card-footer">
            <div className="author align-items-center">
              <img
                src="assets/images/a2.jpg"
                alt=""
                className="rounded-circle"
              />
              <ul className="blog-meta">
                <li>
                  <span className="meta-value mx-1">by</span>{" "}
                  <a>Supplier Name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
