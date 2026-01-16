import React from "react";
import "../Components/Testimonial_Area.css";

import bgImg from "../images/testimonial-bg.png";
import sectionIcon from "../images/section-title.png";
import testi1 from "../images/testimonial-image1.png";
import testi2 from "../images/testimonial-image2.png";

import { BsToggleOn } from "react-icons/bs";
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialArea= () => {
  return (
    <section
      className="testimonial-area tbg-image pt-120 pb-120"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="testimonial-container">
        <div className="trow g-4">

          {/* ===== LEFT FORM AREA ===== */}
          <div className="col-lg-6 wow fadeInLeft">
            <div className="talk-us__item">
              <div className="testimonial-header mb-30">
                <h5 className="text-white d-flex align-items-center gap-4">
                  <BsToggleOn size={28} />
                  TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>

              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name">Your Name*</label>
                    <input type="text" id="name" placeholder="Robot fox" />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="email">Your Email*</label>
                    <input type="email" id="email" placeholder="info@example.com" />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="subject">Subject*</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="number">Your Phone*</label>
                    <input type="text" id="number" placeholder="+1253 457 7840" />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message">Message*</label>
                    <textarea id="message" placeholder="Write Message"></textarea>
                  </div>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          {/* ===== RIGHT TESTIMONIAL AREA ===== */}
          <div className="col-lg-6 ps-2 ps-lg-5">

            <div className="t-header mb-40">
              <h5 className="wow fadeInUp d-flex align-items-center gap-2"><br/><br/>
                <img className="me-1" src={sectionIcon} alt="icon" />
                CLIENTS REVIEW
              </h5>

              <h2 className="wow fadeInUp">What They Say About Our</h2>

              <p className="wow fadeInUp">
                It is a long established fact that a reader will be distracted the
                readable content of a page when looking at layout the point of using
                lorem the is Ipsum less normal distribution of letters.
              </p>
            </div><br/><br/>

            {/* ===== SLIDER ===== */}
            <div className="swiper testimonial__slider wow fadeInDown">
              <div className="swiper-wrapper">

                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="testimonial__item">

                    <FaQuoteRight className="coma" size={40} />

                    <div className="d-flex align-items-center gap-3">
                      <img src={testi1} alt="client" />
                      <div className="testi-info">
                        <h4>Suborna Tarchera</h4>
                        <p>Web Developer</p>
                        <div className="star mt-1 d-flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                          <FaStar className="disable" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-30">
                      “ Consectetur adipiscing elit. Integer nunc viverra laoreet est
                      porta pretium metus aliquam eget maecenas porta is nunc viverra
                      Aenean pulvinar maximus leo ”
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="testimonial__item">

                    <FaQuoteRight className="coma" size={40} />

                    <div className="d-flex align-items-center gap-3">
                      <img src={testi2} alt="client" />
                      <div className="testi-info">
                        <h4>Alex Rony</h4>
                        <p>Web Designer</p>
                        <div className="star mt-1 d-flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                          <FaStar className="disable" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-30">
                      “ Consectetur adipiscing elit. Integer nunc viverra laoreet est
                      porta pretium metus aliquam eget maecenas porta is nunc viverra
                      Aenean pulvinar maximus leo ”
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== ARROWS ===== */}
            <div className="testimonial__arry-btn mt-40 wow fadeInDown">
              <button className="arry-prev testimonial__arry-prev">
                <FaChevronLeft />
              </button>
              <button className="arry-next testimonial__arry-next active">
                <FaChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default  TestimonialArea ;
