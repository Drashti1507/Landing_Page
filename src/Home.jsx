// import Header from "./assets/JS_file/Header";
// import Banner_Area from "./assets/JS_file/Banner_Area";
// import ServiceArea from "./assets/JS_file/Service_Area";

// function Home() {
//     return (
//         <>
//             <Header />
//             <Banner_Area/>
//             <ServiceArea />
//         </>
//     );
// }

// export default Home;


import Header from "./assets/JS_file/Header";
import Banner_Area from "./assets/JS_file/Banner_Area";
import ServiceArea from "./assets/JS_file/Service_Area";
import AboutArea from "./assets/JS_file/About_Area";
import CounterArea from "./assets/JS_file/Counter_Area";
import Case_Area from "./assets/JS_file/Case_Area";
import OfferArea from "./assets/JS_file/Offer_Area";
import ProcessArea from "./assets/JS_file/Process_Area";
import TestimonialArea from "./assets/JS_file/Testimonial_Area";
import Footer from "./assets/JS_file/Footer";
function Home() {
  return (
    <>
      <Header />

      {/* if header is fixed height */}
      <div style={{ marginTop: "100px" }}>
        <Banner_Area />
      </div>

      <ServiceArea />
      <AboutArea />
      <CounterArea />
      <Case_Area />
      <OfferArea />
      <ProcessArea />
      <TestimonialArea />
      <Footer />
    </>
  );
}

export default Home;
