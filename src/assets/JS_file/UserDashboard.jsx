import React, { useState } from "react";
import { FaQuoteLeft, FaEnvelope, FaUserCircle, FaHistory, FaPlusCircle } from "react-icons/fa";
import "../css/AdminDashboard.css";
import QuotePage from "./QuotePage";
import ContactPage from "./ContactPage";

const UserDashboard = ({ userRole, onPageChange }) => {
  const [view, setView] = useState("overview"); // 'overview', 'quotes', 'contact'

  if (view === "quotes") {
    return <QuotePage userRole={userRole} onBack={() => setView("overview")} />;
  }

  if (view === "contact") {
    return <ContactPage userRole={userRole} onBack={() => setView("overview")} />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Customer Portal</h1>
            <p>Welcome! Manage your requests and messages here.</p>
          </div>
          <div className="user-badge" style={{ background: "#f0fdf4", color: "#16a34a" }}>
            Verified User
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card" onClick={() => setView("quotes")} style={{ cursor: 'pointer' }}>
            <div className="stat-icon purple-icon"><FaQuoteLeft /></div>
            <div className="stat-info">
              <p>My Quotes</p>
              <p>View Requests</p>
            </div>
          </div>
          
          <div className="stat-card" onClick={() => setView("contact")} style={{ cursor: 'pointer' }}>
            <div className="stat-icon blue-icon"><FaEnvelope /></div>
            <div className="stat-info">
              <p>Support</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="actions-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => setView("quotes")}>
              <div className="action-icon-wrapper">
                <FaPlusCircle style={{color: '#7c3aed'}} />
              </div>
              <span>Request Quote</span>
            </button>

            <button className="action-btn" onClick={() => setView("contact")}>
              <div className="action-icon-wrapper">
                <FaEnvelope style={{color: '#2563eb'}} />
              </div>
              <span>New Message</span>
            </button>
            
            <button className="action-btn" onClick={() => setView("contact")}>
              <div className="action-icon-wrapper">
                <FaHistory style={{color: '#16a34a'}} />
              </div>
              <span>Message History</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
