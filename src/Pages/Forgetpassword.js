import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function Forgetpassword() {
  return (
    <>
      <Meta title="Forget Password" />
      <Breadcrumb title="Forget Password" />
      <div className="forget-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-10">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3 d-flex flex-column justify-content-center gap-10 align-items-center">
                    <button className="button" type="submit">
                      Submit
                    </button>
                    <Link to="/login" className="mt-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgetpassword;
