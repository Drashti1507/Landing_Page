import { useState } from "react";
import axios from "axios";
import {
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock
} from "react-icons/fa";
import "../css/Login.css";
import loginImage from "../images/login-bg-image.jpg";

function Login({ onLoginSuccess, onPageChange }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";
    
    if (name === "email") {
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
    setForm({ ...form, [name]: value });

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
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        form
      );

      const data = response.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      onLoginSuccess(data.role);

    } catch (error) {
      alert(
        error.response?.data?.msg ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT SIDE */}
       <div className="login-image-section">
  <img src={loginImage} alt="Login" className="login-bg-image" />
  {/* <div className="login-image-overlay">
  </div> */}
</div>

        {/* RIGHT SIDE */}
        <div className="login-form-section">
          <div className="login-header">
            <div className="login-icon-box">
              <FaSignInAlt />
            </div>
            <h2>Sign In</h2>
            <p>Please enter your credentials</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <div className={`input-wrapper ${touched.email && errors.email ? "error" : ""}`}>
                <FaEnvelope className="inside-icon" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className={`input-wrapper ${touched.password && errors.password ? "error" : ""}`}>
                <FaLock className="inside-icon" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
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

            <div className="forgot-password">
              <span onClick={() => onPageChange("forgot")}>
                Forgot Password?
              </span>
            </div>
            
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="register-link-container">
            Don't have an account?{" "}
            <span
              className="register-link-text"
              onClick={() => onPageChange("register")}
            >
              Register
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;