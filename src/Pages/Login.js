import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function Login() {
  return (
    <>
      <Meta title="Login" />
      <Breadcrumb title="Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-10">
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
                    name="password"
                    placeholder="Password"
                    className="form-control mt-3"
                  />
                </div>
                <div>
                    <Link to="/forget-password">Forget your Password?</Link>
                    <div className="d-flex justify-content-center gap-10">
                        <button className="button">Log In</button>
                        <button className="button signup">Sign Up</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
