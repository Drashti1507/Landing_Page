// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import "../Components/Case_Area.css";

// /* images */
// import case1 from "../images/case-image1.jpg";
// import case2 from "../images/case-image2.jpg";
// import case3 from "../images/case-image3.jpg";
// import case4 from "../images/case-image4.jpg";
// import sectionIcon from "../images/section-title.png";

// const cases = [
//   { img: case1, tag: "Solution", title: "IT Management" },
//   { img: case2, tag: "Technology", title: "Platform Integration" },
//   { img: case3, tag: "Solution", title: "Web Development" },
//   { img: case4, tag: "Security", title: "Network Security" },
// ];

// function CaseArea() {
//   return (
//     <section className="case-area pt-120 pb-120">
//       <div className="container">
//         <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
//           <div className="section-header">
//             <h5>
//               <img className="me-1" src={sectionIcon} alt="icon" />
//               FROM OUR CASE studies
//             </h5>
//             <h2>
//               We Delivered Best Solution
//             </h2>
//           </div>

//           <a href="/case" className="btn-one">
//             View All Case <i className="fa-regular fa-arrow-right-long"></i>
//           </a>
//         </div>
//       </div>

//       {/* ====== SWIPER ====== */}
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={24}
//         slidesPerView={4}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true, el: ".case__dot" }}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//           1200: { slidesPerView: 4 },
//         }}
//         className="case__slider"
//       >
//         {cases.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="case__item">
//               <div className="image case__image">
//                 <img src={item.img} alt="case" />
//               </div>

//               <div className="case__content">
//                 <span className="primary-color sm-font">{item.tag}</span>
//                 <h3>
//                   <a href="/case-details" className="text-white primary-hover">
//                     {item.title}
//                   </a>
//                 </h3>
//               </div>

//               <a href="/case-details" className="case__btn">
//                 <i className="fa-regular fa-arrow-right"></i>
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* pagination dots */}
//       <div className="mt-60 text-center">
//         <div className="dot case__dot"></div>
//       </div>
//     </section>
//   );
// }

// export default CaseArea;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../Components/Case_Area.css";

/* images */
import case1 from "../images/case-image1.jpg";
import case2 from "../images/case-image2.jpg";
import case3 from "../images/case-image3.jpg";
import case4 from "../images/case-image4.jpg";
import sectionIcon from "../images/section-title.png";

const cases = [
  { img: case1, tag: "Solution", title: "IT Management" },
  { img: case2, tag: "Technology", title: "Platform Integration" },
  { img: case3, tag: "Solution", title: "Web Development" },
  { img: case4, tag: "Security", title: "Network Security" },
];

function CaseArea() {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        {/* ===== HEADER ROW ===== */}
        <div className="case-header-row">
          <div className="section-header">
            <h5>
              <img className="me-1" src={sectionIcon} alt="icon" />
              FROM OUR CASE STUDIES
            </h5>
            <h2>We Delivered Best Solution</h2>
          </div>

          <a href="/case" className="btn-one">
            View All Case <i className="fa-regular fa-arrow-right-long"></i>
          </a>
        </div>
      </div>

      {/* ====== SWIPER ====== */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".case__dot" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="case__slider"
      >
        {cases.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="case__item">
              <div className="case__image">
                <img src={item.img} alt="case" />
              </div>

              <div className="case__content">
                <span className="primary-color sm-font">{item.tag}</span>
                <h3>
                  <a href="/case-details">{item.title}</a>
                </h3>
              </div>

              <a href="/case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* pagination dots */}
      <div className="mt-60 text-center">
        <div className="case__dot"></div>
      </div>
    </section>
  );
}

export default CaseArea;
