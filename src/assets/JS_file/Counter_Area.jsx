import React from "react";
import "../Components/Counter_Area.css";

/* background shape */
import counterShape from "../images/counnter-bg-shape.png";

/* icons */
import counterIcon1 from "../images/counter-icon1.png";
import counterIcon2 from "../images/counter-icon2.png";
import counterIcon3 from "../images/counter-icon3.png";
import counterIcon4 from "../images/counter-icon4.png";

function CounterArea() {
  return (
    <section className="counter-area">
      <div className="counter-container">

        <div className="counter-box">

          {/* background circuit shape */}
          <div className="counter-shape">
            <img src={counterShape} alt="shape" />
          </div>

          {/* item 1 */}
          <div className="counter-item">
            <img src={counterIcon1} alt="Satisfied Clients" />
            <div className="counter-text">
              <h3>6,561+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>

          {/* item 2 */}
          <div className="counter-item">
            <img src={counterIcon2} alt="Finished Projects" />
            <div className="counter-text">
              <h3>600+</h3>
              <p>Finished Projects</p>
            </div>
          </div>

          {/* item 3 */}
          <div className="counter-item">
            <img src={counterIcon3} alt="Skilled Experts" />
            <div className="counter-text">
              <h3>250+</h3>
              <p>Skilled Experts</p>
            </div>
          </div>

          {/* item 4 */}
          <div className="counter-item">
            <img src={counterIcon4} alt="Media Posts" />
            <div className="counter-text">
              <h3>590+</h3>
              <p>Media Posts</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CounterArea;
