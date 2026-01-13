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

const slides = [bg1, bg2, bg3];

function Banner_Area() {
  return (
    <section className="banner-area">
      {/* ===== TOP LINE ===== */}
      <div className="banner__line">
        <img className="sway__animation" src={bannerLine} alt="line" />
      </div>

      {/* ===== SLIDER ===== */}
      <Swiper
        className="banner__slider"
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index}>
            <Shapes />

            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className="container">
              <BannerContent />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== DOT WRAPPER (for styling if needed) ===== */}
      <div className="banner__dot-wrp"></div>
    </section>
  );
}

export default Banner_Area;

/* ================= SHAPES ================= */

function Shapes() {
  return (
    <>
      <div className="banner__shape-left2 anim-left d1">
        <img src={leftShape2} alt="shape" />
      </div>

      <div className="banner__shape-left1 anim-left d2">
        <img src={leftShape1} alt="shape" />
      </div>

      <div className="banner__shape-left3 anim-left d3">
        <img className="sway__animation" src={leftShape3} alt="shape" />
      </div>

      <div className="banner__shape-right2 anim-right d1">
        <img src={rightLineShape} alt="shape" />
      </div>

      <div className="banner__shape-right1 anim-right d2">
        <img src={rightShape1} alt="shape" />
      </div>

      <div className="banner__right-line1 anim-right d3">
        <img src={rightLine1} alt="shape" />
      </div>

      <div className="banner__right-line2 anim-right d4">
        <img src={rightLine2} alt="shape" />
      </div>

      <div className="banner__right-line3 anim-right d5">
        <img src={rightLine3} alt="shape" />
      </div>

      <div className="banner__right-line4 anim-right d6">
        <img src={rightLine4} alt="shape" />
      </div>
    </>
  );
}

/* ================= CONTENT ================= */

function BannerContent() {
  return (
    <div className="banner__content">
     <h4 className="anim-right d1">
        <svg
          className="banner__svg"
          style={{ marginRight: "8px" }}
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="banner-rect" x="0.5" y="0.5" width="25.6667" height="15" rx="7.5" />
          <rect className="banner-rect" x="13.3334" y="0" width="25.6667" height="16" rx="8" />
        </svg>
        Best IT SOLUTION Provider
      </h4>
      <h1 className="anim-right d2">
        Excellent IT Services <br />
        for Your Success
      </h1>

      <p className="anim-right d3">
        Consectetur adipiscing elit aenean scelerisque at augue vitae consequat
        <br />
        quisque eget congue velit in cursus leo sed sodales.
      </p>

      <a href="/about" className="btn-one anim-right d4">
        Explore More →
      </a>
    </div>
  );
}
