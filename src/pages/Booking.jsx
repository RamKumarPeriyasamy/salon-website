import axios from "axios";
import { useState } from "react";
import "./Booking.css"; 
import logo from "../assets/logo4.png"; 
import BackButton from "../components/BackButton"; 

const API_URL = import.meta.env.VITE_BACKEND_API;

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [stylist, setStylist] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Validate 10-digit phone number
  const validatePhoneNumber = (num) => /^[0-9]{10}$/.test(num);

  // ✅ Convert 12-hour format (AM/PM) to 24-hour format
  const convertTo24HourFormat = (time12h) => {
    const [timePart, modifier] = time12h.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  };

  // ✅ Validate time between 7:00 AM and 8:00 PM
  const validateTime = (selectedTime) => {
    const convertedTime = convertTo24HourFormat(selectedTime);
    const [hours, minutes] = convertedTime.split(":").map(Number);

    return (hours > 7 || (hours === 7 && minutes >= 0)) && 
           (hours < 20 || (hours === 20 && minutes === 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phone)) {
      setError("❌ Phone number must be exactly 10 digits.");
      return;
    }

    if (!validateTime(time)) {
      setError("❌ Please select a time between 7:00 AM and 8:00 PM.");
      return;
    }

    setError("");
    setLoading(true);

    const appointmentData = {
      name,
      phone: `${countryCode} ${phone}`,
      date,
      time,
      location,
      stylist,
    };

    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.post(`${API_URL}/appointments`, appointmentData, { headers });

      alert(response.data.message);

      // ✅ Reset form on success
      setName("");
      setPhone("");
      setCountryCode("+91");
      setDate("");
      setTime("");
      setLocation("");
      setStylist("");
    } catch (error) {
      console.error("❌ Booking Error:", error.response?.data || error.message);
      alert("❌ Error Booking Appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <BackButton /> {/* ✅ Back button at the top left */}
      <div className="booking-card">
        <div className="booking-logo">
          <img src={logo} alt="Salon Logo" />
        </div>
        <h1 className="booking-title">📅 Book Your Appointment</h1>

        {error && <p className="error-message">{error}</p>} 

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="booking-input"
            required
          />

          {/* Phone Number Input */}
          <div className="phone-input">
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
            </select>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="booking-input"
            required
          />

          {/* Time Picker */}
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="booking-input"
            required
          >
            <option value="">Select Time</option>
            {[
              "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
              "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
              "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
              "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
              "07:00 PM", "07:30 PM", "08:00 PM"
            ].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          {/* Location Selection */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="booking-input"
            required
          >
            <option value="">Select District</option>
            {["Chennai", "Thoothukudi", "Salem", "Madurai", "Coimbatore"].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          {/* Stylist Selection */}
          <select
            value={stylist}
            onChange={(e) => setStylist(e.target.value)}
            className="booking-input"
            required
          >
            <option value="">Select Stylist</option>
            {["Periyasamy A", "Teja Mani P", "Ram Kumar P"].map((stylist) => (
              <option key={stylist} value={stylist}>{stylist}</option>
            ))}
          </select>

          {/* Submit Button */}
          <button type="submit" className="booking-button" disabled={loading}>
            {loading ? "⏳ Booking..." : "🚀 Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
