import "./css/home.css";
import ProductCard from "../components/ProductCard.tsx";

import { next, prev } from "../assets/utils/carousel.ts";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* main-slider */}
      <section className="w3l-main-slider" id="home">
        <div className="carousel-area">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <li>
                  <div className="slider-info banner-view bg bg2">
                    <div className="banner-</section>info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h5>50% Discount on all Popular Products</h5>
                          <p className="mt-4 pr-lg-4">
                            Take the first step to your journey to success with
                            us
                          </p>
                          <Link
                            className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                            to="product-list"
                          >
                            View the Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="carousel-item next">
                <li>
                  <div className="slider-info  banner-view banner-top1 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h5>Improve your business in Less Time </h5>
                          <p className="mt-4 pr-lg-4">
                            Our self improvement Products is very effective
                          </p>
                          <Link
                            className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                            to="product-list"
                          >
                            View the Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="carousel-item">
                <li>
                  <div className="slider-info banner-view banner-top2 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h5>Be More Productive to Be More Successful</h5>
                          <p className="mt-4 pr-lg-4">
                            Don't waste your time, check out our productive
                            Products
                          </p>
                          <Link
                            className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                            to="product-list"
                          >
                            View the Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <div className="carousel-item prev">
                <li>
                  <div className="slider-info banner-view banner-top3 bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="banner-info-bg">
                          <h5>
                            Enhance your marketing skill with best online
                            Products
                          </h5>
                          <p className="mt-4 pr-lg-4">
                            Take the first step to your journey to success with
                            us
                          </p>
                          <Link
                            className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                            to="product-list"
                          >
                            View the Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
            onClick={prev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            role="button"
            data-slide="next"
            onClick={next}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            ></path>
          </svg>
        </div>
      </section>
      {/* /main-slider */}
      <section className="products">
        <div className="blog pb-5" id="Products">
          <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center mb-1">
              Join our membership
            </h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Featured Selected <span>Products</span>
            </h3>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="mt-5 text-more">
              <p className="pt-md-3 sample text-center">
                <Link to="products">
                  View All Products{" "}
                  <span className="pl-2 fa fa-long-arrow-right"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-features py-5" id="facilities">
        <div className="call-w3 py-lg-5 py-md-4 py-2">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Study and graduate</h5>
                <h3 className="title-big mb-4">Our Facilities </h3>
                <p className="text-para">
                  Every entrepreneur dreams of becoming big. While setting up
                  your online store, one of your prime motives is to sell more
                  products and gain higher profits. Throughout your
                  entrepreneurial journey, you might have dreamt of selling
                  products internationally but could not due to many reasons.
                  Or, you tried going global but failed. So, here is a complete
                  guide to help you sell and promote your products in the global
                  market.{" "}
                </p>
                <p className="mt-3">
                  For further insights, we offer additional resources on lead
                  generation and effective advertising strategies in China. As
                  an international team, we possess a deep understanding of
                  Chinese consumers, their needs, and their habits. We are
                  dedicated to supporting you in developing and expanding your
                  business in China.
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="call-grids-w3 d-grid">
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-certificate"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Global Marketing
                      </a>
                    </h4>
                    <p>
                      Marketing on a worldwide scale reconciling or taking
                      global operational differences
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-book"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Highest Quality
                      </a>
                    </h4>
                    <p>well-made, reliable, and performs as expected</p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-trophy"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        After-sale Service
                      </a>
                    </h4>
                    <p>
                      {" "}
                      ongoing support and assistance that a business provides to
                      customers after they have purchased a product or service.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-graduation-cap"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        24h Assistant
                      </a>
                    </h4>
                    <p>
                      the completion of a request within twenty-four hours of
                      receipt of the request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <h5 className="title-small text-center mb-1">From the news</h5>
          <h3 className="title-big text-center mb-sm-5 mb-4">
            Latest
            <span>News</span>
          </h3>
          <div className="row top-pics">
            <div className="col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Enhance your educational skills and also experience with
                    best online Products
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team1.jpg"
                      alt="blogs"
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Isabella ava</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value"> Nov 19, 2020 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                    Be more productive to be more Successful. Take your first
                    jouney
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team2.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Charlotte mia</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value">Nov 19, 2020 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="top-pic3">
                  <div className="card-body blog-details">
                    <a href="#blog-single" className="blog-desc">
                      Our self improvement Products are more effective. Start
                      leaarning online
                    </a>
                    <div className="author align-items-center">
                      <img
                        src="assets/images/team3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <a href="#author">Elizabeth</a>
                        </li>
                        <li className="meta-item blog-lesson">
                          <span className="meta-value">Nov 19, 2020</span>.
                          <span className="meta-value ml-2">
                            <span className="fa fa-clock-o"></span>1 min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-md-5 mt-4 text-more text-center">
            <a href="blog.html">
              View All Posts
              <span className="pl-2 fa fa-long-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
      {/* //middle */}
      <section className="w3l-team py-5" id="team">
        <div className="call-w3 py-lg-5 py-md-4">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Experienced professionals</h5>
                <h3 className="title-big mb-4">Meet our experts</h3>
                <p className="text-para">
                  Managing deals is critically important. Use your knowledge of
                  customer’s needs to build a case that your product will
                  benefit your customer both personally and professionally. Make
                  sure you understand exactly how the buying decision is made at
                  your customer and what steps need to be mutually accomplished
                  to move the deal forward at every stage. Recognize your
                  success or failure will be subject to a number of decision
                  makers and influencers at this stage — your depth of knowledge
                  on this process is an asset. Don’t be afraid to ask hard
                  questions; not knowing often leads to a deal not happening.
                </p>
                <p className="mt-3">
                  Designing a sales process is analogous to designing a product:
                  test, refine, test again. Expect to make mistakes. Learn from
                  those mistakes and make your process better. Once you have
                  gone through the process a number of times and established
                  some beachhead customers, you’ll be well on your way to
                  establishing repeatability in your sales cycle.
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  Discover More
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team1.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">William</a>
                        </h3>
                        <span className="post">Director</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-sm-0 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team2.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Calvin</a>
                        </h3>
                        <span className="post">Managing Director</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team3.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Kevin</a>
                        </h3>
                        <span className="post">Senior Account Manager</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team4.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Alec</a>
                        </h3>
                        <span className="post">Account Manager</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="w3l-testimonials" id="clients">
        {/* /grids */}
        <div className="cusrtomer-layout py-5">
          <div className="container py-lg-4 py-md-3 pb-lg-0">
            <h5 className="title-small text-center mb-1">Testimonials</h5>
            <h3 className="title-big text-center mb-sm-5 mb-4">
              Happy Clients & Feedbacks
            </h3>
            {/* /grids */}
            <div className="testimonial-width">
              <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Sportopia has been essential in advancing our online
                          presence. Their social media management has brought
                          our seafood to life with striking photography that
                          captivates our audience. Their PR expertise has also
                          sharpened our brand, connecting us with our community
                          more effectively than ever!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm1.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>John wilson</h3>
                          <p className="indentity">France</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          You have been absolutely wonderful for Kinship Center,
                          and I can't thank you enough for all your tremendous
                          skills, support and patience specially during our
                          merger. You will always be Kinship Center's vendor of
                          choice!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm2.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Julia sakura</h3>
                          <p className="indentity">USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Sportopia was pivotal in launching our restaurant's
                          brand, crafting a distinctive logo and engaging smart
                          menus that resonate with our clientele. Their
                          branding, marketing, and exquisite food photography
                          capture the true flavor of our offerings. The poster
                          menus they designed also add to our venue's charm. We
                          highly recommend their services for any restaurant
                          aiming to stand out..
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Mike Thyson</h3>
                          <p className="indentity">Germany</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          It's always a pleasure to work with Will and his team.
                          They are personable, responsive, and results-oriented!
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm4.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Always available, extremely knowledgeable, and a
                          tremendous "can-do" attitude. Our company was on a
                          tight timeline and strict budget to create a
                          first-class mobile interpretation app, and Will was
                          the perfect partner. His guidance and advice was
                          invaluable in producing that app which easily exceeded
                          my expectations... the entire company was thrilled
                          with it! Without any hesitation... highly recommended.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm5.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">UK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          Our events have been brilliantly captured by
                          Sportopia' photography and videography services. Their
                          exceptional eye for detail and storytelling
                          consistently deliver professional and creative
                          memories of our gatherings. Their work comes highly
                          recommended for its outstanding quality.
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/bm6.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Laura gill</h3>
                          <p className="indentity">Spain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>
                          sincerely thanks eLab Communications for their superb
                          photography and videography, which perfectly captured
                          our festival's spirit. Their media coverage through
                          WhatsUpMonterey also greatly expanded our event's
                          reach. We highly recommend eLab's services for
                          capturing and sharing any event's essence..
                        </q>
                      </blockquote>
                      <div className="testi-des">
                        <div className="test-img">
                          <img
                            src="assets/images/team3.jpg"
                            className="img-fluid"
                            alt="client-img"
                          />
                        </div>
                        <div className="peopl align-self">
                          <h3>Smith Johnson</h3>
                          <p className="indentity">Austria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
        {/* //grids */}
      </section>
      {/* //testimonials */}
      <section className="w3l-clients py-5" id="clients">
        <div className="call-w3 py-md-4 py-2">
          <div className="container">
            <div className="company-logos text-center">
              <div className="row logos">
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                  <img
                    src="assets/images/brand3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                  <img
                    src="assets/images/brand4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand5.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                  <img
                    src="assets/images/brand6.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
