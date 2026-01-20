import React from "react";
import "../Components/Testimonial_Area.css";

import bgImg from "../images/testimonial-bg.png";
import sectionIcon from "../images/section-title.png";
import testi1 from "../images/testimonial-image1.png";
import testi2 from "../images/testimonial-image2.png";

import { BsToggleOn } from "react-icons/bs";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialArea = () => {
  return (
    <section
      className="testimonial-area"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="testimonial-container">
        <div className="trow">

          {/* ===== LEFT FORM AREA (40%) ===== */}
          <div className="col-left wow fadeInLeft">
            <div className="talk-us__item">
              <div className="testimonial-header mb-30">
                <h5 className="text-white d-flex align-items-center gap-3">
                  <BsToggleOn size={24} />
                   TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>

              <form>
                <div className="row">
                  <div>
                    <label>Your Name*</label>
                    <input type="text" placeholder="Robot fox" />
                  </div>

                  <div>
                    <label>Your Email*</label>
                    <input type="email" placeholder="info@example.com" />
                  </div>

                  <div>
                    <label>Subject*</label>
                    <input type="text" placeholder="Subject" />
                  </div>

                  <div>
                    <label>Your Phone*</label>
                    <input type="text" placeholder="+1253 457 7840" />
                  </div>

                  <div className="col-12">
                    <label>Message*</label>
                    <textarea placeholder="Write Message"></textarea>
                  </div>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          {/* ===== RIGHT TESTIMONIAL AREA (60%) ===== */}
            <div className="col-right">

              <div className="t-header">
                <h5 className="d-flex align-items-center gap-2">
                  <img src={sectionIcon} alt="icon" />
                  CLIENTS REVIEW
                </h5>

                <h2>What They Say About Our</h2>

                <p>
                  It is a long established fact that a reader will be distracted the
                  readable content of a page when looking at layout the point of using
                  lorem the is Ipsum less normal distribution of letters.
                </p>
              </div>

        {/* ===== SWIPER SLIDER ===== */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          className="testimonial__slider"
        >

          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="testimonial__item">

              <FaQuoteRight className="coma" />

              <div className="client-box">
                <img src={testi1} alt="" />

                <div className="client-info">
                  <h4>Suborna Tarchera</h4>
                  <p>Web Developer</p>
                  <div className="star">
                    {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                    <FaStar className="disable" />
                  </div>
                </div>
              </div>

              <p className="review-text">
                “ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium
                  metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
              </p>

            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="testimonial__item">

              <FaQuoteRight className="coma" />

              <div className="client-box">
                <img src={testi2} alt="" />

                <div className="client-info">
                  <h4>Alex Rony</h4>
                  <p>Web Designer</p>
                  <div className="star">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </div>

              <p className="review-text">
                “ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium
                  metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”
              </p>

            </div>
          </SwiperSlide>

        </Swiper>

              {/* ===== ARROWS CENTER ===== */}
              <div className="testimonial__arry-btn">
                <button className="testimonial-prev">‹</button>
                <button className="testimonial-next active">›</button>
              </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
