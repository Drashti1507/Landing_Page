
import React from "react";
import "../Components/About_Area.css";
import { FaPlay } from "react-icons/fa";

/* images */
import aboutLine from "../images/about-line.png";
import aboutImg1 from "../images/about-image1.jpg";
import aboutImg2 from "../images/about-image2.png";
import aboutCircle from "../images/about-circle.png";

import sectionIcon from "../images/section-title.png";
import aboutIcon1 from "../images/about-icon1.png";
import aboutIcon2 from "../images/about-icon2.png";
import aboutInfoImg from "../images/about-info.png";

function AboutArea() {
  return (
    <section className="about-area">
      {/* bottom shape */}
      <div className="about__shape">
        <img src={aboutLine} alt="shape" />
      </div>

      <div className="about-container">
        <div className="about-row">

          {/* ===== LEFT IMAGE AREA ===== */}
          <div className="about-left">

            <div className="about-images">

              {/* BIG IMAGE */}
              <div className="big-image">
                <img src={aboutImg1} alt="about" />
              </div>

              {/* SMALL IMAGE */}
              <div className="sm-image">
                <img src={aboutImg2} alt="about small" />

                <a
                  href="https://www.youtube.com/watch?v=iVqz_4M5mA0"
                  target="_blank"
                  rel="noreferrer"
                  className="play-btn"
                >
                  <FaPlay />
                </a>
              </div>

              {/* CIRCLE SHAPE */}
              <div className="circle-shape">
                <img src={aboutCircle} alt="circle" />
              </div>

            </div>

          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div className="about-right">

            <div className="section-header">
              <h5>
                <img src={sectionIcon} alt="icon" /> ABOUT GRATECH
              </h5>

              <h2>
                We Strive To Offer <br />
                Intelligent Business Solutions
              </h2>

              <p>
                Aonsectetur adipiscing elit aenean scelerisque augue vitae
                consequat aisque eget congue velit in cursus sodales the turpis
                euismod quis sapien the condimentum nec lorem nulla augue.
              </p>
            </div>

            <div className="about-features">

              <div className="feature-item">
                <div className="icon">
                  <img src={aboutIcon1} alt="icon" />
                </div>
                <div>
                  <h4>Best Services</h4>
                  <p>Scelerisque augue the consequat sodales</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="icon">
                  <img src={aboutIcon2} alt="icon" />
                </div>
                <div>
                  <h4>24/7 Call Support</h4>
                  <p>Scelerisque augue the consequat sodales</p>
                </div>
              </div>

            </div>

            <div className="about-bottom">

              <a href="/about" className="btn-one">
                Explore More →
              </a>

              <div className="founder">
                <img src={aboutInfoImg} alt="founder" />
                <div>
                  <h5>Ronald Richards</h5>
                  <span>Co, Founder</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutArea;
