import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser, logout } from "../services/authService";
import "./AdminDashboard.css"; // This will use our luxury CSS

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUser()) {
      navigate("/login");
    }

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/appointments`);
        setAppointments(res.data);
      } catch {
        setError("Failed to load appointments. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Get the first letter of client's name for avatar
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>SUNDARAM SALON MANAGEMENT</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <h1 className="loading-text">Loading Appointments...</h1>
      ) : (
        <div className="table-wrapper">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Stylist</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>
                    <div className="client-info">
                      <div className="client-avatar">
                        {getInitial(appointment.name)}
                      </div>
                      <div className="client-details">
                        <span className="client-name">{appointment.name}</span>
                        <span className="client-phone">{appointment.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.location}</td>
                  <td>
                    <span className="status-badge stylist-badge">
                      {appointment.stylist}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-button edit-button" title="Edit Appointment">
                        <i className="fa fa-pencil"></i>
                      </button>
                      <button className="action-button delete-button" title="Cancel Appointment">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;