import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo4.png"; // Make sure to add your logo in the assets folder

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="Salon Logo" className="logo" />
      <h1 className="title">Welcome to Sundaram Salon</h1>
      <h2 className="subtitle">
        "Life is more beautiful when you meet the right stylist."
      </h2>
      <div className="button-group">
        <Link to="/booking" className="glassy-button">
          Book an Appointment
        </Link>
        {/* New Home Button */}
        <a href="/" className="home-button">
          Home
        </a>
      </div>
    </div>
  );
};

export default Home;
