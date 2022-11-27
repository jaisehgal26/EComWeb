import React from "react";

export default function Review() {
  return (
    <div className="container review_container">
      <section className="ms-4 my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-xl-6 text-center">
            <h3 className="mb-4">#CLIENT'S REVIEW</h3>
            <h1 className="display-6 mb-4 Playfair">
              More Than 20000+ Customers Trusted Us
            </h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <h5 className="mb-3 Playfair">Maria Smantha</h5>
            <h6 className="text-primary mb-3">Profession</h6>
            <hr />
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Lots of great pastries.
              Nice people. Good coffee and a squeaky clean restroom 🙂 A place
              with self respect! I like it.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
            <hr />
          </div>

          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <h5 className="mb-3 Playfair">Lisa Cudrow</h5>
            <h6 className="text-primary mb-3">Profession</h6>
            <hr />
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Wow! Super cute place
              with amazing pastries. The staff was also super nice and
              welcoming.
              <br></br>
              Definitely recommend a trip!
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
            <hr />
          </div>

          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <h5 className="mb-3 Playfair">John Smith</h5>
            <h6 className="text-primary mb-3">Profession</h6>
            <hr />
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Such a gem! Not only are
              the staff and pastries / donuts incredible, you can't beat the
              prices and supporting local! Get here ASAP!
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}
