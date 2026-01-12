import React from "react";
import "../Components/Banner_Area.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import bannerLine from "../images/banner-line.png";
import leftShape1 from "../images/banner-solid-left-shape.png";
import leftShape2 from "../images/banner-regular-left-shape.png";
import leftShape3 from "../images/banner-shape-left.png";
import rightShape1 from "../images/banner-shape-right.png";
import rightLine1 from "../images/banner-right-line1.png";
import rightLine2 from "../images/banner-right-line2.png";
import rightLine3 from "../images/banner-right-line3.png";
import rightLine4 from "../images/banner-right-line4.png";
import rightLineShape from "../images/banner-shape-right-line.png";

import bg1 from "../images/banner-image.jpg";
import bg2 from "../images/banner-image2.jpg";
import bg3 from "../images/banner-image3.jpg";

function Banner_Area() {
  return (
    <main>
      <section className="banner-area">
        {/* top line */}
        <div className="banner__line">
          <img className="sway__animation" src={bannerLine} alt="shape" />
        </div>

        {/* SLIDER */}
        <Swiper
          className="banner__slider"
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {/* ===== SLIDE 1 ===== */}
          <SwiperSlide>
            <Shapes />
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${bg1})` }}
            ></div>

            <div className="container">
              <BannerContent />
            </div>
          </SwiperSlide>

          {/* ===== SLIDE 2 ===== */}
          <SwiperSlide>
            <Shapes />
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${bg2})` }}
            ></div>

            <div className="container">
              <BannerContent />
            </div>
          </SwiperSlide>

          {/* ===== SLIDE 3 ===== */}
          <SwiperSlide>
            <Shapes />
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${bg3})` }}
            ></div>

            <div className="container">
              <BannerContent />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}

export default Banner_Area;

/* ================= SHAPES ================= */

function Shapes() {
  return (
    <>
      <div className="banner__shape-left2">
        <img src={leftShape2} alt="shape" />
      </div>

      <div className="banner__shape-left1">
        <img src={leftShape1} alt="shape" />
      </div>

      <div className="banner__shape-left3">
        <img className="sway__animation" src={leftShape3} alt="shape" />
      </div>

      <div className="banner__shape-right2">
        <img src={rightLineShape} alt="shape" />
      </div>

      <div className="banner__shape-right1">
        <img src={rightShape1} alt="shape" />
      </div>

      <div className="banner__right-line1">
        <img src={rightLine1} alt="shape" />
      </div>

      <div className="banner__right-line2">
        <img src={rightLine2} alt="shape" />
      </div>

      <div className="banner__right-line3">
        <img src={rightLine3} alt="shape" />
      </div>

      <div className="banner__right-line4">
        <img src={rightLine4} alt="shape" />
      </div>
    </>
  );
}

/* ================= CONTENT ================= */

function BannerContent() {
  return (
    <div className="banner__content">
      <h4 className="text-white mb-20">
        <svg
          className="me-1"
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="25.6" height="15" rx="7.5" stroke="white" />
          <rect x="13.3" y="0" width="26.6" height="16" rx="8" fill="white" />
        </svg>
        Best IT SOLUTION Provider
      </h4>

      <h1 className="text-white">
        Excellent IT Services <br />
        for Your Success
      </h1>

      <p className="mt-20">
        Consectetur adipiscing elit aenean scelerisque at augue vitae consequat
        <br />
        quisque eget congue velit in cursus leo sed sodales.
      </p>

      <a href="/about" className="btn-one mt-60">
        Explore More →
      </a>
    </div>
  );
}
