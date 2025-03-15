import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./HomeButton.css"; // ✅ Import CSS for styling

const HomeButton = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/", { replace: true }); // ✅ Go to home using React Router
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1); // ✅ Go back if history exists
    } else {
      handleHomeClick(); // ✅ Go to home if no history
    }
  };

  return (
    <div className="home-button-container">
      <FaHome 
        className="home-icon" 
        onClick={handleBackClick} 
        title="Go to Home" 
      />
    </div>
  );
};

export default HomeButton;
