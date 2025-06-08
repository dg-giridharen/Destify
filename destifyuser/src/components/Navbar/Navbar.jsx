import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { weblogo } from '../../assets/asset.js';
import './Navbar.css'; 

const Navbar = ({ onLoginClick }) => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={weblogo} alt="Destify Logo" className="logo-image" />
        <span>Destify</span>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About us</Link>
      </div>
      <div className="navbar-right-section">
        <Link to="/trips" className="navbar-trips-link">Your Trips</Link>
        {currentUser ? (
          <div className="user-profile">
            <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="user-profile-button">
              <span>{currentUser.email}</span>
              <span className="arrow-down">&#9660;</span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
