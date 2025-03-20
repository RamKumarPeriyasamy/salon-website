import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(""); // For styling: "success" or "error"
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");
    setResponseStatus("");
    
    try {
      // Update this to point to your Admin portal backend
      const response = await fetch("http://localhost:9004/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          // Add authorization if needed
          // "Authorization": "Bearer your-auth-token"
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage("Message sent successfully! We'll get back to you soon.");
        setResponseStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.message || "Failed to send message. Please try again.");
        setResponseStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Server error. Please try again later.");
      setResponseStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        {/* Contact Info */}
        <div className="contact-info">
          <p>
            <FaPhoneAlt className="icon" /> <strong>Phone:</strong> +91 97872 38247
          </p>
          <p>
            <FaEnvelope className="icon" /> <strong>Email:</strong> periyasamy1801@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> <strong>Address:</strong> 132, North Raja Street, Opp Nila Stores, Mattakadai,
            Tuticorin -1
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Us</h3>
          <a
            href="mailto:sundaramsalons@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon gmail"
          >
            <FaGoogle /> Gmail
          </a>
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isLoading} className={isLoading ? "loading" : ""}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <p className={`response-message ${responseStatus === "success" ? "success-message" : "error-message"}`}>
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;