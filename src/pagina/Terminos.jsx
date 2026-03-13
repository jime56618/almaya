import React from 'react';

const Terminos = () => {
  return (
    <section className="py-5 bg-light" style={{ minHeight: '60vh' }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="display-6 fw-bold mb-4" style={{ color: '#d3ae64' }}>
          TÉRMINOS Y CONDICIONES
        </h1>

        <p className="mb-4 border-bottom pb-3">
          El presente sitio web tiene carácter informativo. Al acceder y utilizar el sitio de <strong>Almaya</strong>, el usuario acepta los siguientes puntos:
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-3 border rounded-3 h-100">
              <span className="badge bg-dark mb-2">01</span>
              <p className="small mb-0">La información es de carácter general y puede ser modificada sin previo aviso.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded-3 h-100">
              <span className="badge bg-dark mb-2">02</span>
              <p className="small mb-0">El envío de datos en formularios es completamente voluntario y verídico.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded-3 h-100">
              <span className="badge bg-dark mb-2">03</span>
              <p className="small mb-0">Queda prohibido el uso indebido del sitio o el envío de información falsa.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded-3 h-100">
              <span className="badge bg-dark mb-2">04</span>
              <p className="small mb-0">Almaya no se responsabiliza por el uso que terceros den a la información publicada.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 p-3 rounded" style={{ backgroundColor: '#f1ece0', borderLeft: '5px solid #deac4a' }}>
          <p className="mb-0 fw-bold">
            El envío de datos implica que el usuario ha leído y acepta el Aviso de Privacidad.
          </p>
        </div>

        <p className="mt-4 text-muted small text-center">
          Almaya puede actualizar estos términos para mejorar la experiencia del usuario.
        </p>
      </div>
    </section>
  );
};

export default Terminos;