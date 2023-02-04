import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";
import {BsLinkedin,BsYoutube,BsInstagram, BsGithub} from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="d-flex align-items-center footer-top-data gap-30">
                <img src="images/newsletter.png" alt="news" />
                <h2 className="mb-0 text-center text-white">
                  Sign up for Newsletter
                </h2>
              </div>
            </div>
            <div className="Col-7" style={{ width: "58%" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter your email address..."
                  aria-label="Enter your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 text-white">Contact us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br/> Sonipat, Haryana <br/>
                  Pincode: 131103
                </address>
                <a href="tel:+91 8116089383" className="mt-3 d-block mb-1 text-white">
                  +91 8116089383
                </a>
                <a href="mailto:mayukhsen448@gmail.com" className="mt-4 d-block mb-0 text-white">
                  mayukhsen448@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a href="">
                    <img/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Privacy Policy
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Shopping Policy
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Refund Policy
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Terms & Conditions
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"#"} className="py-2 mb-1 text-white">
                  About Us
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Faq
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Laptop
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Headphones
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Tablets
                </Link>
                <Link to={"#"} className="py-2 mb-1 text-white">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white mb-0 text-center">
                &copy; {new Date().getFullYear()} Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
