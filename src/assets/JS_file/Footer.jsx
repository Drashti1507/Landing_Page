// import React, { useEffect } from "react";
// import "../Components/Footer.css";

// import shapeRegLeft from "../images/footer-regular-left.png";
// import shapeSolidLeft from "../images/footer-solid-left.png";
// import shapeRegRight from "../images/footer-regular-right.png";
// import shapeSolidRight from "../images/footer-solid-right.png";
// import shadowShape from "../images/footer-shadow-shape.png";
// import logo from "../images/logo.svg";

// import { FaArrowUp } from "react-icons/fa";

// const Footer = () => {

//   // ===== Scroll Progress + Show Button =====
//   useEffect(() => {
//     const scrollBtn = document.querySelector(".scroll-up");
//     const path = document.querySelector(".scroll-up path");
//     const pathLength = path.getTotalLength();

//     path.style.strokeDasharray = pathLength;
//     path.style.strokeDashoffset = pathLength;

//     const updateProgress = () => {
//       const scroll = window.scrollY;
//       const height = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = pathLength - (scroll * pathLength) / height;

//       path.style.strokeDashoffset = progress;

//       if (scroll > 200) {
//         scrollBtn.classList.add("active-scroll");
//       } else {
//         scrollBtn.classList.remove("active-scroll");
//       }
//     };

//     window.addEventListener("scroll", updateProgress);
//     updateProgress();

//     return () => window.removeEventListener("scroll", updateProgress);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* ================= FOOTER ================= */}
//       <footer className="footer-area secondary-bg">

//         {/* ===== SHAPES ===== */}
//         <div className="footer__shape-regular-left wow slideInLeft">
//           <img src={shapeRegLeft} alt="shape" />
//         </div>

//         <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms">
//           <img className="sway_Y__animation" src={shapeSolidLeft} alt="shape" />
//         </div>

//         <div className="footer__shape-solid-right wow slideInRight">
//           <img className="sway_Y__animation" src={shapeRegRight} alt="shape" />
//         </div>

//         <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms">
//           <img src={shapeSolidRight} alt="shape" />
//         </div>

//         <div className="footer__shadow-shape">
//           <img src={shadowShape} alt="shadow" />
//         </div>

//         {/* ===== MAIN FOOTER ===== */}
//         <div className="f-container">
//           <div className="footer__wrp pt-100 pb-100">

//             {/* Logo + About */}
//             <div className="footer__item item-big wow fadeInUp">
//               <a href="/" className="logo mb-30">
//                 <img src={logo} alt="logo" />
//               </a>

//               <p>
//                 Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
//                 a lacinia curabitur lacinia mollis
//               </p>

//               <div className="social-icon">
//                 <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
//                 <a href="#0"><i className="fa-brands fa-twitter"></i></a>
//                 <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
//                 <a href="#0"><i className="fa-brands fa-youtube"></i></a>
//               </div>
//             </div>

//             {/* IT Solution */}
//             <div className="footer__item item-sm wow fadeInUp" data-wow-delay="200ms">
//               <h3 className="footer-title">IT Solution</h3>
//               <ul>
//                 <li><a href="/service-details">IT Management</a></li>
//                 <li><a href="/service-details">SEO Optimization</a></li>
//                 <li><a href="/service-details">Web Development</a></li>
//                 <li><a href="/service-details">Cyber Security</a></li>
//                 <li><a href="/service-details">Data Security</a></li>
//               </ul>
//             </div>

//             {/* Quick Link */}
//             <div className="footer__item item-sm wow fadeInUp" data-wow-delay="400ms">
//               <h3 className="footer-title">Quick Link</h3>
//               <ul>
//                 <li><a href="/about">About Gratech</a></li>
//                 <li><a href="/service">Our Services</a></li>
//                 <li><a href="/pricing">Pricing Plan</a></li>
//                 <li><a href="/case">Our Projects</a></li>
//                 <li><a href="/team">Our Team</a></li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="footer__item item-big wow fadeInUp" data-wow-delay="600ms">
//               <h3 className="footer-title">Contact Us</h3>
//               <p className="mb-20">
//                 4517 Washington Ave. Manchester, Kentucky 39495
//               </p>

//               <ul className="footer-contact">
//                 <li>
//                   <div className="info">
//                     <h5>Opening Hours:</h5>
//                     <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
//                   </div>
//                 </li>

