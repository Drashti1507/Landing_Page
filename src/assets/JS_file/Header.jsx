import React, { useState } from "react";
import "../Components/Header.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
  FaUser,
  FaTachometerAlt,
} from "react-icons/fa";

import logoLight from "../images/logo-light.svg";

function Header({ onPageChange, isLoggedIn, userRole, onLogout, userData }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    onPageChange(page);
    setMenuOpen(false); // close mobile menu
    setUserProfileOpen(false); // close profile popup
  };

  return (
    <header className="header-area">
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="top-left">
          <span>
            <FaEnvelope /> info@example.com
          </span>
          <span>
            <FaPhoneAlt /> +208-6666-0112
          </span>
        </div>
        <div className="top-right"></div>
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
          <a href="#" onClick={(e) => handleNavClick(e, "home")}>
            <span>Home</span>
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, "about")}>
            <span>About</span>
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, "services")}>
            <span>Services</span>
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, "blog")}>
            <span>Blog</span>
          </a>
          <a href="#" onClick={(e) => handleNavClick(e, "contact")}>
            <span>Contact</span>
          </a>

          {isLoggedIn && (
            <div className="profile-container">
              <div
                className="profile-info"
                onClick={() => setUserProfileOpen(!userProfileOpen)}
              >
                {userData.profilePic ? (
                  <img
                    src={userData.profilePic}
                    alt="Profile"
                    className="profile-info-pic"
                  />
                ) : (
                  <FaUserCircle className="profile-icon" />
                )}
                <span className="profile-name">{userData.name}</span>
              </div>

              {userProfileOpen && (
                <div className="profile-popup">
                  <div
                    className="popup-item"
                    onClick={(e) => handleNavClick(e, "user-profile")}
                  >
                    <FaUser /> <span>Profile</span>
                  </div>

                  {/* Dashboard link according to role */}
                  <div
                    className="popup-item"
                    onClick={(e) =>
                      handleNavClick(
                        e,
                        userRole === "admin" ? "admin-dashboard" : "user-dashboard"
                      )
                    }
                  >
                    <FaTachometerAlt /> <span>Dashboard</span>
                  </div>

                  <div
                    className="popup-item logout-item"
                    onClick={(e) => {
                      e.preventDefault();
                      onLogout();
                      setUserProfileOpen(false);
                    }}
                  >
                    <FaSignOutAlt /> <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {!isLoggedIn && (
            <a href="#" onClick={(e) => handleNavClick(e, "login")}>
              <span>Login</span>
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
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
