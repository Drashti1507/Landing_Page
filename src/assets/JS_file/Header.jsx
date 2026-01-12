import React from "react";
import "../Components/Header.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="header-area">

        {/* ===== TOP BAR ===== */}
        <div className="top-bar">
          <div className="top-left">
            <span><FaEnvelope /> info@example.com</span>
            <span><FaPhoneAlt /> +208-6666-0112</span>
          </div>

          <div className="top-right">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* ===== MAIN NAV ===== */}
        <div className="nav-bar">

          {/* LOGO */}
          <div className="logo-box">
            <h2>Gratech</h2>
          </div>

          {/* MENU */}
          <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/pages">Pages</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* ACTIONS */}
          <div className="nav-actions">
            <FaSearch className="search-icon" />
            <a href="/quote" className="quote-btn">
              Get A Quote <FaArrowRight />
            </a>
          </div>

        </div>

      </header>
    </>
  );
}

export default Header;
