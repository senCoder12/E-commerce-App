import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import ReactStars from "react-rating-stars-component";
import "../CSS/singleProduct.css";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import ReactImageZoom from "react-image-zoom";

function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [showReviewForm, setReviewForm] = useState(false);
  const props = { width: 600, zoomWidth: 650, zoomPosition: "original", img: "https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg" };
  return (
    <>
      <Meta title="Single Product title" />
      <Breadcrumb title="Single Product title" />
      <section className="single-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div><ReactImageZoom {...props} /></div>
              </div>
            </div>
            <div className="col-6"></div>
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
            <div className="col-12">
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
