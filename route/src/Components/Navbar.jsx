import React, { useState } from "react";
import Login from "../pages/LogIn"; // Import the LoginPage component
import "../comp_css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPage(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
         
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="auth-buttons">
          <button className="login-button" onClick={handleLoginClick}>
            Log In
          </button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
      {showLoginPage ? <Login /> : "main content area"}
    </>
  );
};

export default Navbar;
