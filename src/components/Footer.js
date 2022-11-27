import React from "react";
import product_1 from "../img/product-1.jpg";
import product_2 from "../img/product-2.jpg";
import product_3 from "../img/product-3.jpg";

import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="container-fluid  footer my-6 mb-0 py-5 ">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-4">
              <h4 className=" mb-4 Playfair">Office Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  to=""
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  to=""
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  to=""
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-0"
                  to=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <h4 className=" mb-4 Playfair">Quick Links</h4>
              <Link className="btn btn-link" to="/">
                Home
              </Link>

              <Link className="btn btn-link" to="/products">
                Products
              </Link>

              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </div>
            <div className="col-lg-4 col-md-4">
              <h4 className=" mb-4 Playfair">Photo Gallery</h4>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_1}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_2}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_3}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_2}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_3}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src={product_1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
