import React from "react";
import "../Components/Service_Area.css";

/* images */
import serviceBgShape from "../images/service-bg-shape.png";
import sectionIcon from "../images/service-item-shape.png";

import serviceShape from "../images/service-item-shape.png";
import serviceIcon1 from "../images/service-icon1.png";
import serviceIcon2 from "../images/service-icon2.png";
import serviceIcon3 from "../images/service-icon3.png";

function ServiceArea() {
  return (
    <section className="service-area pt-120 pb-120">
      {/* background shape */}
      <div className="service__shape sway_Y__animation">
        <img src={serviceBgShape} alt="shape" />
      </div>

      <div className="container">
        {/* ===== HEADER ===== */}
        <div className="service-header-row">
          <div className="section-header">
            <h5>
              <img className="me-1" src={sectionIcon} alt="icon" />
              What We Offer
            </h5>
            <h2>Excellent IT Services</h2>
          </div>

          <a href="/service" className="btn-one">
            View All Services <i className="fa-regular fa-arrow-right-long"></i>
          </a>
        </div>

        {/* ===== SERVICES ===== */}
        <div className="row g-4">
          {/* item 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="service__item active">
              <div className="service-shape">
                <img src={serviceShape} alt="shape" />
              </div>

              <div className="service__icon">
                <img src={serviceIcon1} alt="icon" />
              </div>

              <h4>
                <a href="/service-details">IT Management</a>
              </h4>

              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>

          {/* item 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="service__item">
              <div className="service-shape">
                <img src={serviceShape} alt="shape" />
              </div>

              <div className="service__icon">
                <img src={serviceIcon2} alt="icon" />
              </div>

              <h4>
                <a href="/service-details">Cyber Security</a>
              </h4>

              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>

          {/* item 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="service__item">
              <div className="service-shape">
                <img src={serviceShape} alt="shape" />
              </div>

              <div className="service__icon">
                <img src={serviceIcon3} alt="icon" />
              </div>

              <h4>
                <a href="/service-details">Web Development</a>
              </h4>

              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
