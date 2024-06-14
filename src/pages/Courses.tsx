import BreadCrumps from "../components/BreadCrumps.tsx";

function Courses() {
  return (
    <div>
      <BreadCrumps page="Courses" title="All Courses" />
      <section className="w3l-courses">
        <div className="blog pb-5" id="courses">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              <div className="col-lg-4 col-md-6 item">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c1.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$35.00</p>
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
                    <a href="#course-single" className="course-desc">
                      Open Programming Courses for everyone : Python
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a1.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Olivia</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c2.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="course-price-badge"> Free</div>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
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
                    <a href="#course-single" className="course-desc">
                      Learning to Write as a clean Professional Author
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
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
                          <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c3.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="course-price-badge-new"> New</div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$49.00</p>
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
                    <a href="#course-single" className="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Alexander</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c4.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$35.00</p>
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
                    <a href="#course-single" className="course-desc">
                      Open Programming Courses for everyone : Python
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a4.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> William</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c5.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="course-price-badge"> Free</div>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">
                        Beginner
                      </a>
                    </div>
                  </div>
                  <div className="card-body course-details">
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
                    <a href="#course-single" className="course-desc">
                      Learning to Write as a clean Professional Author
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o"></span>
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img
                        src="assets/images/a1.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span>{" "}
                          <a href="#author"> Olivia</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Programing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img
                        className="card-img-bottom d-block"
                        src="assets/images/c6.jpg"
                        alt="Card cap"
                      />
                    </a>
                    <div className="course-price-badge-new"> New</div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$49.00</p>
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
                    <a href="#course-single" className="course-desc">
                      Learn Master JQuery in a Short Period of Time
                    </a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o"></span>
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
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
                          <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span>{" "}
                          <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* pagination */}
            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul className="page-pagination">
                <li>
                  <a className="next" href="#url">
                    <span className="fa fa-angle-left"></span> Prev
                  </a>
                </li>
                <li>
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    2
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    3
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#url">
                    ....
                  </a>
                </li>
                <li>
                  <a className="next" href="#url">
                    Next <span className="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* //pagination */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
