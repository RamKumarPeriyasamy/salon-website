import { useState } from "react";
import "./Booking.css"; // Import CSS
import logo from "../assets/logo4.png"; // Add your logo image in the src folder

function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [stylist, setStylist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Appointment booked for ${name} on ${date} at ${time} in ${location} with ${stylist}.`
    );
  };

  return (
    <div className="booking-container">
      {/* Booking Card */}
      <div className="booking-card">
        {/* Logo on top */}
        <div className="booking-logo">
          <img src={logo} alt="Salon Logo" />
        </div>

        {/* Booking Form */}
        <h1 className="booking-title">📅 Book Your Appointment</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="booking-input"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="booking-input"
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="booking-input"
            required
          />

          {/* Tamil Nadu Districts Dropdown */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="booking-input"
            required
          >
            <option value="">Select District</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Tiruchirappalli">Tiruchirappalli</option>
            <option value="Salem">Salem</option>
            <option value="Erode">Erode</option>
            <option value="Vellore">Vellore</option>
            <option value="Tirunelveli">Tirunelveli</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Kanyakumari">Kanyakumari</option>
          </select>

          {/* Stylist Selection */}
          <select
            value={stylist}
            onChange={(e) => setStylist(e.target.value)}
            className="booking-input"
            required
          >
            <option value="">Select Stylist</option>
            <option value="Periyasamy A">Periyasamy A</option>
            <option value="Teja Mani P">Teja Mani P</option>
            <option value="Ram Kumar P">Ram Kumar P</option>
          </select>

          <button type="submit" className="booking-button">
            🚀 Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
