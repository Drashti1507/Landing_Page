import React from "react";
import "../Components/Offer_Area.css";


// import "../Components/Brand_Area.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

/* images */
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
      {/* 
      <div class="brand-area">
        <div class="container">
          <div class="brand__wrp">
            <div class="brand__shape">
              <img src="assets/images/shape/brand-shape.png" alt="" />
            </div>
            <div class="swiper brand__slider swiper-initialized swiper-horizontal swiper-pointer-events">
              <div class="swiper-wrapper" id="swiper-wrapper-17233b49661592ca" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-1463px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="2 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="1">
                <div class="brand__image image">
                  <img src="assets/images/brand/brand-image2.png" alt="image" />
                </div>
              </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="3 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="2">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image3.png" alt="image" />
                  </div>
                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="4 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="3">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image4.png" alt="image" />
                  </div>
                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" role="group" aria-label="5 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="4">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image5.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide" role="group" aria-label="1 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="0">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image1.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide" role="group" aria-label="2 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="1">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image2.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="2">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image3.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-active" role="group" aria-label="4 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="3">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image4.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-next" role="group" aria-label="5 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="4">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image5.png" alt="image" />
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="1 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="0">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image1.png" alt="image" />
                  </div>
                </div><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="2 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="1">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image2.png" alt="image" />
                  </div>
                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="3 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="2">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image3.png" alt="image" />
                  </div>
                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="4 / 5" style="width: 179px; margin-right: 30px;" data-swiper-slide-index="3">
                  <div class="brand__image image">
                    <img src="assets/images/brand/brand-image4.png" alt="image" />
                  </div>
                </div></div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
          </div>
        </div>
      </div> */}
{/* 
      <div className="brand-area">
        <div className="container">
          <div className="brand__wrp">
            <div className="brand__shape">
              <img src="assets/images/shape/brand-shape.png" alt="" />
            </div>

            <div className="swiper brand__slider">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="brand__image image">
                    <img src="assets/images/brand/brand-image1.png" alt="brand" />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="brand__image image">
                    <img src="assets/images/brand/brand-image2.png" alt="brand" />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="brand__image image">
                    <img src="assets/images/brand/brand-image3.png" alt="brand" />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="brand__image image">
                    <img src="assets/images/brand/brand-image4.png" alt="brand" />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="brand__image image">
                    <img src="assets/images/brand/brand-image5.png" alt="brand" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div> */}


    </>
  );
};

export default OfferArea;
