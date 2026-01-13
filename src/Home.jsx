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
    </>
  );
}

export default Home;
