import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { name: '💇‍♂️ Haircut & Styling', description: 'Get a fresh, stylish look with professional haircuts.' },
    { name: '💆 Head Massage', description: 'Relax and rejuvenate with our soothing head massages.' },
    { name: '🌿 Facials', description: 'Glow up with our premium skincare treatments.' },
    { name: '🎨 Hair Dye', description: 'Transform your hair with vibrant, long-lasting colors.' },
  ];

  return (
    <div className="services-container">
      {/* Back Button (Moved to bottom left corner) */}
      <button className="back-button" onClick={() => navigate(-1)}>🔙 Back</button>

      {/* Hero Section */}
      <div className="services-header">
        <h2>💈 Elevate Your Style, Pamper Your Soul</h2>
        <p>"Because looking good is just the beginning!"</p>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Special Offer */}
      <div className="special-offer">
        <h3>🌟 Limited Time Offer!</h3>
        <p>Book a **Haircut & Head Massage combo** and get **20% off!** 🎉</p>
      </div>
    </div>
  );
};

export default Services;
