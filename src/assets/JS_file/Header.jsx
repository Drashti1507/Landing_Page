import React, { useState, useEffect } from "react";
import axios from "axios";
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
  FaUserCircle,
  FaBell,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

import logoLight from "../images/logo-light.svg";

function Header({ onPageChange, isLoggedIn, userRole, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [userData, setUserData] = useState({ name: "My Profile", profilePic: "", email: "" });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserData();
      fetchNotifications();
    }
  }, [isLoggedIn]);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData({
        name: response.data.name,
        profilePic: response.data.profilePic,
      });
    } catch (error) {
      console.error("Failed to fetch user data for header");
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/auth/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(response.data);
    } catch (error) {
      console.error("Failed to fetch notifications");
    }
  };

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/auth/notifications/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotifications();
    } catch (error) {
      console.error("Failed to mark notification as read");
    }
  };

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

          <a href="#" onClick={(e) => handleNavClick(e, "blog")}><span>Blog</span></a>
          <a href="#" onClick={(e) => handleNavClick(e, "contact")}><span>Contact</span></a>

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
                    onClick={(e) =>
                      handleNavClick(
                        e,
                        userRole === "admin" ? "admin-dashboard" : "user-profile"
                      )
                    }
                  >
                    <FaUser /> <span>Profile</span>
                  </div>
                  <div
                    className="popup-item"
                    onClick={() => {
                      setNotificationsOpen(!notificationsOpen);
                      setUserProfileOpen(false);
                    }}
                  >
                    <div className="notification-icon-wrapper">
                      <FaBell />
                      {notifications.filter(n => !n.isRead).length > 0 && (
                        <span className="notification-badge">
                          {notifications.filter(n => !n.isRead).length}
                        </span>
                      )}
                    </div>
                    <span>Notifications</span>
                  </div>

                  {notificationsOpen && (
                    <div className="notifications-dropdown">
                      <div className="notifications-header">
                        <h3>Notifications</h3>
                      </div>
                      <div className="notifications-list">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div 
                              key={notification._id} 
                              className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
                              onClick={() => {
                                markAsRead(notification._id);
                                setSelectedNotification(notification);
                              }}
                            >
                              {!notification.isRead && <div className="unread-dot"></div>}
                              <div className="notification-content">
                                <h4>{notification.title}</h4>
                                <p className="notif-brief">{notification.message.substring(0, 45)}...</p>
                                <span className="notification-time">
                                  {new Date(notification.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="no-notifications">No notifications</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Notification Modal - Email Style */}
                  {selectedNotification && (
                    <div className="notif-modal-overlay" onClick={() => setSelectedNotification(null)}>
                      <div className="notif-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="notif-modal-header">
                          <div className="sender-info-main">
                            <div className="sender-avatar">S</div>
                            <div className="sender-details">
                              <h3>{selectedNotification.title}</h3>
                              <p>Support Team &lt;support@gratech.com&gt;</p>
                            </div>
                          </div>
                          <div className="notif-actions-top">
                            <span className="notif-modal-date">
                              {new Date(selectedNotification.createdAt).toLocaleString()}
                            </span>
                            <button className="close-notif-modal" onClick={() => setSelectedNotification(null)}>
                              <FaTimes />
                            </button>
                          </div>
                        </div>
                        <div className="notif-modal-body">
                          <div className="email-meta-info">
                            <div className="meta-line">
                              <span className="meta-label">From:</span>
                              <span className="meta-value"><strong>Support Team</strong> &lt;support@gratech.com&gt;</span>
                            </div>
                            <div className="meta-line">
                              <span className="meta-label">To:</span>
                              <span className="meta-value"><strong>{userData.name}</strong> &lt;{userData.email || 'user@example.com'}&gt;</span>
                            </div>
                            <div className="meta-line">
                              <span className="meta-label">Subject:</span>
                              <span className="meta-value">{selectedNotification.title}</span>
                            </div>
                          </div>
                          
                          <div className="email-content-wrapper">
                            <div className="email-body-text">
                              <p>Hello {userData.name},</p>
                              <p>{selectedNotification.message}</p>
                              {selectedNotification.data?.info && (
                                <div className="email-info-highlight">
                                  <p>{selectedNotification.data.info}</p>
                                </div>
                              )}
                              {selectedNotification.data?.resetLink && (
                                <div className="email-cta-section">
                                  <div className="cta-box">
                                    <p>To complete your password reset, please click the button below:</p>
                                    <button 
                                      className="email-primary-btn"
                                      onClick={() => {
                                        const token = selectedNotification.data.resetLink.split('/').pop();
                                        onPageChange("reset-password", { token });
                                        setSelectedNotification(null);
                                        setNotificationsOpen(false);
                                      }}
                                    >
                                      Reset My Password
                                    </button>
                                    <p className="cta-expiry-note">This link will expire in 15 minutes for your security.</p>
                                  </div>
                                  <div className="cta-fallback">
                                    <p>If the button above doesn't work, copy and paste this URL into your browser:</p>
                                    <span className="fallback-link">{selectedNotification.data.resetLink}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="email-sign-off">
                              <p>Thank you for choosing Gratech.</p>
                              <div className="signature">
                                <strong>The Gratech Support Team</strong>
                                <span>Security & Account Services</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
            <a href="#" onClick={(e) => handleNavClick(e, "login")}><span>Login</span></a>
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