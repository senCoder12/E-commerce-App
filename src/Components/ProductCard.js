import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  const { grid } = props;
  const location = useLocation();
  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to={"/product/:id"} className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to={"#"}>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img src="images/watch.jpg" className="img-fluid" alt="products" />
          <img src="images/watch-1.png" className="img-fluid" alt="products" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt...
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to={"#"}>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link to={"#"}>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link to={"#"}>
              <img src="images/add-cart.svg" alt="cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
