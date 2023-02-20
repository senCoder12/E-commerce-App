import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Meta title="Your Shopping Cart" />
      <Breadcrumb title="Your Shopping Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between card-header border-bottom">
              <h3 className="cart-col-1 table-header">Product</h3>
              <h3 className="cart-col-2 table-header">Price</h3>
              <h3 className="cart-col-3 table-header">Quantity</h3>
              <h3 className="cart-col-4 table-header">Total</h3>
            </div>
            <div className="d-flex align-items-center justify-content-between card-data border-bottom py-3">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <p className="title">Watch</p>
                  <p className="color">Color : Red</p>
                  <p className="size">Size : M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                    defaultValue={1}
                  />
                </div>
                <div className="delete-btn">
                  <AiFillDelete className="text-danger"/>
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100.00</h5>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between card-data border-bottom py-3">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <p className="title">Watch</p>
                  <p className="color">Color : Red</p>
                  <p className="size">Size : M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                    defaultValue={1}
                  />
                </div>
                <div className="delete-btn">
                  <AiFillDelete className="text-danger"/>
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100.00</h5>
              </div>
            </div>
            <Link to={"/product"} className="button mt-3 spacing">Continue Shopping</Link>
            <div className="d-flex justify-content-end flex-column align-items-end gap-10 checkout-section mb-5">
                <div className="d-flex align-items-center gap-20">
                <p className="mb-0 spacing">Subtotal</p>
                <span className="spacing total">$100.00</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to={"/checkout"} className="button w-25 text-center spacing">Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
