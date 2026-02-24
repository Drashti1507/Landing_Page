import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./Home";
import Login from "./assets/JS_file/Login";
import Register from "./assets/JS_file/Register";
import ForgotPassword from "./assets/JS_file/ForgotPassword";
import ResetPassword from "./assets/JS_file/ResetPassword";
import Header from "./assets/JS_file/Header";
import AdminDashboard from "./assets/JS_file/AdminDashboard";
import UserDashboard from "./assets/JS_file/UserDashboard";
import UserProfile from "./assets/JS_file/UserProfile";
import QuotePage from "./assets/JS_file/QuotePage";
import ContactPage from "./assets/JS_file/ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [resetToken, setResetToken] = useState(null);
  const [pageChangeData, setPageChangeData] = useState(null);

  //  Check login when page refresh and extract reset token from URL
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }

    // Check if URL contains reset token
    const fullUrl = window.location.href;
    const pathname = window.location.pathname;
    
    // console.log("🔗 Full URL:", fullUrl);
    // console.log("📍 Pathname:", pathname);
    
    if (pathname.includes("/reset-password/")) {
      // Extract token from URL
      const parts = pathname.split("/reset-password/");
      if (parts.length > 1) {
        const token = parts[1].trim();
        setResetToken(token);
        setCurrentPage("reset-password");
        
        // Logout user when clicking reset link
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        setUserRole(null);
      }
    }
  }, []);

  //  Change Page
  const handlePageChange = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      setPageChangeData(data);
      if (data.token) {
        setResetToken(data.token);
      }
    }
    
    // Auto logout when entering reset-password page
    if (page === "reset-password") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setIsLoggedIn(false);
      setUserRole(null);
    }
    
    window.scrollTo(0, 0);
  };

  //  After Login Success
  const handleLoginSuccess = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    // Navigate to profile page after successful login
    setCurrentPage("user-profile");
  };

  //  Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage("home");
  };

  return (
    <>
      <Header
        onPageChange={handlePageChange}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogout={handleLogout}
      />

      <div style={{ marginTop: "120px" }}>

        {currentPage === "home" && (
          <Home userRole={userRole} />
        )}

        {currentPage === "login" && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "register" && (
          <Register
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "forgot" && (
          <ForgotPassword
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "reset-password" && (
          <ResetPassword
            onPageChange={handlePageChange}
            token={resetToken}
          />
        )}

        {currentPage === "admin-dashboard" && (
          <AdminDashboard
            userRole={userRole}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "user-dashboard" && (
          <UserDashboard
            userRole={userRole}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "user-profile" && (
          <UserProfile
            userRole={userRole}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "quote" && (
          <QuotePage
            userRole={userRole}
            onBack={() => handlePageChange("home")}
          />
        )}

        {currentPage === "contact" && (
          <ContactPage
            userRole={userRole}
            onBack={() => handlePageChange("home")}
          />
        )}

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;