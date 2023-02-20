import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function Signup() {
  return (
    <>
      <Meta title="Create Account" />
      <Breadcrumb title="Create Account" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column gap-10">
                <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                      <button className="button signup align-items-center" type="submit">Create</button>
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

export default Signup;
