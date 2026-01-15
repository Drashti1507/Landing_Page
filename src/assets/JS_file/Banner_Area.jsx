import React from "react";
import "../Components/Banner_Area.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/* shapes */
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

/* backgrounds */
import bg1 from "../images/banner-image.jpg";
import bg2 from "../images/banner-image2.jpg";
import bg3 from "../images/banner-image3.jpg";

const slides = [bg1, bg2, bg3];

function Banner_Area() {
  return (
    <section className="banner-area">
      {/* top line */}
      <div className="banner__line">
        <img className="sway__animation" src={bannerLine} alt="shape" />
      </div>

      {/* swiper */}
      <Swiper
        className="swiper banner__slider"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={3000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          el: ".banner__dot",
          clickable: true,
        }}
      >
        {slides.map((bg, i) => (
          <SwiperSlide key={i}>
            {/* LEFT SHAPES */}
            <div className="banner__shape-left2 slideInLeft animated d1">
              <img src={leftShape2} alt="shape" />
            </div>

            <div className="banner__shape-left1 slideInLeft animated d2">
              <img src={leftShape1} alt="shape" />
            </div>

            <div className="banner__shape-left3 slideInLeft animated d3">
              <img className="sway__animation" src={leftShape3} alt="shape" />
            </div>

            {/* RIGHT SHAPES */}
            <div className="banner__shape-right2 slideInRight animated d1">
              <img src={rightLineShape} alt="shape" />
            </div>

            <div className="banner__shape-right1 slideInRight animated d2">
              <img src={rightShape1} alt="shape" />
            </div>

            <div className="banner__right-line1 slideInRight animated d3">
              <img src={rightLine1} alt="shape" />
            </div>

            <div className="banner__right-line2 slideInRight animated d4">
              <img src={rightLine2} alt="shape" />
            </div>

            <div className="banner__right-line3 slideInRight animated d5">
              <img src={rightLine3} alt="shape" />
            </div>

            <div className="banner__right-line4 slideInRight animated d6">
              <img src={rightLine4} alt="shape" />
            </div>

            {/* background */}
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>

            {/* content */}
            <div className="container">
              <div className="banner__content">

                <h4
                  data-animation="slideInRight"
                  data-duration="2s"
                  data-delay=".3s"
                  className="text-white mb-20 animated"
                >
                  <svg
                    className="me-1"
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="25.6667" height="15" rx="7.5" stroke="white" />
                    <rect x="13.3334" y="0" width="26.6667" height="16" rx="8" fill="white" />
                  </svg>
                  Best IT Solution Provider
                </h4>

                {/* <h1
                  data-animation="slideInRight"
                  data-duration="2s"
                  data-delay=".5s"
                  className="text-white animated"
                >
                  Excellent IT Services <br />
                  for Your Success
                </h1> */}

                  <h1
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                    className="text-white animated"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>Excellent IT Services</span>
                    <br />
                    for Your Success
                  </h1>

                <p
                  data-animation="slideInRight"
                  data-duration="2s"
                  data-delay=".7s"
                  className="mt-20 animated"
                >
                  Consectetur adipiscing elit aenean scelerisque at augue vitae consequat
                  <br />
                  quisque eget congue velit in cursus leo sed sodales est eget turpis.
                </p>

                <a
                  href="/about"
                  data-animation="slideInRight"
                  data-duration="2s"
                  data-delay=".9s"
                  className="btn-one mt-60 animated"
                >
                  Explore More <i className="fa-solid fa-arrow-right-long"></i>

                </a>

              </div>
            </div>

          </SwiperSlide>
        ))}

         <div className="banner__dot-wrp">
          <div className="dot-light banner__dot"></div>
        </div>
      </Swiper>

      {/* dots */}
      {/* <div className="banner__dot-wrp">
        <div className="dot-light banner__dot"></div>
      </div> */}
    </section>
  );
}

export default Banner_Area;
