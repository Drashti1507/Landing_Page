import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logoLight from "../images/logo-light.svg";

function Header({ onPageChange, isLoggedIn, userRole, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    onPageChange(page);
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className="header-area">

      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="top-left">
          <span><FaEnvelope /> info@example.com</span>
          <span><FaPhoneAlt /> +208-6666-0112</span>
        </div>

        <div className="top-right">
          {/* Social icons and role display removed as requested */}
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="nav-bar">

        {/* LOGO */}
        <div
          className="logo-box"
          onClick={(e) => handleNavClick(e, "home")}
          style={{ cursor: "pointer" }}
        >
          <img src={logoLight} alt="Gratech Logo" className="logo-img" />
        </div>

        {/* MENU */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={(e) => handleNavClick(e, "home")}><span>Home</span></a>
          <a href="#" onClick={(e) => handleNavClick(e, "about")}><span>About</span></a>
          <a href="#" onClick={(e) => handleNavClick(e, "services")}><span>Services</span></a>

          {/* Admin Link */}
          {isLoggedIn && userRole === "admin" && (
            <a href="#" onClick={(e) => handleNavClick(e, "admin-dashboard")}>
              <span>Admin Dashboard</span>
            </a>
          )}

          {/* User Link */}
          {isLoggedIn && userRole === "user" && (
            <a href="#" onClick={(e) => handleNavClick(e, "user-profile")}>
              <span>User Profile</span>
            </a>
          )}

          <a href="#" onClick={(e) => handleNavClick(e, "blog")}><span>Blog</span></a>
          <a href="#" onClick={(e) => handleNavClick(e, "contact")}><span>Contact</span></a>

          {!isLoggedIn ? (
            <>
              <a href="#" onClick={(e) => handleNavClick(e, "login")}><span>Login</span></a>
              {/* <a href="#" onClick={(e) => handleNavClick(e, "register")}><span>Register</span></a> */}
            </>
          ) : (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
            >
              <span>Logout</span>
            </a>
          )}
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">
          <FaSearch className="search-icon" />

          <a
            href="#"
            className="quote-btn"
            onClick={(e) => handleNavClick(e, "quote")}
          >
            Get A Quote <FaArrowRight />
          </a>

          {/* MOBILE MENU BUTTON */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;