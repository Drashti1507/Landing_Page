import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Register.css";
// import registerImage from "../images/register-bg-img.jpg";
import registerImage from "../images/login-bg-image.jpg";


const Register = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );

      toast.success(response.data.message);

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Optional: Redirect to login after 1.5 sec
      setTimeout(() => {
        onPageChange("login");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="register-page">
    <div className="register-card">

      {/* LEFT SIDE IMAGE ONLY */}
      <div className="left-image-section">
        <img src={registerImage} alt="Register" />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="right-form-section">
        <div className="register-header">
          <h2>Create Account</h2>
          <p>Join us to manage your services effectively</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="inside-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaEnvelope className="inside-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaLock className="inside-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <div className="login-link-container">
          Already have an account?{" "}
          <span
            className="login-link-text"
            onClick={() => onPageChange("login")}
          >
            Login
          </span>
        </div>
      </div>
      
    </div>
    

    <ToastContainer position="top-right" autoClose={2000} />
  </div>
);
};

export default Register;