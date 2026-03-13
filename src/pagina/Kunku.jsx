import React from 'react';
import "./css/kunku.css";

import { 
  FaUtensils, FaPrayingHands, FaChild, FaPaw, FaVolleyballBall, FaDownload, FaChevronRight, FaFileContract, FaLightbulb, FaDoorOpen, FaShieldAlt, 
  FaWalking, FaTree, FaStore, FaBinoculars,FaMapMarkedAlt, FaHome, 
} from 'react-icons/fa';

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import herokunku from "../assets/images/hero-kunku.jpg";
import palapaImg from "../assets/images/caseta-kunku.jpg";
import lifestyleSectionImg from "../assets/images/estilo.jpg";
import masterPlanBg from "../assets/images/anda-kunku.jpg";
import master from "../assets/images/master plan kunku.png";

import { MdWaves, MdBeachAccess } from 'react-icons/md';

const Kunku = () => {
  const handleDownload = () => {
    // Usamos la imagen importada (la misma que usas en el fondo del hero)
    const link = document.createElement('a');
    link.href = master; 
    link.download = 'master plan kunku.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const position = [21.3307236, -89.4144312]; // Coordenadas proporcionadas
  const GMAPS_URL = "https://maps.app.goo.gl/kQJXz15GcBD8Yp1E9";

  return (
    <div className="kunku-landing">

      <section 
        className="hero-section text-center d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${herokunku})` }} // 2. Aplicamos la imagen importada aquí
      >
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-2">
          <p className="hero-subtitle">PRIVADA RESIDENCIAL EXCLUSIVA</p>
          <h1 className="hero-title">KUNKÚ</h1>
          <p className="hero-location">San Benito</p>
          <p className="hero-tagline">Vive a unos pasos del mar.</p>
          <div className="hero-buttons d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-gold">SOLICITAR INFORMACIÓN</button>
            <button className="btn btn-outline-light-dark-bg">AGENDAR ASESORÍA</button>
          </div>
        </div>
      </section>

      
      {/* --- SECCIÓN AMENIDADES --- */}
       <section className="amenities-section py-4 bg-light">
         <div className="container text-center">
           <p className="text-gold tracking-widest small mb-1">AMENIDADES</p>
           <h2 className="section-title-compact mb-4">Todo lo que necesitas</h2>
           
           {/* Ajustamos las columnas: col-md-3 para 4 por fila o col-lg-2 para 6 por fila */}
           <div className="row g-3 justify-content-center">
             {[
               { name: 'Alberca', icon: <MdWaves /> },
               { name: 'Restaurant – Bar', icon: <FaUtensils /> },
               { name: 'Área de hamacas', icon: <MdBeachAccess /> },
               { name: 'Área de meditación', icon: <FaPrayingHands /> },
               { name: 'Kids Park', icon: <FaChild /> },
               { name: 'Pet Park', icon: <FaPaw /> },
               { name: 'Cancha playera', icon: <FaVolleyballBall /> },
             ].map((item, index) => (
               <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-auto">
                 <div className="amenity-card-mini">
                   <div className="amenity-icon-small">{item.icon}</div>
                   <p className="amenity-text-small">{item.name}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* --- SECCIÓN ¿POR QUÉ KUNKÚ? --- */}
       <section className="why-kunku-section py-5 bg-white text-center">
         <div className="container">
           <p className="text-gold tracking-widest small mb-2">DESCUBRE</p>
           <h2 className="why-title mb-4">¿Por qué Kunkú?</h2>
           <p className="why-subtitle mb-4">Porque combina lo que casi nadie logra en la playa:</p>
           
           <div className="row justify-content-center">
             <div className="col-md-10 col-lg-8">
               {/* Agrupamos todo en un párrafo fluido con separadores elegantes */}
               <p className="why-paragraph">
                 Kunkú combina una ubicación privilegiada a unos pasos del 
                 mar en San Benito con una privada residencial de amenidades tipo resort,
                rodeada de naturaleza, tranquilidad y exclusividad, ofreciendo además propiedad 
                privada con total certeza y respaldo legal.
               </p>

             </div>
           </div>
         </div>
       </section>

      {/* --- SECCIÓN UBICACIÓN ESTRATÉGICA --- */}
      <section className="kunku-location kunku-location--dark" id="kunku-ubicacion">
        <div className="kunku-container-location kunku-grid--2col">
          
          <div className="kunku-location__content">
            <h2 className="kunku-location__title">
              UBICACIÓN <span className="text-gold d-block">ESTRATÉGICA</span>
            </h2>
            <p className="kunku-location__p">
              Costa yucateca, punto estratégico. Un entorno reconocido por su alta proyección de plusvalía y cercanía al mar.
            </p>

            <ul className="kunku-location__list">
              <li><FaChevronRight className="text-gold me-2" /> A 40 min de Mérida</li>
              <li><FaChevronRight className="text-gold me-2" /> A 20 min de Progreso</li>
              <li><FaChevronRight className="text-gold me-2" /> A 5 min de Marina Kinu</li>
              <li><FaChevronRight className="text-gold me-2" /> A solo metros de la playa de San Benito</li>
            </ul>

            <a href={GMAPS_URL} target="_blank" rel="noreferrer" className="btn btn-gold btn-lg mt-4 px-5 py-3 text-uppercase fw-bold">
              Ver ubicación exacta
            </a>
          </div>

          <div className="kunku-location__map">
            <div className="kunku-map__frame">
              <MapContainer
              center={position}
              zoom={10} // Cambiado de 13 a 10 para ganar perspectiva de la costa
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              className="kunku-dark-map"
            >
              {/* Capa de mapa estilo minimalista/claro */}
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
              
              <CircleMarker
                center={position}
                pathOptions={{ fillColor: '#dfb05b', color: '#dfb05b', weight: 2, fillOpacity: 0.8 }}
                radius={12}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                  <span className="fw-bold">Kunkú</span>
                </Tooltip>
              </CircleMarker>
            </MapContainer>
            </div>
          </div>
        </div>
      </section>
       
       <section className="kunku-amenities-detailed py-5">
        <div className="container text-center">
          {/* 1. Encabezado */}
          <p className="text-gold text-uppercase fw-bold mb-1 tracking-widest">Carateristicas</p>
          <h2 className="section-title-main mb-4">Todo lo que necesitas</h2>
      
          {/* 2. Imagen tipo Hero Contenida (Usando la importación) */}
          <div className="kunku-hero-mini mb-5">
            <img 
              src={palapaImg} 
              alt="Estilo de vida Kunkú" 
              className="img-fluid kunku-rounded-shadow"
            />
          </div>
      
          {/* 3. Características alineadas con iconos de React */}
          <h3 className="section-subtitle-compact mb-4">Características del desarrollo</h3>
          <div className="kunku-features-inline">
            {[
              { name: 'Título de propiedad privada', icon: <FaFileContract /> },
              { name: 'Luz a pie de lote', icon: <FaLightbulb /> },
              { name: 'Entrada distintiva', icon: <FaDoorOpen /> },
              { name: 'Caseta de seguridad', icon: <FaShieldAlt /> },
              { name: 'Andador ecológico', icon: <FaWalking /> },
              { name: 'Áreas verdes', icon: <FaTree /> },
              { name: 'Área comercial', icon: <FaStore /> },
              { name: 'Mirador laguna', icon: <FaBinoculars /> },
            ].map((feat, index) => (
              <div key={index} className="kunku-feat-pill">
                <span className="kunku-feat-icon">{feat.icon}</span>
                <span className="kunku-feat-text">{feat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lifestyle-image-section position-relative d-flex align-items-center justify-content-center text-center text-white">
        <img src={lifestyleSectionImg} alt="Estilo de Vida en Kunkú" className="lifestyle-background-img" />
        <div className="lifestyle-overlay"></div>
        <div className="container position-relative z-index-2">
          <p className="text-gold tracking-widest small mb-3">ESTILO DE VIDA</p>
          <h2 className="display-3 fw-bold mb-4">Tu vida en la playa</h2>
          <p className="lead px-md-5">
            Un lugar para construir tu vida en la playa: tranquilidad, confort y naturaleza, a unos pasos del mar.
          </p>
        </div>
      </section>

        <section className="masterplan-hero-container">
  {/* Imagen de fondo real importada */}
  <img 
    src={masterPlanBg} 
    alt="Crecimiento Planeado Kunkú" 
    className="masterplan-hero-img" 
  />
  
  {/* Overlay oscuro para legibilidad */}
  <div className="masterplan-hero-overlay"></div>

  <div className="container masterplan-hero-content">
    <p className="masterplan-top-label">MASTER PLAN</p>
    <h2 className="masterplan-hero-title">Crecimiento Planeado</h2>
    
    {/* Badge Group con iconos de React */}
    <div className="masterplan-badge-row">
      {[
        { name: 'Entrada distintiva', icon: <FaDoorOpen /> },
        { name: 'Casa Club', icon: <FaHome /> },
        { name: 'Andador ecológico', icon: <FaWalking /> },
        { name: 'Área comercial', icon: <FaStore /> },
        { name: 'Mirador laguna', icon: <FaBinoculars /> }
      ].map((item, i) => (
        <div key={i} className="masterplan-badge-pill">
          <span className="badge-icon-react">{item.icon}</span>
          <span className="badge-text">{item.name}</span>
        </div>
      ))}
    </div>

    {/* Botón con colores #d3ae64 y #deac4a */}
    <div className="mt-5">
      <button onClick={handleDownload} className="btn-masterplan-download">
        <FaDownload className="me-2" /> DESCARGAR MASTER PLAN
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Kunku;