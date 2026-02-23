import { useState, useEffect } from "react";
import axios from "axios";
import { FaLock, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import "../css/ResetPassword.css";
import resetPasswordImage from "../images/login-bg-image.jpg";

function ResetPassword({ onPageChange, token }) {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidToken, setIsValidToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";
    
    if (name === "newPassword") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    } else if (name === "confirmPassword") {
      if (!value) {
        error = "Please confirm your password";
      } else if (value !== form.newPassword) {
        error = "Passwords do not match";
      }
    }
    
    return error;
  };

  const handleFieldChange = (e) => {
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

  const handleFieldBlur = (e) => {
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

  useEffect(() => {
    if (!token) {
      setIsValidToken(false);
      toast.error("Invalid reset link. Please request a new one.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    // Verify token with backend
    const verifyToken = async () => {
      try {
        console.log(" Verifying token:", token);
        const response = await axios.get(
          `http://localhost:5000/auth/verify-token/${token}`
        );
        console.log("Token verified:", response.data);
        setIsValidToken(true);
      } catch (error) {
        console.error("Token verification failed:", error.response?.data);
        setIsValidToken(false);
        toast.error(
          error.response?.data?.msg || "Invalid or expired reset link.",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      }
    };

    verifyToken();
  }, [token]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (form.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    setLoading(true);

    try {
      console.log("Sending reset request with token:", token);
      console.log("Token length:", token?.length);
      
      const response = await axios.post(
        "http://localhost:5000/auth/reset-password",
        {
          token: token,
          newPassword: form.newPassword
        }
      );
      
      console.log("Reset response:", response.data);

      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 5000,
      });

      setForm({
        newPassword: "",
        confirmPassword: ""
      });

      setTimeout(() => {
        onPageChange("login");
      }, 2000);

    } catch (error) {
      console.error(" Reset error:", error);
      const errorMsg = error.response?.data?.msg || "Reset failed. Please try again.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (isValidToken === null) {
    return (
      <div className="reset-password-page">
        <div className="reset-password-card">
          <div className="left-image-section">
            <img src={resetPasswordImage} alt="Reset Password" />
          </div>

          <div className="right-form-section">
            <div className="error-message">
              <h2>Verifying...</h2>
              <p>Please wait while we verify your reset link.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isValidToken) {
    return (
      <div className="reset-password-page">
        <div className="reset-password-card">
          <div className="left-image-section">
            <img src={resetPasswordImage} alt="Reset Password" />
          </div>

          <div className="right-form-section">
            <div className="error-message">
              <div className="error-icon">✕</div>
              <h2>Invalid Link</h2>
              <p>The password reset link is invalid or has expired.</p>
              <p className="instruction">
                Please request a new password reset link.
              </p>
              <button 
                className="back-to-forgot-btn"
                onClick={() => onPageChange("forgot")}
              >
                Request New Link
              </button>
              <button 
                className="back-to-login-btn-secondary"
                onClick={() => onPageChange("login")}
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-page">
      <div className="reset-password-card">
        <div className="left-image-section">
          <img src={resetPasswordImage} alt="Reset Password" />
        </div>

        <div className="right-form-section">
          <div className="reset-header">
            <button 
              className="back-btn"
              onClick={() => onPageChange("login")}
            >
              <FaArrowLeft /> Back
            </button>
            <h2 className="cnewpass">Create New Password</h2>
            <p>Enter a strong password to secure your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className={`input-wrapper ${touched.newPassword && errors.newPassword ? "error" : ""}`}>
                <FaLock className="inside-icon" />
                <input
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={form.newPassword}
                  onChange={handleFieldChange}
                  onBlur={handleFieldBlur}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {touched.newPassword && errors.newPassword && <span className="error-message">{errors.newPassword}</span>}
            </div>

            <div className="form-group">
              <div className={`input-wrapper ${touched.confirmPassword && errors.confirmPassword ? "error" : ""}`}>
                <FaLock className="inside-icon" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleFieldChange}
                  onBlur={handleFieldBlur}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {touched.confirmPassword && errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            <div className="password-requirements">
              <p>Password requirements:</p>
              <ul>
                <li className={form.newPassword.length >= 6 ? "valid" : ""}>
                  At least 6 characters
                </li>
                <li className={form.newPassword === form.confirmPassword && form.newPassword ? "valid" : ""}>
                  Passwords match
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="reset-btn"
              disabled={loading || !isValidToken}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
