import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, MapPin, Filter } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/opcion.css";

const hiddenIcon = new L.DivIcon({ className: 'bg-transparent', iconSize: [0, 0] });

const proyectosData = [
  { id: 1, nombre: "Residencial Conkal", tipo: "Residencial", municipio: "Conkal", lat: 21.0734, lng: -89.5218, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600", info: "Oasis de tranquilidad con alta plusvalía en el norte de Mérida.", tags: ["Seguridad 24/7", "Club House", "Áreas Verdes"], status: "VENDIDO" },
  { id: 2, nombre: "Costa Almaya", tipo: "Premium", municipio: "Dzidzantún", lat: 21.2500, lng: -89.0400, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600", info: "Lotes exclusivos a minutos de la costa esmeralda.", tags: ["Beach Club", "Inversión", "Vista al Mar"], status: "ENTREGADO" },
  { id: 3, nombre: "Mérida Norte Luxury", tipo: "Residencial", municipio: "Mérida", lat: 21.0400, lng: -89.6300, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600", info: "Residencias de alta gama en la zona más conectada.", tags: ["Luxury Finish", "Plusvalía", "Gimnasio"], status: "DISPONIBLE" },
  { id: 4, nombre: "Jardines del Mayab", tipo: "Residencial", municipio: "Umán", lat: 20.8861, lng: -89.7467, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600", info: "Viviendas sostenibles con enfoque ecológico y familiar.", tags: ["Energía Solar", "Parques", "Seguridad"], status: "EN CONSTRUCCIÓN" }
];

export default function App() {
  const [filtro, setFiltro] = useState('Todos');
  const [proyecto, setProyecto] = useState(proyectosData[0]);
  const landingRef = useRef(null);

  const filtrados = proyectosData.filter(p => filtro === 'Todos' || p.tipo === filtro);

  const handleSeleccion = (p) => {
    setProyecto(p);
    setTimeout(() => {
      landingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="proyectos-page">
    <div className="proyectos-container py-4">
      <div className="container-fluid px-3 px-md-4">
        
        {/* Header */}
        <div className="mb-4">
          <h1 className="fw-bold text-dark mb-2 h2">
            <span className="text-warning">•</span> Otros proyectos
          </h1>
          <p className="text-muted mb-3">Descubre nuestras propiedades exclusivas</p>
          
          {/* Filtros */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {['Todos', 'Residencial', 'Premium'].map(t => (
              <button 
                key={t} 
                onClick={() => setFiltro(t)}
                className={`btn btn-sm ${filtro === t ? 'btn-warning' : 'btn-outline-secondary'} rounded-pill px-3`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {/* Mapa */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">
                    <MapPin size={18} className="text-warning me-2" />
                    Ubicación de proyectos
                  </h6>
                  <span className="badge bg-warning text-dark">
                    {filtrados.length} {filtrados.length === 1 ? 'proyecto' : 'proyectos'}
                  </span>
                </div>
                <div className="map-container rounded overflow-hidden">
                  <MapContainer 
                    center={[21.12, -89.3]} 
                    zoom={9} 
                    style={{ height: '400px', width: '100%' }} 
                    zoomControl={false}
                    scrollWheelZoom={false}
                  >
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                    {filtrados.map(p => (
                      <Marker 
                      key={p.id} 
                      position={[p.lat, p.lng]} 
                      icon={hiddenIcon}
                    >
                      <Tooltip
                        permanent
                        interactive
                        direction="top"
                        className="custom-tooltip"
                      >
                        <div
                          className={`map-marker ${proyecto?.id === p.id ? 'active' : ''}`}
                          onClick={() => handleSeleccion(p)}
                        >
                          <img src={p.img} alt={p.nombre} className="map-marker-img" />
                          <div className="map-marker-title">{p.nombre}</div>
                          <div className="map-marker-status">{p.status}</div>
                        </div>
                      </Tooltip>
                    </Marker>
                    ))}
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de proyectos - CORREGIDO: Siempre muestra 2x2 grid */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-3">
                <h6 className="fw-bold mb-3">Proyectos disponibles</h6>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  {filtrados.length > 0 ? (
                    filtrados.map(p => (
                      <div key={p.id} className="col">
                        <div 
                          onClick={() => handleSeleccion(p)}
                          className={`card project-card h-100 border ${proyecto?.id === p.id ? 'border-warning' : 'border-light'} shadow-sm`}
                        >
                          <div className="position-relative overflow-hidden" style={{ height: '140px' }}>
                            <img src={p.img} className="card-img-top w-100 h-100 object-fit-cover" alt={p.nombre} />
                            <div className="position-absolute top-0 start-0 m-2">
                              <span className={`badge ${p.status === 'DISPONIBLE' ? 'bg-success' : p.status === 'VENDIDO' ? 'bg-dark' : 'bg-warning'}`}>
                                {p.status}
                              </span>
                            </div>
                          </div>
                          <div className="card-body p-3">
                            <h6 className="card-title fw-bold mb-1 text-truncate">{p.nombre}</h6>
                            <div className="d-flex align-items-center text-muted small mb-2">
                              <MapPin size={12} className="text-warning me-1" />
                              {p.municipio}
                            </div>
                            <small className="text-muted d-block">{p.info.substring(0, 60)}...</small>
                            <div className="mt-2">
                              <small className="badge bg-light text-dark border">{p.tipo}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Si no hay proyectos con el filtro
                    <div className="col-12">
                      <div className="text-center py-5">
                        <p className="text-muted">No hay proyectos disponibles con este filtro</p>
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detalle del proyecto seleccionado */}
        <AnimatePresence>
          {proyecto && (
            <motion.div 
              ref={landingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-5"
            >
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="position-relative h-100">
                      <img 
                        src={proyecto.img} 
                        className="img-fluid w-100 h-100 object-fit-cover" 
                        alt={proyecto.nombre}
                        style={{ minHeight: '300px' }}
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                          {proyecto.tipo.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 p-md-5">
                      <h6 className="text-warning fw-bold text-uppercase small mb-2">PROYECTO SELECCIONADO</h6>
                      <h3 className="fw-bold mb-3">{proyecto.nombre}</h3>
                      <p className="text-muted mb-4">{proyecto.info}</p>
                      
                      <div className="mb-4">
                        <h6 className="fw-bold mb-3">Características destacadas</h6>
                        <div className="row g-2">
                          {proyecto.tags.map(t => (
                            <div key={t} className="col-6 d-flex align-items-center">
                              <CheckCircle2 size={16} className="text-warning me-2" />
                              <span className="small">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between border-top pt-4">
                        <div>
                          <div className="d-flex align-items-center">
                            <MapPin size={16} className="text-warning me-2" />
                            <span className="fw-medium">{proyecto.municipio}</span>
                          </div>
                          <span className={`badge ${proyecto.status === 'DISPONIBLE' ? 'bg-success' : proyecto.status === 'VENDIDO' ? 'bg-dark' : 'bg-warning'} mt-2`}>
                            {proyecto.status}
                          </span>
                        </div>
                        <button className="btn btn-warning fw-bold px-4 py-2 rounded-pill d-flex align-items-center">
                          Contactar agente
                          <ArrowRight size={18} className="ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}