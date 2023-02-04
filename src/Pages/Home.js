import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "../CSS/home.css";
function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  position-relative">
                <img
                  src="images/main-banner.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link to={"#"} className="button">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap align-items-center justify-content-between">
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 or <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY IPAD AIR.</h5>
                    <p>
                      From $599.00 or <br /> $49.62/mo. for 12 months
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br /> styles and color
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="small banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE WNGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">Free all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save Upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Watches</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Cameras</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Watches</h5>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
