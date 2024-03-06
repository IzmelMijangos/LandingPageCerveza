import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3">
      <p>&copy; {new Date().getFullYear()} Cervecería Artesanal. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;