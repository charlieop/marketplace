import BreadCrumps from "../components/BreadCrumps.tsx";
import ProductCard from "../components/ProductCard.tsx";

function Products() {
  return (
    <div>
      <BreadCrumps page="Products" title="All Pourses" />
      <section className="products">
        <div className="blog pb-5" id="products">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              <ProductCard />
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

export default Products;
