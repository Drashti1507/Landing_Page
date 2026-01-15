import React from "react";
import "../Components/Offer_Area.css";

/* react icons */
import {
  FaGlobe,
  FaAndroid,
  FaApple,
  FaWatchmanMonitoring,
  FaTv,
  FaRocket,
} from "react-icons/fa";

/* shapes */
import shadowShape from "../images/offer-shadow-shape.png";
import shapeLeft from "../images/offer-bg-shape-left.png";
import shapeRight from "../images/offer-bg-shape-right.png";
import itemShapeTop from "../images/offter-item-shape-top.png";
import itemShapeBottom from "../images/offter-item-shape-bottom.png";
import sectionIcon from "../images/section-title.png";

const offers = [
  { icon: <FaGlobe />, title: "Website" },
  { icon: <FaAndroid />, title: "Android" },
  { icon: <FaApple />, title: "IOS" },
  { icon: <FaWatchmanMonitoring />, title: "Watch" },
  { icon: <FaTv />, title: "TV" },
  { icon: <FaRocket />, title: "IOT" },
];

const OfferArea = () => {
  return (
    <section className="offer-area secondary-bg pt-120 pb-200">
      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="offer__shadow">
        <img src={shadowShape} alt="shadow" />
      </div>

      <div className="offer__shape-left">
        <img src={shapeLeft} alt="shape" />
      </div>

      <div className="offer__shape-right">
        <img src={shapeRight} alt="shape" />
      </div>

      <div className="container">
        {/* ===== HEADER ===== */}
        <div className="offer-header">
          <div className="section-header">
            <h5>
              <img className="me-1" src={sectionIcon} alt="icon" />
              Our Offering
            </h5>

            <h2 className="text-white">
              Enhance And Pioneer Using <br /> Technology Trends
            </h2>
          </div>

          <a href="/" className="offer-btn">
            Explore More →
          </a>
        </div>

        {/* ===== OFFER ITEMS ===== */}
        <div className="offer-cards">
          {offers.map((item, index) => (
            <div className="offer-card" key={index}>
              <div className="shape-top">
                <img src={itemShapeTop} alt="shape" />
              </div>

              <div className="shape-bottom">
                <img src={itemShapeBottom} alt="shape" />
              </div>

              <div className="offer-icon">{item.icon}</div>

              <h4 className="text-white mt-20">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferArea;
