import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  FaUserCog, 
  FaRegFileAlt, 
  FaAddressBook, 
  FaQuoteRight, 
  FaChartLine, 
  FaUsers 
} from "react-icons/fa";
import "../css/AdminDashboard.css";
import ManageServices from "./ManageServices";
import QuotePage from "./QuotePage";
import ContactView from "./ContactView";

const AdminDashboard = ({ userRole, onPageChange }) => {
  const [view, setView] = useState("dashboard"); // 'dashboard', 'manage-services', 'manage-quotes', 'view-contacts'
  const [serviceCount, setServiceCount] = useState(0);
  const [quoteCount, setQuoteCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    // Fetch count for stats
    const fetchStats = async () => {
      try {
        const resServices = await axios.get("http://localhost:5000/service");
        setServiceCount(resServices.data.length);

        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        };
        const resQuotes = await axios.get("http://localhost:5000/quote", config);
        setQuoteCount(resQuotes.data.length);

        const resContacts = await axios.get("http://localhost:5000/contact", config);
        setContactCount(resContacts.data.length);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  if (view === "manage-services") {
    return <ManageServices onBack={() => setView("dashboard")} />;
  }

  if (view === "manage-quotes") {
    return <QuotePage userRole={userRole} onBack={() => setView("dashboard")} />;
  }

  if (view === "view-contacts") {
    return <ContactView onBack={() => setView("dashboard")} />;
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Header Section */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Admin Dashboard</h1>
            <p>Welcome back! Here's what's happening with your platform.</p>
          </div>
          <div className="user-badge">
            {userRole || "Admin"}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue-icon">
              <FaUsers />
            </div>
            <div className="stat-info">
              <p>Total Users</p>
              <p>1,250</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green-icon">
              <FaChartLine />
            </div>
            <div className="stat-info">
              <p>Active Services</p>
              <p>{serviceCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple-icon">
              <FaQuoteRight />
            </div>
            <div className="stat-info">
              <p>New Quotes</p>
              <p>{quoteCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red-icon">
              <FaRegFileAlt />
            </div>
            <div className="stat-info">
              <p>Inquiries</p>
              <p>{contactCount}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="actions-section">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => setView("manage-services")}>
              <div className="action-icon-wrapper">
                <FaUserCog style={{color: '#2563eb'}} />
              </div>
              <span>Manage Services</span>
            </button>

            <button className="action-btn" onClick={() => setView("view-contacts")}>
              <div className="action-icon-wrapper">
                <FaAddressBook style={{color: '#7c3aed'}} />
              </div>
              <span>View Contacts</span>
            </button>

            <button className="action-btn" onClick={() => setView("manage-quotes")}>
              <div className="action-icon-wrapper">
                <FaQuoteRight style={{color: '#dc2626'}} />
              </div>
              <span>View Quotes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
