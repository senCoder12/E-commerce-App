import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css";
function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blogs" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard.
        </p>
        <Link to="/blogs/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;