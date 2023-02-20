import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function RefundPolicy() {
  return (
    <>
      <Meta title="Refund Policy" />
      <Breadcrumb title="Refund Policy" />
      <div className="refund-policy-wrapper home-wrapper-2 py-5">
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

export default RefundPolicy;
