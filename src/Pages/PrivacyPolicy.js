import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function PrivacyPolicy() {
  return (
    <>
      <Meta title="Privacy Policy" />
      <Breadcrumb title="Privacy Policy" />
      <div className="privacy-policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
