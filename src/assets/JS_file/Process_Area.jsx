// import React from "react";
// import "../Components/Process_Area.css";    
// /* section icon */
// import sectionIcon from "../images/section-title.png";

// /* process images */
// import processArrow from "../images/process-arry.png";
// import img1 from "../images/process-image1.png";
// import img2 from "../images/process-image2.png";
// import img3 from "../images/process-image3.png";

// const ProcessArea = () => {
//   return (
//     <>
//       <section className="process-area pt-120 pb-120">
//         <div className="container">
//           <div className="section-header text-center mb-60">
//             <h5 className="wow fadeInUp">
//               <img className="me-1" src={sectionIcon} alt="icon" />
//               Work Process
//             </h5>

//             <h2 className="wow fadeInUp">
//               Our Development Process
//             </h2>
//           </div>

//           <div className="row g-4">
//             {/* ===== STEP 1 ===== */}
//             <div className="col-lg-4 wow fadeInUp">
//               <div className="process__item mb-100">
//                 <div className="process-arry bobble__animation">
//                   <img src={processArrow} alt="arrow-icon" />
//                 </div>

//                 <div className="process__image">
//                   <img src={img1} alt="Define Requirements" />
//                   <span className="process-number">1</span>
//                 </div>

//                 <div className="process__content">
//                   <h4 className="mt-25 mb-10">Define Requirements</h4>
//                   <p>
//                     In a free hour, when our power of choice is untrammelled and
//                     when nothing prevents dolor sit amet, consectetur
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* ===== STEP 2 ===== */}
//             <div className="col-lg-4 wow fadeInUp">
//               <div className="process__item mb-100">
//                 <div className="process-arry bobble__animation">
//                   <img src={processArrow} alt="arrow-icon" />
//                 </div>

//                 <div className="process__image">
//                   <img src={img2} alt="Design and Prototyping" />
//                   <span className="process-number">2</span>
//                 </div>

//                 <div className="process__content">
//                   <h4 className="mt-25 mb-10">Design &amp; Prototyping</h4>
//                   <p>
//                     In a free hour, when our power of choice is untrammelled and
//                     when nothing prevents dolor sit amet, consectetur
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* ===== STEP 3 ===== */}
//             <div className="col-lg-4 wow fadeInUp">
//               <div className="process__item">
//                 <div className="process__image">
//                   <img src={img3} alt="Final Solution" />
//                   <span className="process-number">3</span>
//                 </div>

//                 <div className="process__content">
//                   <h4 className="mt-25 mb-10">Final Solution</h4>
//                   <p>
//                     In a free hour, when our power of choice is untrammelled and
//                     when nothing prevents dolor sit amet, consectetur
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProcessArea;

import React from "react";
import "../Components/Process_Area.css";

/* section icon */
import sectionIcon from "../images/section-title.png";

/* process images */
import processArrow from "../images/process-arry.png";
import img1 from "../images/process-image1.png";
import img2 from "../images/process-image2.png";
import img3 from "../images/process-image3.png";

const ProcessArea = () => {
  return (
    <section className="process-area">
      <div className="container">

        {/* ===== SECTION HEADER ===== */}
        <div className="process-header">
          <h5>
            <img src={sectionIcon} alt="icon" />
            Work Process
          </h5><br/>
          <h2>Our Development Process</h2>
        </div><br/><br/>

        {/* ===== PROCESS IMAGES ROW ===== */}
        <div className="process-row">

          <div className="process-img-wrap">
            <div className="process-img">
              <img src={img1} alt="Define Requirements" />
              <span>1</span>
            </div>
          </div>

          <div className="process-arrow">
            <img src={processArrow} alt="arrow" />
          </div>

          <div className="process-img-wrap">
            <div className="process-img">
              <img src={img2} alt="Design and Prototyping" />
              <span>2</span>
            </div>
          </div>

          <div className="process-arrow">
            <img src={processArrow} alt="arrow" />
          </div>

          <div className="process-img-wrap">
            <div className="process-img">
              <img src={img3} alt="Final Solution" />
              <span>3</span>
            </div>
          </div>

        </div>

        {/* ===== PROCESS TEXT ROW ===== */}
        <div className="process-text-row">

          <div className="process-box">
            <h4>Define Requirements</h4>
            <p>
              In a free hour, when our power of <br/>
             choice is untrammelled and when<br/>
              nothing prevents dolor sit amet,<br/> consectetur.
            </p>
          </div>

          <div className="process-box">
            <h4>Design & Prototyping</h4>
            <p>
             In a free hour, when our power of <br/>
             choice is untrammelled and when<br/>
              nothing prevents dolor sit amet,<br/> consectetur.
            </p>
          </div>

          <div className="process-box">
            <h4>Final Solution</h4>
            <p>
              In a free hour, when our power of <br/>
             choice is untrammelled and when<br/>
              nothing prevents dolor sit amet,<br/> consectetur.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessArea;
