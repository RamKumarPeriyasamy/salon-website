import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo4.png'; // Ensure the correct path

const Navbar = () => {
  // Function to handle redirection
  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the specified URL
  };

  return (
    <nav className="navbar">
      {/* Logo in the Left Corner */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Sundaram Salon Logo" className="logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/location">Location</Link>
        <Link to="/about">About Us</Link>

        {/* Appointment Button */}
        <button
          className="nav-button appointment"
          onClick={() => handleRedirect('http://localhost:8001/')}
        >
          Appointment
        </button>

        {/* Admin Button */}
        <button
          className="nav-button admin"
          onClick={() => handleRedirect('http://localhost:8002/')}
        >
          Admin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;