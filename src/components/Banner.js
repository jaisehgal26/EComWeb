import React from "react";

export default function Banner() {
  return (
    <div className="container-xxl bg-primary my-5 py-5 pt-0">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 text-light mb-0 Playfair">
              The Best Bakery In Your City
            </h1>
          </div>
          <div className="text-light col-lg-6 text-lg-end">
            <div className="d-inline-flex align-items-center text-start">
              <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
              <div className="ms-4">
                <p className="fs-5 fw-bold mb-0 ">Call Us</p>
                <p className="fs-1 fw-bold mb-0 ">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
