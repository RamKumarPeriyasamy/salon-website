import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { name: '💇‍♂️ Haircut & Styling', description: 'Get a fresh, stylish look with professional haircuts.', path: '/hairstyle' },
    { name: '💆 Head Massage', description: 'Relax and rejuvenate with our soothing head massages.', path: '/facialmassage' },
    { name: '🌿 Facials', description: 'Glow up with our premium skincare treatments.', path: '/facialmassage' },
    { name: '🎨 Hair Dye', description: 'Transform your hair with vibrant, long-lasting colors.', path: '/Coloring' },
  ];

  return (
    <div className="services-container">
      
      

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
            <button 
              className="service-button" 
              onClick={() => navigate(service.path)}
            >
              Go
            </button>
          </div>
        ))}
      </div>

      {/* Special Offer */}
      <div className="special-offer">
        <h3>🌟 Limited Time Offer!</h3>
        <p>Book a <strong>Haircut & Head Massage combo</strong> and get <strong>20% off!</strong> 🎉</p>
      </div>
    </div>
  );
};

export default Services;
