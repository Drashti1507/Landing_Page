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
import BrandArea from "./assets/JS_file/Brand_Area";
function Home() {
  return (
    <>
      <Header />

      {/* if header is fixed height */}
      <div style={{ marginTop: "120px" }}>
        <Banner_Area />
      </div>

      <ServiceArea />
      <AboutArea />
      <CounterArea />
      <Case_Area />
      <OfferArea />
      <BrandArea />
    </>
  );
}

export default Home;
