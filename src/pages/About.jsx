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
          Established in <strong>1971</strong> by  <strong >Mr. Anadhappan R.</strong> in <strong>Mattakadai</strong> , Sundaram Salon has long been a symbol of 
          excellence in hairdressing. With a rich legacy of unparalleled styling expertise,
           the salon has consistently set new trends and delivered premium services.
            In<strong>2013, </strong> the reins were handed over to <strong>Mr. Periyasamy A.</strong>, the son of the founder,
             who continues to uphold the salon's esteemed reputation and commitment to quality.
              Under his leadership, Sundaram Salon remains dedicated to providing exceptional 
              experiences and maintaining its status as a trusted name in the industry.
        </p>

        {/* Home Button */}
        <button className="home-button" onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
    
  );
};

export default About;
