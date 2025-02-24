import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo4.png'; // Ensure the correct path

const Navbar = () => {
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
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
