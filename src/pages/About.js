import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import logo from '../assets/logo-removebg-preview.png'; // Ensure the correct path

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Logo Section with Gradient */}
        <div className="logo-wrapper">
          <img src={logo} alt="Sundaram Salon Logo" className="about-logo" />
        </div>
        
        {/* About Info */}
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Established in <strong>1971</strong> by <strong>Mr. Anadhappan R.</strong> in <strong>Mattakadai</strong>, Sundaram Salon has been a landmark for excellence in hairdressing. 
          With a legacy of unmatched styling expertise, we continue to set new trends and deliver premium salon services.
        </p>

        {/* Home Button */}
        <button className="home-button" onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  );
};

export default About;
