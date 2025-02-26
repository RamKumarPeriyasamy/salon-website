import React from "react";
import "../pages/HairStyle.css";

// Import images
import Black1 from "../assets/Black1.webp";
import Giphy from "../assets/giphy.gif";
import Giphi from "../assets/merun.jpg";
import Giphi1 from "../assets/greengrass.jpg";
import Giphi2 from "../assets/image.png";
import Giphi3 from "../assets/PURPLE.jpg";
import Giphi4 from "../assets/voiet.jpg";
import Giphi5 from "../assets/vilot2.jpg";
import Giphi6 from "../assets/logo.png";

// Hair styles array
const hairstyles = [
  { name: "Classic Cut", image: Black1, details: "A timeless look for any occasion." },
  { name: "Fade Cut", image: Giphy, details: "A sharp and modern fade style." },
  { name: "Merun", image: Giphi, details: "A stylish and vibrant look." },
  { name: "Green Grass", image: Giphi1, details: "A fresh and trendy style." },
  { name: "Custom Style", image: Giphi2, details: "A unique and personalized look." },
  { name: "Purple", image: Giphi3, details: "A bold and striking style." },
  { name: "Violet", image: Giphi4, details: "A rich and elegant look." },
  { name: "Soft Violet", image: Giphi5, details: "A soft and subtle style." },
  { name: "Professional Look", image: Giphi6, details: "A clean and professional look." },
];

const HairStyle = () => {


  return (
    <div className="hairstyle-container">
     

      <h1 className="title">💇‍♂️ Hair Styles</h1>

      <div className="hairstyle-scroll">
        {hairstyles.map((style, index) => (
          <div key={index} className="hairstyle-card">
            <img src={style.image} alt={style.name} className="hairstyle-image" />
            <div className="hairstyle-details">
              <h3>{style.name}</h3>
              <p>{style.details}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HairStyle;
