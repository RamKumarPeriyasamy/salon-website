import React from 'react';
import '../pages/Coloring.css';

// Hair Dye Data
const hairDyeColors = [
  { name: 'Jet Black', category: 'black', description: 'Classic and timeless shade.', type: 'natural' },
  { name: 'Chestnut Brown', category: 'brown', description: 'Warm brown with reddish hues.', type: 'natural' },
  { name: 'Golden Blonde', category: 'blonde', description: 'Bright and sun-kissed blonde.', type: 'natural' },
  { name: 'Burgundy Red', category: 'red', description: 'Bold and deep red.', type: 'natural' },

  { name: 'Pastel Pink', category: 'pink', description: 'Soft and dreamy pastel shade.', type: 'fantasy' },
  { name: 'Electric Blue', category: 'blue', description: 'Vibrant and eye-catching shade.', type: 'fantasy' },
  { name: 'Neon Green', category: 'green', description: 'Bold and bright neon green.', type: 'fantasy' },
  { name: 'Bright Purple', category: 'purple', description: 'Intense and rich purple.', type: 'fantasy' },

  { name: 'Deep Cherry', category: 'cherry', description: 'Trending deep cherry red.', type: 'trending' },
  { name: 'Cinnamon Brown', category: 'cinnamon', description: 'Warm brown with spice tones.', type: 'trending' },
  { name: 'Icy Platinum', category: 'icy-platinum', description: 'Cool platinum blonde shade.', type: 'trending' },
  { name: 'Midnight Blue', category: 'midnight-blue', description: 'Dark and mysterious navy blue.', type: 'trending' }
];

const HairDye = () => {
  return (
    <div className="hair-dye-container">
      {/* Page Title */}
      <h1 className="title">Hair Dye Colors</h1>
      <p className="description">
        Explore a variety of natural, fantasy, and trending hair dye colors to find your perfect shade.
      </p>

      {/* Hair Dye Grid */}
      <div className="dye-grid">
        {hairDyeColors.map((color, index) => (
          <div key={index} className={`dye-card ${color.category}`}>
            <h3>{color.name}</h3>
            <p>{color.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairDye;