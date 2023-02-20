import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function Wishlist() {
  return (
    <>
      <Meta title="Wishlist" />
      <Breadcrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="w-100" />
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">
                    Horon T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="w-100" />
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">
                    Horon T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
