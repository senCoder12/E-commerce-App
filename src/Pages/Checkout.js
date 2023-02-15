import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineArrowBack} from "react-icons/md";

function Checkout() {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl mb-5">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev Corner</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active">Information</li>
                    &nbsp; /<li className="breadcrumb-item active">Shipping</li>
                    &nbsp; /<li className="breadcrumb-item active">Payment</li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  Mayukh Sen (mayukhsen85082@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex gap-20 w-75 justify-content-between flex-wrap"
                >
                  <div className="w-100">
                    <select className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/cart" className="text-dark align-items-center"><MdOutlineArrowBack/> Return to cart</Link>
                        <Link to="/cart" className="button">Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center gap-10 justify-content-around py-2">
                  <div className="w-25">
                    <div className="position-relative">
                      <span
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        style={{ top: "-12px", right: "-2px" }}
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt="watch"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="title">Product Title</h5>
                    <p>d / #color</p>
                  </div>
                  <div className="flex-grow-1 d-flex justify-content-end">
                    <h5>$ 100</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10 justify-content-around py-2">
                  <div className="w-25">
                    <div className="position-relative">
                      <span
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        style={{ top: "-12px", right: "-2px" }}
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt="watch"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="title">Product Title</h5>
                    <p>d / #color</p>
                  </div>
                  <div className="flex-grow-1 d-flex justify-content-end">
                    <h5>$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$ 19.45</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="mb-0">Total</h4>
                <h5 className="mb-0">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
