import React from "react";
import "../Components/Brand_Area.css";

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

function BrandArea() {
  const brands = [
    brand1, brand2, brand3, brand4, brand5,
    brand1, brand2, brand3, brand4, brand5,
  ];

  return (
    <div className="brand-area">
      <div className="container">
        <div className="brand__wrp">
          {/* background shape */}
          <div className="brand__shape">
            <img src={brandShape} alt="shape" />
          </div>

          {/* brand slider */}
          <Swiper
            className="brand__slider"
            modules={[Autoplay]}
            loop={true}
            speed={2500}
            spaceBetween={25}
            slidesPerView={5}
            autoplay={{
              delay: 0, // continuous ticker
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
  );
}

export default BrandArea;
