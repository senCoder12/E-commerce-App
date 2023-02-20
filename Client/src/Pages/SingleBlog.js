import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import {BsArrowLeft} from "react-icons/bs"
import { blogData } from "../Utils/blogData";

function SingleBlog() {
  let { id } = useParams();
  const {img,title,desc} = blogData[id-1];
  return (
    <>
      <Meta title={title} />
      <Breadcrumb title={title} />
      <div className="single-blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BsArrowLeft />
                  <p className="mb-0">Back to Blogs</p>
                </Link>
                <h3 className="title">
                  {title}
                </h3>
                <img
                  src={img}
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  {desc}
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
