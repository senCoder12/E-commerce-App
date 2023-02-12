import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";

function SingleBlog() {
  return (
    <>
      <Meta title="Dynamic Blog NAME" />
      <Breadcrumb title="Dynamic Blog NAME" />
      <div className="single-blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center">
                  Go back
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  className="img-fluid w-100"
                  src="images/blog-1.jpg"
                  alt="blog"
                />
                <p>
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
