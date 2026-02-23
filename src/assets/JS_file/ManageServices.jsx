import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaArrowLeft, FaServer, FaPlusCircle, FaTimes } from "react-icons/fa";
import "../css/ManageServices.css";

const ManageServices = ({ onBack }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState({ title: "", description: "" });

  const API_URL = "http://localhost:5000/service";
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (isEditing) {
        await axios.put(`${API_URL}/${currentService._id}`, currentService, config);
      } else {
        await axios.post(API_URL, currentService, config);
      }
      closeModal();
      fetchData();
    } catch (error) {
      alert("Action failed: " + (error.response?.data?.msg || "Error occurred"));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        await axios.delete(`${API_URL}/${id}`, config);
        fetchData();
      } catch (error) {
        alert("Delete failed");
      }
    }
  };

  const openModal = (service = null) => {
    if (service) {
      setIsEditing(true);
      setCurrentService(service);
    } else {
      setIsEditing(false);
      setCurrentService({ title: "", description: "" });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentService({ title: "", description: "" });
  };

  return (
    <div className="manage-container">
      {/* Header */}
      <div className="manage-header">
        <div className="header-left">
          <button onClick={onBack} className="btn-back">
            <FaArrowLeft />
          </button>
          <div>
            <h1>Service Management</h1>
            <p>View and manage all your platform services</p>
          </div>
        </div>
        <button className="btn-add" onClick={() => openModal()}>
          <FaPlusCircle /> Add New Service
        </button>
      </div>

      {/* Grid List */}
      <div className="manage-content">
        {loading ? (
          <div className="loading-spinner">Loading Services...</div>
        ) : (
          <div className="admin-grid">
            {services.map((service) => (
              <div key={service._id} className="admin-card">
                <div className="card-icon">
                  <FaServer />
                </div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="card-actions">
                  <button onClick={() => openModal(service)} className="btn-icon edit">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button onClick={() => handleDelete(service._id)} className="btn-icon delete">
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modern Modal Form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{isEditing ? "Edit Service" : "Create New Service"}</h2>
              <button onClick={closeModal} className="close-modal"><FaTimes /></button>
            </div>
            <form onSubmit={handleSubmit} className="professional-form">
              <div className="form-group">
                <label>Service Title</label>
                <input
                  type="text"
                  placeholder="e.g., Cloud Computing"
                  value={currentService.title}
                  onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Describe your service..."
                  rows="4"
                  value={currentService.description}
                  onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="button" onClick={closeModal} className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary">
                  {isEditing ? "Update Service" : "Save Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
