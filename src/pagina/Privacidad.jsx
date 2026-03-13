import React from 'react';

const Privacidad = () => {
  return (
    <section className="py-5 bg-light" style={{ minHeight: '60vh' }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="display-6 fw-bold mb-4" style={{ color: '#d3ae64' }}>
          AVISO DE PRIVACIDAD
        </h1>
        
        <p className="lead text-secondary mb-4">
          En <strong>Almaya</strong> nos comprometemos a proteger la privacidad de las personas que visitan nuestro sitio web.
        </p>

        <div className="mb-4">
          <h5 className="fw-bold">Datos recabados:</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 ps-0">• Nombre completo</li>
            <li className="list-group-item border-0 ps-0">• Número telefónico</li>
            <li className="list-group-item border-0 ps-0">• Correo electrónico</li>
            <li className="list-group-item border-0 ps-0">• Información adicional compartida</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold" style={{ color: '#deac4a' }}>Finalidad del uso:</h5>
          <p className="mb-1">Utilizamos su información para:</p>
          <ul className="list-unstyled ps-3">
            <li>- Contacto informativo sobre servicios de Almaya.</li>
            <li>- Atención a dudas y consultas.</li>
            <li>- Seguimiento a prospectos interesados.</li>
          </ul>
        </div>

        <div className="p-3 bg-light border-start border-4 border-dark mb-4">
          <p className="mb-0 small italic">
            Almaya no vende, renta ni comparte los datos personales con terceros. Su información está resguardada bajo medidas de seguridad adecuadas.
          </p>
        </div>

        <p className="text-muted small">
          El usuario puede solicitar la modificación o eliminación de sus datos en cualquier momento mediante nuestros canales oficiales. Nos reservamos el derecho de actualizar este aviso; los cambios se publicarán en esta página.
        </p>
      </div>
    </section>
  );
};

export default Privacidad;