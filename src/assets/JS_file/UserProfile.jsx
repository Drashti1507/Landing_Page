import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaUserCircle,
  FaCamera,
  FaSpinner,
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaLock,
  FaSave,
} from "react-icons/fa";
import "../Components/UserProfile.css";

const UserProfile = ({ onPageChange, userData, onProfileUpdate }) => {
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    password: "",
    profilePic: userData?.profilePic || "",
  });
  const [updating, setUpdating] = useState(false);

  // Sync state if userData changes
  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        name: userData.name || "",
        email: userData.email || "",
        profilePic: userData.profilePic || "",
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const toastId = toast.loading("Updating profile...", {
      position: "top-right",
    });

    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/auth/update-profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.update(toastId, {
        render: "Profile updated successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      // Notify App.jsx to refresh user data globally
      if (onProfileUpdate) {
        onProfileUpdate();
      }
    } catch (error) {
      toast.update(toastId, {
        render: error.response?.data?.msg || "Failed to update profile",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <h1>Account Settings</h1>
        {onPageChange && (
          <button className="back-btn" onClick={() => onPageChange("home")}>
            <FaArrowLeft /> Back to Home
          </button>
        )}
      </div>

      <div className="profile-form-wrapper">
        <div className="profile-sidebar">
          <div className="profile-pic-section">
            {formData.profilePic ? (
              <img
                src={formData.profilePic}
                alt="Profile"
                className="profile-pic-preview"
              />
            ) : (
              <div className="profile-pic-placeholder">
                <FaUserCircle />
              </div>
            )}
            <label htmlFor="profilePicInput" className="upload-btn">
              <FaCamera />
            </label>
            <input
              type="file"
              id="profilePicInput"
              hidden
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ margin: "0 0 5px 0", fontSize: "20px" }}>
              {formData.name}
            </h2>
            <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
              {formData.email}
            </p>
          </div>
        </div>

        <div className="profile-main-content">
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <FaUser style={{ color: "#2563eb" }} /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope style={{ color: "#2563eb" }} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group full-width">
              <label>
                <FaLock style={{ color: "#2563eb" }} /> Change Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Leave blank to keep current password"
              />
            </div>

            <button
              type="submit"
              className="profile-update-btn"
              disabled={updating}
            >
              {updating ? (
                <>
                  <FaSpinner
                    className="spinner"
                    style={{ fontSize: "16px" }}
                  />{" "}
                  Updating...
                </>
              ) : (
                <>
                  <FaSave /> Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
