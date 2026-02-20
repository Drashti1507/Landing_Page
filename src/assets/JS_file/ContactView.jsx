import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAddressBook, FaArrowLeft, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import "../css/ManageServices.css"; // Reusing styles

const ContactView = ({ onBack }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/contact";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get(API_URL, config);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="manage-container">
      <div className="manage-header">
        <div className="header-left">
          <button onClick={onBack} className="btn-back">
            <FaArrowLeft />
          </button>
          <div>
            <h1>Contact Inquiries</h1>
            <p>View messages from your users</p>
          </div>
        </div>
      </div>

      <div className="manage-content">
        {loading ? (
          <div className="loading-spinner">Loading Contacts...</div>
        ) : contacts.length > 0 ? (
          <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="contacts-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td style={{ fontWeight: '600' }}>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td style={{ maxWidth: '300px', fontSize: '0.85rem' }}>
                        <div style={{ fontStyle: 'italic', color: '#4b5563' }}>"{contact.message}"</div>
                      </td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="admin-card">
            <p style={{ textAlign: "center", padding: "20px", color: "#6b7280" }}>
              No contact inquiries found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactView;
