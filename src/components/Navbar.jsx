import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo4.png'; // Ensure the correct path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo in the Left Corner */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Sundaram Salon Logo" className="logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={handleToggleMenu}
      >
        <span></span>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleToggleMenu}>Home</Link>
        <Link to="/services" onClick={handleToggleMenu}>Services</Link>
        <Link to="/contact" onClick={handleToggleMenu}>Contact</Link>
        <Link to="/location" onClick={handleToggleMenu}>Location</Link>
        <Link to="/about" onClick={handleToggleMenu}>About</Link>
        {/* Appointment Button */}
        <button
          className="nav-button appointment"
          onClick={() => (window.location.href = 'http://localhost:8001/')}
        >
          Appointment
        </button>
        {/* Admin Button */}
        <button
          className="nav-button admin"
          onClick={() => (window.location.href = 'http://localhost:8002/')}
        >
          Admin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;