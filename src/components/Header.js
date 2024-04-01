import React from 'react';
import './header.css';
import logoImage from './YAGUL_LOGO.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <nav className="nav">
          <a href="/" className="nav-item">Inicio</a>
          <a href="/tienda" className="nav-item">Tienda</a>
          <a href="/contacto" className="nav-item">Contacto</a>
        </nav>
      </div>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo"/>
      </div>
      <div className="icons-container">
        <a href="/perfil" className="icon">
          <img src="/path-to-your-profile-icon.svg" alt="Perfil" />
        </a>
        <a href="/favoritos" className="icon">
          <img src="/path-to-your-favorites-icon.svg" alt="Favoritos" />
        </a>
        <a href="/carrito" className="icon">
          <img src="/path-to-your-cart-icon.svg" alt="Carrito" />
        </a>
      </div>
    </header>
  );
};

export default Header;