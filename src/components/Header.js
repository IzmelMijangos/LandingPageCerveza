import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1>Descubre el Sabor de la Tradición</h1>
      <p>Nuestras cervezas artesanales están hechas con los mejores ingredientes y años de experiencia.</p>
      <button className="btn Header-btn">Nuestros Productos</button>
    </header>
  );
};

export default Header;