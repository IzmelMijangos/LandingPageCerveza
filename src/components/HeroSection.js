import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="HeroSection">
      <div className="HeroSection-content">
        <h1>WHEAT LAGER</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-primary">SEE MORE</button>
      </div>
      <div className="HeroSection-image">
        {/* Asumiendo que tienes imágenes en la carpeta public */}
        <img src="/beer-glass.png" alt="Beer Glass" />
      </div>
    </section>
  );
};

export default HeroSection;