//                 <li>
//                   <div className="info">
//                     <h5>Phone Call:</h5>
//                     <p>208-6666-0112, 308-5555-0113</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ===== COPYRIGHT ===== */}
//         <div className="footer__copyright">
//           <div className="c-container">
//             <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
//               <p>© All Copyright 2024 by <a href="#0">Gratech</a></p>

//               <ul className="d-flex align-items-center gap-4">
//                 <li><a href="#0">Terms & Condition   </a></li>
//                 <li><a href="#0">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//       </footer>

//       {/* ================= SCROLL UP ================= */}
//       <div className="scroll-up" onClick={scrollToTop}>
//         <svg className="scroll-circle svg-content" viewBox="-1 -1 102 102">
//           <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//         </svg>
//         <FaArrowUp className="scroll-icon" />
//       </div>
//     </>
//   );
// };

// export default Footer;


import React, { useEffect } from "react";
import "../Components/Footer.css";

import shapeRegLeft from "../images/footer-regular-left.png";
import shapeSolidLeft from "../images/footer-solid-left.png";
import shapeRegRight from "../images/footer-regular-right.png";
import shapeSolidRight from "../images/footer-solid-right.png";
import shadowShape from "../images/footer-shadow-shape.png";
import logo from "../images/logo.svg";

import {
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaClock,
  FaPhoneAlt,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scroll-up");
    const path = document.querySelector(".scroll-up path");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;

      path.style.strokeDashoffset = progress;

      if (scroll > 200) scrollBtn.classList.add("active-scroll");
      else scrollBtn.classList.remove("active-scroll");
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="footer-area secondary-bg">

        {/* SHAPES */}
        <div className="footer__shape-regular-left">
          <img src={shapeRegLeft} alt="" />
        </div>

        <div className="footer__shape-solid-left">
          <img src={shapeSolidLeft} alt="" />
        </div>

        <div className="footer__shape-solid-right">
          <img src={shapeRegRight} alt="" />
        </div>

        <div className="footer__shape-regular-right">
          <img src={shapeSolidRight} alt="" />
        </div>

        <div className="footer__shadow-shape">
          <img src={shadowShape} alt="" />
        </div>

        {/* MAIN FOOTER */}
        <div className="container"><br/><br/>
          <div className="footer__wrp">

            {/* LOGO */}
            <div className="footer__item item-big">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>

              <p>
                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,
                a lacinia curabitur lacinia mollis
              </p>

              <div className="social-icon">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>

            {/* IT SOLUTION */}
            <div className="footer__item item-sm">
              <h3 className="footer-title">IT Solution</h3>
              <ul>
                <li><a href="#"><FaAngleRight /> IT Management</a></li>
                <li><a href="#"><FaAngleRight /> SEO Optimization</a></li>
                <li><a href="#"><FaAngleRight /> Web Development</a></li>
                <li><a href="#"><FaAngleRight /> Cyber Security</a></li>
                <li><a href="#"><FaAngleRight /> Data Security</a></li>
              </ul>
            </div>

            {/* QUICK LINK */}
            <div className="footer__item item-sm">
              <h3 className="footer-title">Quick Link</h3>
              <ul>
                <li><a href="#"><FaAngleRight /> About Gratech</a></li>
                <li><a href="#"><FaAngleRight /> Our Services</a></li>
                <li><a href="#"><FaAngleRight /> Pricing Plan</a></li>
                <li><a href="#"><FaAngleRight /> Our Projects</a></li>
                <li><a href="#"><FaAngleRight /> Our Team</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer__item item-big">
              <h3 className="footer-title">Contact Us</h3>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>

              <ul className="footer-contact">
                <li>
                  <FaClock size={28}/>
                  <div>
                    <h5>Opening Hours:</h5>
                    <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                  </div>
                </li>

                <li>
                  <FaPhoneAlt size={28} />
                  <div>
                    <h5>Phone Call:</h5>
                    <p>208-6666-0112, 308-5555-0113</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div><br/><br/>

        {/* COPYRIGHT */}
        <div className="footer__copyright">
          <div className="container copyright-flex">
            <p>© All Copyright 2024 by <a href="#">Gratech</a></p>

            <ul>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

      </footer>

      {/* SCROLL UP */}
      <div className="scroll-up" onClick={scrollToTop}>
        <svg viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        <FaArrowUp className="scroll-icon" />
      </div>
    </>
  );
};

export default Footer;
