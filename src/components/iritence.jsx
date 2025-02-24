import React from 'react';

const Iridescence = ({ color, mouseReact, amplitude, speed }) => {
  return (
    <div style={{
      background: `linear-gradient(135deg, rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, 0.5), rgba(255, 255, 255, 0.2))`,
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
      transition: `all ${speed}s ease-in-out`,
      transform: mouseReact ? 'scale(1.1)' : 'scale(1)'
    }}>
      <h2 style={{ color: '#fff' }}>Iridescence Effect</h2>
    </div>
  );
};

export default Iridescence;
