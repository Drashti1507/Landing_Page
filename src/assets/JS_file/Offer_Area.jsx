import React from "react";
import "../Components/Offer_Area.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* Brand images */
import brandShape from "../images/brand-shape.png";
import brand1 from "../images/brand-image1.png";
import brand2 from "../images/brand-image2.png";
import brand3 from "../images/brand-image3.png";
import brand4 from "../images/brand-image4.png";
import brand5 from "../images/brand-image5.png";


/* react icons */
import {
  FaGlobe,
  FaAndroid,
  FaApple,
  FaWatchmanMonitoring,
  FaTv,
  FaRocket,
} from "react-icons/fa";

/* offer shapes */
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

const brands = [
  brand1, brand2, brand3, brand4, brand5,
  brand1, brand2, brand3, brand4, brand5,
];

const OfferArea = () => {
  return (
    <>
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
                Enhance And Pioneer Using Technology Trends
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
      {/* ================= BRAND AREA (AFTER OFFER) ================= */}

        <div className="brand-area">
        <div className="container">
          <div className="brand__wrp">
            {/* background shape */}
            <div className="brand__shape">
              <img src={brandShape} alt="shape" />
            </div>

            {/* slider */}
            <Swiper
              className="brand__slider"
              modules={[Autoplay]}
              loop={true}
              speed={2500}
              spaceBetween={25}
              slidesPerView={5}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
              }}
            >
              {brands.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="brand__image">
                    <img src={img} alt={`brand-${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

  </>
  );
};

export default OfferArea;
