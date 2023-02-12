import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function TermsOfService() {
  return (
    <>
      <Meta title="Terms of Service" />
      <Breadcrumb title="Terms of Service" />
      <div className="terms-of-service-wrapper home-wrapper-2 py-5">
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

export default TermsOfService;
