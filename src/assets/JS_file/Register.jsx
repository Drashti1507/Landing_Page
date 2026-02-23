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
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";
    
    if (name === "name") {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (value.trim().length < 3) {
        error = "Name must be at least 3 characters";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name can only contain letters and spaces";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email";
      }
    } else if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.password = validateField("password", formData.password);

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true
    });

    if (newErrors.name || newErrors.email || newErrors.password) {
      toast.error("Please fix the errors in the form");
      return;
    }

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
            <div className={`input-wrapper ${touched.name && errors.name ? "error" : ""}`}>
              <FaUser className="inside-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
            {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <div className={`input-wrapper ${touched.email && errors.email ? "error" : ""}`}>
              <FaEnvelope className="inside-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
            {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className={`input-wrapper ${touched.password && errors.password ? "error" : ""}`}>
              <FaLock className="inside-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {touched.password && errors.password && <span className="error-message">{errors.password}</span>}
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