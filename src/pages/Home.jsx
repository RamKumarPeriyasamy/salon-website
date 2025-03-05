import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo4.png"; // Make sure to add your logo in the assets folder

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="Salon Logo" className="logo" />
      <h1 className="title">Welcome to Sundaram Salon</h1>
      <h2 className="subtitle">
        Your one-stop destination for all your beauty needs
      </h2>
      <Link to="/booking" className="glassy-button">
        Book an Appointment
      </Link>
    </div>
  );
};

export default Home;
