import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import logo from '../assets/logo-removebg-preview.png'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="overlay"></div> 

      {/* Highlighted Logo */}
      <img src={logo} alt="Salon Logo" className="logo" />

      <div className="hero-content">
        <h1>
          <span className="welcome-text">Welcome to</span> 
          <span className="highlight"> SUNDARAM SALON</span>
        </h1>
        <p className="tagline">"Style is a way to say who you are without having to speak."</p>

        <p className="intro">
          Established in 1971, Sundaram Salon has been a trusted destination for exceptional grooming and styling.
        </p>

        <p className="quote">
          ✨ "Because you deserve to shine every day!" ✨
        </p>

        {/* Services Preview Section */}
        <div className="services-preview">
          <div className="service-box" onClick={() => navigate('/hairstyle')}>
            <h3>💇‍♂️ Hair Styling</h3>
          </div>
          <div className="service-box" onClick={() => navigate('/facialmassage')}>
            <h3>💆‍♀️ Facial & Massage</h3>
          </div>
          <div className="service-box" onClick={() => navigate('/coloring')}>
            <h3>🎨 Hair Coloring</h3>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;