
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p><FaPhoneAlt className="icon" /> <strong>Phone:</strong> +91 97872 38247</p>
          <p><FaEnvelope className="icon" /> <strong>Email:</strong> periyasamy1801@gmail.com</p>
          <p><FaMapMarkerAlt className="icon" /> <strong>Address:</strong> 132, North Raja Street, Opp Nila Stores, Mattakadai, Tuticorin -1</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
      </div>
    </div>
  );
};

export default Contact;