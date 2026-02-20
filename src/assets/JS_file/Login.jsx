import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import "../css/Login.css";

function Login({ onLoginSuccess, onPageChange }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <div className="login-wrapper">

      {/* LEFT IMAGE SECTION */}
      <div className="login-left"></div>

      {/* RIGHT FORM SECTION */}
      <div className="login-right">
        <div className="login-card">

          <div className="login-header">
            <div className="login-icon-box">
              <FaSignInAlt />
            </div>
            <h2>Welcome Back</h2>
            <p>Please sign in to your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>

            {/* EMAIL FIELD */}
            <div className="form-group">
              <div className="input-field">
                <FaEnvelope className="input-icon-left" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="form-group">
              <div className="input-field">
                <FaLock className="input-icon-left" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span
                  className="input-icon-right"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in to account"}
            </button>

          </form>

          <div className="register-link-container">
            <p>Don't have an account yet?</p>
            <button
              onClick={() => onPageChange("register")}
              className="register-link"
            >
              <FaUserPlus style={{ marginRight: "8px" }} />
              Create New Account
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;