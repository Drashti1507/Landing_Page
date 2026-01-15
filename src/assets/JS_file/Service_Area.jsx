import React from "react";
import "../Components/Service_Area.css";

/* images */
import serviceBgShape from "../images/service-bg-shape.png";
import sectionIcon from "../images/section-title.png";

import serviceShape from "../images/service-item-shape.png";
import serviceIcon1 from "../images/service-icon1.png";
import serviceIcon2 from "../images/service-icon2.png";
import serviceIcon3 from "../images/service-icon3.png";

function ServiceArea() {
  return (
    <section className="service-area">
      {/* background shape */}
      <div className="service__shape">
        <img src={serviceBgShape} alt="shape" />
      </div>

      <div className="service-container">
        {/* ===== HEADER ===== */}
        <div className="service-header-row">
          <div className="section-header">
            <h5>
              <img src={sectionIcon} alt="icon" />
              What We Offer
            </h5>
            <h2>Excellent IT Services</h2>
          </div>

          <a href="/service" className="btn-one">
            View All Services <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* ===== SERVICES ===== */}
        <div className="service-grid">
          {/* item 1 */}
          <div className="service__item active">
            <div className="service-shape">
              <img src={serviceShape} alt="shape" />
            </div>

            <div className="service__icon">
              <img src={serviceIcon1} alt="icon" />
            </div>

            <h4>IT Management</h4>

            <p>
              Pellentesque nec the condimentum nec <br/> lorem nulla augue est
              ultricies ac iaculis <br/> ut euismod quis sapien.
            </p>
          </div>

          {/* item 2 */}
          <div className="service__item">
            <div className="service-shape">
              <img src={serviceShape} alt="shape" />
            </div>

            <div className="service__icon">
              <img src={serviceIcon2} alt="icon" />
            </div>

            <h4>Cyber Security</h4>

            <p>
               Pellentesque nec the condimentum nec <br/> lorem nulla augue est
              ultricies ac iaculis <br/> ut euismod quis sapien.
            </p>
          </div>

          {/* item 3 */}
          <div className="service__item">
            <div className="service-shape">
              <img src={serviceShape} alt="shape" />
            </div>

            <div className="service__icon">
              <img src={serviceIcon3} alt="icon" />
            </div>

            <h4>Web Development</h4>

            <p>
               Pellentesque nec the condimentum nec <br/> lorem nulla augue est
              ultricies ac iaculis <br/> ut euismod quis sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
