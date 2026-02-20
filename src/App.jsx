import { useState, useEffect } from "react";
import "./App.css";

import Home from "./Home";
import Login from "./assets/JS_file/Login";
import Register from "./assets/JS_file/Register";
import Header from "./assets/JS_file/Header";
import AdminDashboard from "./assets/JS_file/AdminDashboard";
import UserDashboard from "./assets/JS_file/UserDashboard";
import QuotePage from "./assets/JS_file/QuotePage";
import ContactPage from "./assets/JS_file/ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  //  Check login when page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  //  Change Page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  //  After Login Success
  const handleLoginSuccess = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage("home");
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

        {currentPage === "admin-dashboard" && (
          <AdminDashboard
            userRole={userRole}
            onPageChange={handlePageChange}
          />
        )}

        {currentPage === "user-profile" && (
          <UserDashboard
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
    </>
  );
}

export default App;