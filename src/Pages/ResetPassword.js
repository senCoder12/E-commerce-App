import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function ResetPassword() {
  return (
    <>
      <Meta title="Reset Password" />
      <Breadcrumb title="Reset Password" />
      <div className="reset-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-20">
                <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
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
                      <button className="button signup align-items-center" type="submit">Confirm</button>
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

export default ResetPassword;
