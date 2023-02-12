import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Meta from "../Components/Meta";
import {
  AiFillHome,
  AiFillPhone,
  AiFillMail,
  AiFillInfoCircle,
} from "react-icons/ai";

function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <Breadcrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1821.0180529345103!2d88.2526808941368!3d24.100225708617547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676127650787!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                className="w-100"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        className="form-control w-100"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      />
                    </div>
                    <div className="w-19 mt-2">
                      <div className="button">Submit</div>
                  </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center mb-3 gap-10">
                        <AiFillHome />
                        <address  className="mb-0">
                          197/B Nilmoni Bhattyacharjee Lane, Berhampore,
                          Murshidabad
                        </address>
                      </li>
                    </ul>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center mb-3 gap-10">
                        <AiFillPhone />
                        <a href="tel:+91 8116089383">+91 8116089383</a>
                      </li>
                    </ul>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center mb-3 gap-10">
                        <AiFillMail />
                        <a
                          href="mailto:mayukhsen85082@gmail.com"
                          target="_blank"
                        >
                          mayukhsen85082@gmail.com
                        </a>
                      </li>
                    </ul>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center mb-3 gap-10">
                        <AiFillInfoCircle />
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
