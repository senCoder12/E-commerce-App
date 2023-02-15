import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css";
function BlogCard({img, title,desc,id}) {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={img} className="img-fluid w-100" alt="blogs" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2023</p>
        <h5 className="title">{title}</h5>
        <p className="desc">
          {desc}
        </p>
        <Link to={`/blogs/${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
