import React from "react";
import carousel_1 from "../img/carousel-1.jpg";
import carousel_2 from "../img/carousel-2.jpg";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carousel_1}
              className="d-block w-100"
              alt="..."
              style={{ filter: " blur(1px)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col my-5">
                    <p className="carousel_header text-uppercase fw-bold mb-2">
                      #The Best Bakery
                    </p>
                    <h1 className="display-1  mb-4 animated slideInDown carousel_detail">
                      We Bake With Passion
                    </h1>
                    <blockquote className="blockquote mb-4">
                      <p>
                        <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                        <span className="font-italic">
                          "Baking cookies is comforting, they are the sweetest
                          little bit of comfort food. They are very bite-sized
                          and personal.""
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carousel_2}
              className=" d-block w-100"
              alt="..."
              style={{ filter: " blur(1px)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col my-5">
                    <p className="carousel_header text-uppercase fw-bold mb-2">
                      #The Best Bakery
                    </p>
                    <h1 className="display-1  mb-4 animated slideInDown carousel_detail">
                      We Bake With Passion
                    </h1>
                    <blockquote className="blockquote mb-4">
                      <p>
                        <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                        <span className="font-italic">
                          "Baking cookies is comforting, they are the sweetest
                          little bit of comfort food. They are very bite-sized
                          and personal."
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
