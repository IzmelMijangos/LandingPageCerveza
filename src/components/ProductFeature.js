import React from 'react';

function ProductFeature() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="ruta/a/tu/imagen.jpg" className="card-img-top" alt="Producto" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Producto</h5>
              <p className="card-text">Descripción corta del producto.</p>
              <a href="#" className="btn btn-primary">Saber más</a>
            </div>
          </div>
        </div>
        {/* Repite las columnas para otros productos */}
      </div>
    </div>
  );
}

export default ProductFeature;