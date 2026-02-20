import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaperPlane, FaHistory, FaArrowLeft, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import "../css/ManageServices.css";

const ContactPage = ({ userRole, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const API_URL = "http://localhost:5000/contact";
  const SERVICES_URL = "http://localhost:5000/service";
  const AUTH_URL = "http://localhost:5000/auth/me";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchServices();
    if (token && userRole === "user") {
      fetchHistory();
      fetchUserProfile();
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(AUTH_URL, config);
      setFormData(prev => ({ 
        ...prev, 
        name: response.data.name, 
        email: response.data.email 
      }));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(SERVICES_URL);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get(`${API_URL}/my`, config);
      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching contact history:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (e) => {
    const serviceName = e.target.value;
    setSelectedService(serviceName);
    if (serviceName) {
      setFormData({ 
        ...formData, 
        message: `I am interested in the "${serviceName}" service. Please provide more details.` 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      await axios.post(API_URL, formData, config);
      
      alert(userRole === 'user' ? "Your request has been submitted successfully!" : "Message sent successfully!");
      
      // Reset form but keep name/email if user is logged in
      setFormData(prev => ({
        name: userRole === 'user' ? prev.name : "",
        email: userRole === 'user' ? prev.email : "",
        phone: "",
        message: ""
      }));
      setSelectedService("");
      
      if (token && userRole === "user") {
        fetchHistory();
      }
    } catch (error) {
      alert("Failed to submit: " + (error.response?.data?.msg || "Error occurred"));
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
            <h1>{userRole === 'user' ? "Submit Request / Complaint" : "Contact Us"}</h1>
            <p>{userRole === 'user' ? "Tell us how we can help you" : "We'd love to hear from you"}</p>
          </div>
        </div>
      </div>

      <div className="manage-content" style={{ display: 'grid', gridTemplateColumns: userRole === 'user' ? '1fr 1fr' : '1fr', gap: '30px' }}>
        
        {/* Contact Form */}
        <div className="admin-card">
          <div className="card-body">
            <h3>{userRole === 'user' ? "File a Complaint / Request" : "Send a Message"}</h3>
            <form onSubmit={handleSubmit} className="professional-form" style={{ padding: "0" }}>
              
              {userRole !== 'user' && (
                <>
                  <div className="form-group">
                    <label><FaUser style={{ marginRight: '8px' }} /> Name</label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label><FaEnvelope style={{ marginRight: '8px' }} /> Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </>
              )}

              <div className="form-group">
                <label><FaPhoneAlt style={{ marginRight: '8px' }} /> Phone Number</label>
                <input name="phone" type="text" value={formData.phone} onChange={handleChange} required placeholder="Enter your mobile number" />
              </div>

              {userRole === 'user' && services.length > 0 && (
                <div className="form-group">
                  <label>Select Service</label>
                  <select 
                    value={selectedService} 
                    onChange={handleServiceSelect}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      borderRadius: '8px', 
                      border: '1px solid #d1d5db',
                      background: 'white'
                    }}
                  >
                    <option value="">-- Choose a Service --</option>
                    {services.map(service => (
                      <option key={service._id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label>Message / Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required />
              </div>
              <button type="submit" className="btn-primary" disabled={submitting} style={{ width: '100%' }}>
                {submitting ? "Sending..." : <><FaPaperPlane /> {userRole === 'user' ? "Send Inquiry" : "Send Message"}</>}
              </button>
            </form>
          </div>
        </div>

        {/* History (User only) */}
        {userRole === "user" && (
          <div className="contact-history">
            <h3><FaHistory style={{ marginRight: '10px' }} /> Your History</h3>
            {loading ? (
              <p>Loading history...</p>
            ) : history.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {history.map((item) => (
                  <div key={item._id} className="admin-card" style={{ padding: '15px' }}>
                    <p style={{ fontWeight: '600', marginBottom: '5px' }}>Subject: Inquiry</p>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>"{item.message}"</p>
                    <p style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '10px' }}>
                      Sent on: {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="admin-card">
                <p style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
                  No previous messages found.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactPage;
