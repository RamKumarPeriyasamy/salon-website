import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css"; // Import CSS for styling

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button-container">
      <FaArrowLeft className="back-arrow" onClick={() => navigate(-1)} />
    </div>
  );
};

export default BackButton;
