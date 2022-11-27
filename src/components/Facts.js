import React from "react";

import CountUp from "react-countup";

export default function Facts() {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-4">
          <div className="fact-card col-lg-3 col-md-6 ">
            <div className="fact-item rounded text-center h-100 p-5">
              <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
              <p className="mb-2">Years Experience</p>
              <h1 className="display-5 mb-0" data-toggle="counter-up">
                <CountUp end={100} duration={2.5} className="Playfair" />
              </h1>
            </div>
          </div>

          <div className="fact-card col-lg-3 col-md-6 ">
            <div className="fact-item rounded text-center h-100 p-5">
              <i className="fa fa-users fa-4x text-primary mb-4"></i>
              <p className="mb-2">Skilled Professionals</p>
              <h1 className="display-5 mb-0" data-toggle="counter-up">
                <CountUp end={175} duration={2.5} className="Playfair" />
              </h1>
            </div>
          </div>

          <div className="fact-card col-lg-3 col-md-6 ">
            <div className="fact-item  rounded text-center h-100 p-5">
              <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
              <p className="mb-2">Total Products</p>
              <br />
              <h1 className="display-5 mb-0" data-toggle="counter-up">
                <CountUp end={135} duration={2.5} className="Playfair" />
              </h1>
            </div>
          </div>

          <div className="fact-card col-lg-3 col-md-6 ">
            <div className="fact-item rounded text-center h-100 p-5">
              <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
              <p className="mb-2">Order Everyday</p>
              <br />
              <h1 className="display-5 mb-0" data-toggle="counter-up">
                <CountUp end={9357} duration={2.5} className="Playfair" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
