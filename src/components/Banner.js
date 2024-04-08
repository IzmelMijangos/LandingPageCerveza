import React from 'react';
import './Banner.css'; // Asegúrate de crear un archivo CSS con el nombre Banner.css

function Banner({ image, text }) {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-text">{text}</div>
    </div>
  );
}

export default Banner;