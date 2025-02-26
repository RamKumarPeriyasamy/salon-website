import React from "react";
import "./Location.css"; // Import CSS for styling

const Location = () => {


  return (
    <div className="location-container">
      

      <h2 className="location-title">📍 Our Salon Location</h2>
      <p className="location-description">
        Visit us for a premium grooming experience at <strong>Sundaram Saloon</strong>.
      </p>

      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="Salon Location"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.761718196506!2d78.15767319999999!3d8.8084425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef18a0a87f97%3A0x4e9795795d1f988e!2sSundaram%20Saloon!5e0!3m2!1sen!2sin!4v1740460212713!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address Details */}
      <div className="location-details">
        <h3>💈 Sundaram Saloon</h3>
        <p>🏪 <strong>Address:</strong> 132, North Raja Street, Opp Nila Store, Mattakadai, Tuticorin - 1</p>
        <p>☎️ <strong>Contact:</strong> +91 97872 38247</p>
        <p>⏰ <strong>Opening Hours:</strong> 7 AM - 8 PM</p>
      </div>
    </div>
  );
};

export default Location;
