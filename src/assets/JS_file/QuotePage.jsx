import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaperPlane, FaQuoteLeft, FaHistory, FaArrowLeft } from "react-icons/fa";
import "../css/ManageServices.css"; 

const QuotePage = ({ userRole, onBack }) => {
  const [message, setMessage] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const API_URL = "http://localhost:5000/quote";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      
      // If admin, fetch all. If user, fetch 'my'.
      const url = userRole === "admin" ? API_URL : `${API_URL}/my`;
      const response = await axios.get(url, config);
      setQuotes(response.data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please login as a user to submit a quote.");
      return;
    }
    if (userRole === "admin") {
      alert("Admins cannot submit quotes. Please use a user account.");
      return;
    }

    setSubmitting(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      await axios.post(API_URL, { message }, config);
      setMessage("");
      alert("Quote submitted successfully!");
      fetchQuotes();
    } catch (error) {
      alert("Failed to submit quote: " + (error.response?.data?.msg || "Error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="manage-container" style={{ marginTop: "20px" }}>
      <div className="manage-header">
        <div className="header-left">
          <button onClick={onBack} className="btn-back">
            <FaArrowLeft />
          </button>
          <div>
            <h1>{userRole === "admin" ? "All User Quotes" : "Get A Quote"}</h1>
            <p>{userRole === "admin" ? "Review requests from users" : "Tell us what you need"}</p>
          </div>
        </div>
      </div>

      <div className="manage-content">
        {userRole === "user" && (
          <div className="admin-card" style={{ marginBottom: "30px", maxWidth: "600px" }}>
            <div className="card-body">
              <h3>Submit a New Request</h3>
              <form onSubmit={handleSubmit} className="professional-form" style={{ padding: "0" }}>
                <div className="form-group">
                  <textarea
                    placeholder="Describe your requirements here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                    style={{ border: "1px solid #ddd" }}
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Sending..." : <><FaPaperPlane /> Send Quote Request</>}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="quotes-history">
          <h3>{userRole === "admin" ? "Manage User Requests" : "Your Previous Quotes"}</h3>
          {loading ? (
            <p>Loading...</p>
          ) : quotes.length > 0 ? (
            <div className="admin-grid">
              {quotes.map((quote) => (
                <div key={quote._id} className="admin-card">
                  <div className="card-icon" style={{ background: "#fef3c7", color: "#d97706" }}>
                    <FaQuoteLeft />
                  </div>
                  <div className="card-body">
                    {userRole === "admin" && (
                      <p style={{ fontWeight: "600", color: "#2563eb", marginBottom: "5px" }}>
                        From: {quote.user?.name || "Unknown User"} ({quote.user?.email})
                      </p>
                    )}
                    <p style={{ fontStyle: "italic", color: "#4b5563" }}>"{quote.message}"</p>
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "10px" }}>
                      Submitted on: {new Date(quote.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="admin-card">
              <p style={{ textAlign: "center", padding: "20px", color: "#6b7280" }}>
                No quotes found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
