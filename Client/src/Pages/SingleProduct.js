import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import ReactStars from "react-rating-stars-component";
import "../CSS/singleProduct.css";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../Components/Color";
import { MdOutlineFavoriteBorder, MdOutlineLocalShipping } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import {GiMaterialsScience} from "react-icons/gi";

function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [showReviewForm, setReviewForm] = useState(false);
  const props = {
    width: 594,
    zoomWidth: 594,
    img: "https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg",
    zoomPosition: "original"
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Single Product title" />
      <Breadcrumb title="Single Product title" />
      <section className="single-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row bg-white rounded">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    APPLE Watch Series 2 - 42 Mm Stainless Steel Case
                  </h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ 100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a
                    href="#review"
                    onClick={() => {
                      setReviewForm((reviewFormState) => true);
                    }}
                    className="review-btn mb-2"
                  >
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center py-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="py-2">
                    <h3 className="product-heading mb-2">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="product-heading mb-2">Color :</h3>
                    <div className="product-data">
                      <Color />
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-items-center py-2">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                        className="form-control"
                        defaultValue={1}
                      />
                    </div>
                    <div className="d-flex justify-content-center gap-10 align-items-center">
                      <button className="button spacing">ADD TO CART</button>
                      <button className="button signup spacing">
                        BUY IT NOW
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-20 py-2">
                    <div className="d-flex justify-content-center align-items-center gap-10">
                      <MdOutlineFavoriteBorder />
                      <p className="mb-0">Add to wishlist</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-10">
                      <IoIosGitCompare />
                      <p className="mb-0">Add to Compare</p>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="d-flex gap-10 flex-column border-bottom accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button product-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="d-flex align-items-center gap-10">
                          <MdOutlineLocalShipping/>
                          <p className="mb-0">Shipping & Returns</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body product-data py-0 mb-1">
                        Free shipping and returns available on all orders!
                        <br /> We ship all US domestic orders within
                        <b>5-10 business days!</b>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button product-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <div className="d-flex align-items-center gap-10">
                          <GiMaterialsScience/>
                          <p className="mb-0">Materials</p>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body product-data py-0 mb-1">
                        Running Shoes cushions your stride with soft foam to
                        keep you running in comfort. Lightweight knit material
                        wraps your foot in breathable support, while a
                        minimalist design fits in just about anywhere your day
                        takes you.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column border-bottom accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button product-heading collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <div className="d-flex justify-content-center align-items-center gap-10">
                      <MdOutlineFavoriteBorder />
                      <p className="mb-0">Care Instructions</p>
                    </div>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body product-data py-0 mb-1">
                        Use a soft damp cloth and a drop of mild soap to remove
                        any haze. Air dry.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center mt-4">
                  <h3 className="product-heading">Share Link :</h3>
                  <p onClick={()=>copyToClipboard("copy link")} className="product-data">Copy to clipboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 px-0">
              <h4 className="text-dark">Description</h4>
            </div>
            <div className="col-12 description-content-wrapper py-5 px-5 bg-white">
              <p>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div id="review" className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper bg-white p-5">
                <div className="review-head">
                  <div className="w-100">
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 3 reviews</p>
                      </div>
                      {orderedProduct && (
                        <div
                          onClick={() => {
                            setReviewForm(
                              (reviewFormState) => !reviewFormState
                            );
                          }}
                        >
                          <p
                            className="text-dark text-decoration-underline mb-0"
                            style={{ cursor: "pointer" }}
                          >
                            Write a review
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {showReviewForm && (
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-10">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          type="text"
                          name=""
                          rows={5}
                          placeholder="Comments"
                          className="form-control mt-2"
                        />
                      </div>
                      <div className="d-flex justify-content-end mt-2">
                        <button className="button">Submit Comment</button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Mayukh</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem soluta nobis est eligendi optio cumque nihil impedit
                      quo minus id quod maxime placeat facere possimus, omnis
                      voluptas assumenda est, omnis dolor repellendus.
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessita...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="suggestion-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You May Also Like</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
