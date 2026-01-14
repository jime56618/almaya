import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/login.css";

// Pin elegante
const elegantIcon = L.divIcon({
  className: "custom-pin",
  html: `<div></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 20],
});

const proyectosData = [
  { 
    id: 1, 
    nombre: "Residencial Conkal", 
    tipo: "Residencial", 
    municipio: "Conkal", 
    lat: 21.0375, 
    lng: -89.5492, 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    info: "Ubicación premium con alta plusvalía.",
    
    especificaciones: {
      enganche: "$45,000 MXN",
      mensualidades: "12, 18 o 24 meses",
      plusvalia: "Alta plusvalía (25% anual)",
      tipologias: "Desde 75m² hasta 120m²",
      entrega: "Marzo 2024",
      financiamiento: "Crédito bancario directo"
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800"
    ],
    
    amenidades: [
      { icon: "🛡️", title: "Seguridad 24/7", desc: "Vigilancia y cámaras" },
      { icon: "🌳", title: "Áreas verdes", desc: "Parques y jardines" },
      { icon: "👶", title: "Parque infantil", desc: "Zona de juegos" },
      { icon: "🚗", title: "Estacionamiento", desc: "Cajones numerados" },
      { icon: "🏃", title: "Pista de trote", desc: "Circuito deportivo" }
    ],
    
    descripcion: "Residencial Conkal es un desarrollo exclusivo ubicado en una de las zonas de mayor crecimiento en el norte de Yucatán. Cuenta con diseños arquitectónicos modernos, amplios espacios y la mejor ubicación para tu familia."
  },
  
  { 
    id: 2, 
    nombre: "Privada Mérida Norte", 
    tipo: "Residencial", 
    municipio: "Mérida", 
    lat: 21.1520, 
    lng: -89.6086, 
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    info: "Zona norte con alto crecimiento.",
    
    especificaciones: {
      enganche: "$65,000 MXN",
      mensualidades: "24, 36 o 48 meses",
      plusvalia: "Plusvalía garantizada (30% anual)",
      tipologias: "Desde 100m² hasta 180m²",
      entrega: "Diciembre 2023",
      financiamiento: "Financiamiento directo"
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
      "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?q=80&w=800"
    ],
    
    amenidades: [
      { icon: "🏊", title: "Alberca comunitaria", desc: "Con área de jacuzzi" },
      { icon: "🏋️", title: "Gimnasio", desc: "Equipo completo" },
      { icon: "🍔", title: "Asador", desc: "Área de BBQ" },
      { icon: "🎾", title: "Cancha de tenis", desc: "Superficie profesional" },
      { icon: "🚲", title: "Ciclopista", desc: "Circuito interno" },
      { icon: "🏢", title: "Salón de usos múltiples", desc: "Para eventos" }
    ],
    
    descripcion: "Privada Mérida Norte ofrece lujo y confort en la zona más exclusiva de la ciudad. Desarrollos de alta gama con acabados premium y amenidades de primer nivel."
  },
  
  { 
    id: 3, 
    nombre: "Puerto Progreso Luxury", 
    tipo: "Premium", 
    municipio: "Progreso", 
    lat: 21.2920, 
    lng: -89.6661, 
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    info: "Departamentos de lujo frente al mar.",
    
    especificaciones: {
      enganche: "$120,000 MXN",
      mensualidades: "36, 48 o 60 meses",
      plusvalia: "Alta revalorización costera (35% anual)",
      tipologias: "Departamentos de 2-4 recámaras",
      entrega: "Junio 2024",
      financiamiento: "Crédito hipotecario"
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    ],
    
    amenidades: [
      { icon: "🌊", title: "Vista al mar", desc: "Vistas panorámicas" },
      { icon: "🏊", title: "Alberca infinity", desc: "Alberca con vista" },
      { icon: "🍹", title: "Rooftop bar", desc: "Terraza lounge" },
      { icon: "🚤", title: "Marina privada", desc: "Amarres disponibles" },
      { icon: "🏋️‍♂️", title: "Spa & wellness", desc: "Centro de bienestar" },
      { icon: "🎣", title: "Pesca deportiva", desc: "Acceso directo" }
    ],
    
    descripcion: "El desarrollo costero más exclusivo de la península. Departamentos de lujo con vista al mar, acceso directo a la playa y amenidades de resort."
  },
  
  { 
    id: 4, 
    nombre: "Lotes Dzidzantún", 
    tipo: "Premium", 
    municipio: "Dzidzantún", 
    lat: 21.4335, 
    lng: -89.4338, 
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    info: "Terrenos de inversión.",
    
    especificaciones: {
      enganche: "$35,000 MXN",
      mensualidades: "Hasta 72 meses",
      plusvalia: "Excelente inversión (40% anual)",
      tipologias: "Lotes desde 200m² hasta 500m²",
      entrega: "Inmediata",
      financiamiento: "Plan personalizado"
    },
    
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800"
    ],
    
    amenidades: [
      { icon: "⚡", title: "Servicios urbanos", desc: "Agua, luz, drenaje" },
      { icon: "🛣️", title: "Acceso pavimentado", desc: "Calles asfaltadas" },
      { icon: "🌳", title: "Área arbolada", desc: "Vegetación nativa" },
      { icon: "🏗️", title: "Plan regulador", desc: "Uso de suelo aprobado" },
      { icon: "📐", title: "Topografía", desc: "Estudios realizados" },
      { icon: "📄", title: "Escrituración", desc: "Título de propiedad" }
    ],
    
    descripcion: "Los mejores lotes para inversión en Dzidzantún. Terrenos planos con todos los servicios, ideales para construcción residencial o comercial."
  }
];

// Hook para ajustar bounds automáticamente
function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      const bounds = L.latLngBounds(points.map(p => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [points, map]);
  return null;
}

export default function App() {
  const [filtro, setFiltro] = useState("Todos");
  const [detalle, setDetalle] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const filtrados = proyectosData.filter(
    p => filtro === "Todos" || p.tipo === filtro
  );

  const handleNextImage = (images) => {
    setGalleryIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (images) => {
    setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="login-page">
      <div className="container-fluid px-5 py-5 text-white">

        {/* HEADER */}
        <header className="mb-5">
          <h1 className="fw-bold">ÉXITO <span className="login-yellow">ALMAYA</span></h1>
          <p className="text-secondary">Selecciona una ubicación o un proyecto</p>
        </header>

        <div className="row g-5">

          {/* MAPA */}
          <div className="col-lg-4">
            <div className="d-flex gap-2 mb-4">
              {["Todos", "Residencial", "Premium"].map(t => (
                <button
                  key={t}
                  className={`btn btn-sm rounded-pill px-4 fw-bold ${filtro===t?"login-bg-yellow":"btn-outline-secondary text-white"}`}
                  onClick={() => {
                    setFiltro(t);
                    if(t==="Todos") setDetalle(null);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="login-map">
              <MapContainer
                center={[21.15, -89.55]}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: "420px", borderRadius: "24px" }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                />

                <FitBounds points={filtrados} />

                {filtrados.map(p => (
                  <Marker
                    key={p.id}
                    position={[p.lat, p.lng]}
                    icon={elegantIcon}
                    eventHandlers={{ click: () => {
                      setDetalle(p);
                      setGalleryIndex(0); // Reset gallery index al abrir nuevo proyecto
                    }}}
                  >
                    <Tooltip permanent direction="top" offset={[0, -25]} className="map-tooltip">
                      {p.nombre}
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* GRID */}
          <div className="col-lg-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {filtrados.map(p => (
                <div key={p.id} className="col">
                  <div className="login-project-card" onClick={() => {
                    setDetalle(p);
                    setGalleryIndex(0); // Reset gallery index
                  }}>
                    <img src={p.img} alt={p.nombre} />
                    <div className="login-card-footer">
                      <small className="login-yellow">{p.tipo}</small>
                      <h5 className="fw-bold">{p.nombre}</h5>
                      <p className="text-white-50 mb-0">{p.municipio}, Yucatán</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL FULL SCREEN - NUEVO DISEÑO LANDING */}
        <AnimatePresence>
          {detalle && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target.classList.contains('project-modal')) {
                  setDetalle(null);
                }
              }}
            >
              {/* Hero Section con Carrusel */}
              <div className="landing-hero">
                <motion.div 
                  className="carousel-container"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="carousel-slide">
                    <motion.img
                      key={galleryIndex}
                      src={detalle.gallery[galleryIndex]}
                      alt={`Galería ${galleryIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <div className="carousel-controls">
                    <button className="carousel-btn prev" onClick={() => handlePrevImage(detalle.gallery)}>
                      <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>‹</motion.span>
                    </button>
                    <button className="carousel-btn next" onClick={() => handleNextImage(detalle.gallery)}>
                      <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>›</motion.span>
                    </button>
                  </div>
                  <div className="carousel-dots">
                    {detalle.gallery.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`dot ${galleryIndex === index ? "active" : ""}`}
                        onClick={() => setGalleryIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className="hero-content">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="project-badge">{detalle.tipo}</span>
                    <h1 className="project-title">{detalle.nombre}</h1>
                    <p className="project-location">📍 {detalle.municipio}, Yucatán</p>
                    <p className="project-tagline">{detalle.descripcion}</p>
                  </motion.div>
                </div>
              </div>

              {/* Sección de Especificaciones */}
              <div className="container py-5">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Especificaciones del Proyecto
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="specs-grid"
                >
                  <div className="spec-card">
                    <div className="spec-icon">💰</div>
                    <h4>Enganche</h4>
                    <p className="spec-value">{detalle.especificaciones.enganche}</p>
                  </div>
                  <div className="spec-card">
                    <div className="spec-icon">📅</div>
                    <h4>Mensualidades</h4>
                    <p className="spec-value">{detalle.especificaciones.mensualidades}</p>
                  </div>
                  <div className="spec-card">
                    <div className="spec-icon">📈</div>
                    <h4>Plusvalía</h4>
                    <p className="spec-value">{detalle.especificaciones.plusvalia}</p>
                  </div>
                  <div className="spec-card">
                    <div className="spec-icon">🏠</div>
                    <h4>Tipologías</h4>
                    <p className="spec-value">{detalle.especificaciones.tipologias}</p>
                  </div>
                  <div className="spec-card">
                    <div className="spec-icon">📅</div>
                    <h4>Entrega</h4>
                    <p className="spec-value">{detalle.especificaciones.entrega}</p>
                  </div>
                  <div className="spec-card">
                    <div className="spec-icon">🏦</div>
                    <h4>Financiamiento</h4>
                    <p className="spec-value">{detalle.especificaciones.financiamiento}</p>
                  </div>
                </motion.div>
              </div>

              {/* Sección de Amenidades */}
              <div className="amenities-section">
                <div className="container">
                  <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Amenidades Incluidas
                  </motion.h2>
                  <div className="amenities-grid">
                    {detalle.amenidades.map((amenity, index) => (
                      <motion.div
                        key={index}
                        className="amenity-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="amenity-icon">{amenity.icon}</div>
                        <h5>{amenity.title}</h5>
                        <p>{amenity.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Galería de Imágenes */}
              <div className="gallery-section">
                <div className="container">
                  <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Galería del Proyecto
                  </motion.h2>
                  <div className="gallery-grid">
                    {detalle.gallery.map((img, index) => (
                      <motion.div
                        key={index}
                        className="gallery-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setGalleryIndex(index)}
                      >
                        <img src={img} alt={`${detalle.nombre} - Imagen ${index + 1}`} />
                        <div className="gallery-overlay">Ver más</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón de cierre */}
              <motion.button 
                className="close-modal-btn"
                onClick={() => setDetalle(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                ✕ Cerrar Vista
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}