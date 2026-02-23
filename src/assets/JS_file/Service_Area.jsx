import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Service_Area.css";

/* images */
import serviceBgShape from "../images/service-bg-shape.png";
import sectionIcon from "../images/section-title.png";

import serviceShape from "../images/service-item-shape.png";
import serviceIcon1 from "../images/service-icon1.png";
import serviceIcon2 from "../images/service-icon2.png";
import serviceIcon3 from "../images/service-icon3.png";

function ServiceArea() {
  const defaultServices = [
    {
      _id: "default-1",
      title: "IT Management",
      description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      icon: serviceIcon1
    },
    {
      _id: "default-2",
      title: "Cyber Security",
      description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      icon: serviceIcon2
    },
    {
      _id: "default-3",
      title: "Web Development",
      description: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      icon: serviceIcon3
    }
  ];

  const [services, setServices] = useState(defaultServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/service");
        const data = response.data;
        if (data && data.length > 0) {
          setServices([...defaultServices, ...data]);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="service-area">
      {/* background shape */}
      <div className="service__shape">
        <img src={serviceBgShape} alt="shape" />
      </div>

      <div className="service-container">
        {/* ===== HEADER ===== */}
        <div className="service-header-row">
          <div className="section-header">
            <h5>
              <img src={sectionIcon} alt="icon" />
              What We Offer
            </h5>
            <h2>Excellent IT Services</h2>
          </div>

          <a href="/service" className="btn-one">
            View All Services <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* ===== SERVICES ===== */}
        <div className="service-grid">
          {services.map((service, index) => (
            <div
              key={service._id}
              className={`service__item ${index === 0 ? "active" : ""}`}
            >
              <div className="service-shape">
                <img src={serviceShape} alt="shape" />
              </div>

              <div className="service__icon">
                <img
                  src={
                    service.iconUrl
                      ? `http://localhost:5000${service.iconUrl}`
                      : service.icon || serviceIcon1
                  }
                  alt="icon"
                />
              </div>

              <h4>{service.title}</h4>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
