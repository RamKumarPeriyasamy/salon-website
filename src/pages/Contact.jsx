import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('Server error. Please try again later.');
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
