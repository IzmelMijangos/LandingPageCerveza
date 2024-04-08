import React from 'react';
import './BannerWithText.css'; // Asegúrate de tener un archivo CSS con este nombre.

function BannerWithText({ image, text }) {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="centered-text">{text}</div>
    </div>
  );
}

export default BannerWithText;