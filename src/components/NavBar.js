import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        {/* Logo e ícono de menú para dispositivos móviles aquí */}
        <ul className="NavBar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Our Menu</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;