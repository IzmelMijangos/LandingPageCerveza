import React from 'react';
import './Testimonials.css'; 

const testimonials = [
    {
      quote: "Excelente servicio, precio y rapidez 100% recomendado!!!",
      name: "Gabriela Macías Vogel",
      source: "Opinión en Facebook",
      profileImg: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen del perfil
      ratingImg: "https://via.placeholder.com/50", // Reemplaza con la URL de la imagen de las estrellas
    },
    {
        quote: "Excelente servicio, precio y rapidez 100% recomendado!!!",
        name: "Gabriela Macías Vogel",
        source: "Opinión en Facebook",
        profileImg: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen del perfil
        ratingImg: "https://via.placeholder.com/50", // Reemplaza con la URL de la imagen de las estrellas
      },
      {
        quote: "Excelente servicio, precio y rapidez 100% recomendado!!!",
        name: "Gabriela Macías Vogel",
        source: "Opinión en Facebook",
        profileImg: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen del perfil
        ratingImg: "https://via.placeholder.com/50", // Reemplaza con la URL de la imagen de las estrellas
      },
      {
        quote: "Excelente servicio, precio y rapidez 100% recomendado!!!",
        name: "Gabriela Macías Vogel",
        source: "Opinión en Facebook",
        profileImg: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen del perfil
        ratingImg: "https://via.placeholder.com/50", // Reemplaza con la URL de la imagen de las estrellas
      },
    // ... más testimonios
  ];

  function Testimonial({ quote, name, source, profileImg, ratingImg }) {
    return (
      <div className="testimonial">
        <img src={ratingImg} alt="Rating" className="testimonial-rating"/>
        <p className="testimonial-quote">"{quote}"</p>
        <div className="testimonial-client">
          <img src={profileImg} alt={name} className="testimonial-profile"/>
          <div>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-source">{source}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function TestimonialsSection() {
    return (
      <div className="testimonials-section">
        <h2>Nuestros Clientes Felices</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    );
  }
  
  export default TestimonialsSection;