import React from "react";
import BlogCard from "../Components/BlogCard";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import { blogData } from "../Utils/blogData";

function Blog() {
  const excerpt = (str) => {
    if (str.length > 100) {
      str = str.substring(0, 100) + "...";
    }
    return str;
  };
  return (
    <>
      <Meta title="Blogs" />
      <Breadcrumb title="Our Blogs" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {blogData &&
                  blogData.map((data, idx) => {
                    return (
                      <div className="col-6">
                        <BlogCard
                          img={data.img}
                          desc={excerpt(data.desc)}
                          id={idx + 1}
                          title={data.title}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
