interface Product {
  name: string;
  id: string;
  imagePath?: string | null;
}

function ProductCard({ product }: { product?: Product }) {
  return (
    <>
      <h1>{product?.name}</h1>
      <div className="col-lg-4 col-md-6 item mt-5">
        <div className="card">
          <div className="card-header p-0 position-relative">
            <a href="" className="zoom d-block">
              <img
                className="card-img-bottom d-block"
                src="assets/images/c2.jpg"
                alt="Card cap"
              />
            </a>
            <div className="product-price-badge"> Free</div>
            <div className="post-pos">
              <a href="#reciepe" className="receipe blue">
                Beginner
              </a>
            </div>
          </div>
          <div className="card-body product-details">
            <div className="price-review d-flex justify-content-between mb-1align-items-center">
              <p>$0.00</p>
              <ul className="rating-star">
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
              </ul>
            </div>
            <a href="" className="product-desc">
              Learning to Write as a clean Professional Author
            </a>
            <div className="product-meta mt-4">
              <div className="meta-item product-lesson">
                <span className="fa fa-clock-o"></span>
                <span className="meta-value"> 20 hrs </span>
              </div>
              <div className="meta-item product-">
                <span className="fa fa-user-o"></span>
                <span className="meta-value"> 50 </span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="author align-items-center">
              <img
                src="assets/images/a2.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <ul className="blog-meta">
                <li>
                  <span className="meta-value mx-1">by</span>{" "}
                  <a href="#"> Isabella</a>
                </li>
                <li>
                  <span className="meta-value mx-1">in</span>{" "}
                  <a href="#"> Teaching</a>
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
