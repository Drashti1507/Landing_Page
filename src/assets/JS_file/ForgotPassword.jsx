import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import "../css/ForgotPassword.css";
import forgotPasswordImage from "../images/login-bg-image.jpg";

function ForgotPassword({ onPageChange }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetToken, setResetToken] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState(false);

  const validateEmail = (value) => {
    if (!value.trim()) {
      return "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (touched) {
      const error = validateEmail(value);
      setEmailError(error);
    }
  };

  const handleEmailBlur = (e) => {
    const value = e.target.value;
    setTouched(true);
    const error = validateEmail(value);
    setEmailError(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Verifying email:", email);
      const response = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        { email }
      );

      console.log("Email verified, got token:", response.data.token);

      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 3000,
      });

      if (response.data.token) {
        setResetToken(response.data.token);
        setTimeout(() => {
          onPageChange("reset-password", { token: response.data.token });
        }, 1500);
      }

    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Something went wrong";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (resetToken) {
    return (
      <div className="forgot-password-page">
        <div className="forgot-password-card">
          <div className="left-image-section">
            <img src={forgotPasswordImage} alt="Forgot Password" />
          </div>

          <div className="right-form-section">
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Email Verified!</h2>
              <p>Email <strong>{email}</strong> verified successfully.</p>
              <p className="instruction">
                Redirecting to password reset page...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <div className="left-image-section">
          <img src={forgotPasswordImage} alt="Forgot Password" />
        </div>

        <div className="right-form-section">
          <div className="forgot-header">
            <button 
              className="back-btn"
              onClick={() => onPageChange("login")}
            >
              <FaArrowLeft /> Back
            </button>
            <h2>Forgot Password?</h2>
            <p>Enter your email address to reset your password</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className={`input-wrapper ${touched && emailError ? "error" : ""}`}>
                <FaEnvelope className="inside-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              {touched && emailError && <span className="error-message">{emailError}</span>}
            </div>

            <button
              type="submit"
              className="forgot-btn"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Continue"}
            </button>
          </form>

          <div className="forgot-footer">
            Remember your password?{" "}
            <span 
              className="login-link"
              onClick={() => onPageChange("login")}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
