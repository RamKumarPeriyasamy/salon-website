import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import logo from "../assets/logo4.png";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/appointments`);
        setAppointments(res.data);
      } catch {
        setError("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  if (loading) return <h1 className="loading">Loading...</h1>;
  if (error) return <h1 className="error-message">{error}</h1>;

  return (
    <div className="admin-container">
      <header className="admin-header">
        <img src={logo} alt="Salon Logo" className="admin-logo" />
        <h1 className="admin-title">📅 Admin Dashboard - Appointments</h1>
      </header>

      <div className="table-wrapper">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Stylist</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.location}</td>
                <td>{appointment.stylist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
