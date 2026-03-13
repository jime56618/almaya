// src/pagina/Coralta.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FiZap,
  FiDroplet,
  FiMap,
  FiSun,
  FiWifi,
  FiCloudRain,
  FiBox,
  FiSettings,
} from "react-icons/fi";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Assets (CAMBIA estos archivos por los de Coralta)
import coraltaHero from "../assets/images/coralta-hero.jpg";
import coraltaMaster from "../assets/images/coralta-master.png";
import lote3D from "../assets/images/coralta-lote.png";
import col1 from "../assets/images/coralta-col1.png";
import col2 from "../assets/images/coralta-col2.png";
import col3 from "../assets/images/coralta-col3.JPG";

import "./css/cora.css";
import ScrollReveal from "../components/ScrollReveal";

export default function Coralta() {
  // 📍 Ajusta si tienes coordenadas exactas del punto
  const position = [21.063230, -89.506887];

  // 🔗 Pon aquí el link real de Google Maps de Coralta si lo tienes
  const GMAPS_URL = "https://maps.app.goo.gl/h1RCrLdpKnpwQdgR7";


  const infraFeatures = [
    { id: 1, icon: <FiZap />, text: "Entrega eléctrica subterránea" },
    { id: 2, icon: <FiDroplet />, text: "Preparación para agua potable" },
    { id: 3, icon: <FiMap />, text: "Calles pavimentadas" },
    { id: 4, icon: <FiSun />, text: "Alumbrado público" },
  ];

  const serviciosAdicionales = [
    { id: 1, icon: <FiWifi />, title: "Voz y datos", desc: "Preparación subterránea." },
    { id: 2, icon: <FiCloudRain />, title: "Drenaje pluvial", desc: "Sistema para evitar encharcamientos." },
    { id: 3, icon: <FiBox />, title: "Banquetas", desc: "Banquetas para mejor movilidad." },
    { id: 4, icon: <FiSettings />, title: "Detalles de urbanización", desc: "Infraestructura completa en desarrollo." },
  ];

  const [infraVisible, setInfraVisible] = useState(false);
  const [pathVisible, setPathVisible] = useState(false);

  const infraRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.25 };

    const infraObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInfraVisible(true);
    }, observerOptions);

    const pathObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPathVisible(true);
    }, observerOptions);

    if (infraRef.current) infraObserver.observe(infraRef.current);
    if (pathRef.current) pathObserver.observe(pathRef.current);

    return () => {
      infraObserver.disconnect();
      pathObserver.disconnect();
    };
  }, []);

  return (
    <main className="coralta-page">
      {/* HERO */}
      <header className="coralta-hero">
        <img className="coralta-hero__img" src={coraltaHero} alt="Coralta Hero" />
        <div className="coralta-hero__overlay" />
        <div className="coralta-hero__content">
          <ScrollReveal>
            <p className="coralta-hero__kicker">CONKAL, YUCATÁN</p>
            <h1 className="coralta-hero__title">
              <span className="coralta-txt-accent">Coralta</span>
            </h1>
            <p className="coralta-hero__subtitle">
              Ubicación estratégica y urbanización para invertir con confianza.
            </p>

            <div className="coralta-hero__ctaRow">
              <a className="coralta-btn coralta-btn--primary" href="#coralta-contacto">
                Solicitar información
              </a>
              <a className="coralta-btn coralta-btn--ghost" href="#coralta-masterplan-final">
                Ver master plan
              </a>
            </div>

            <div className="coralta-hero__info-card">
              <div className="coralta-card__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffcc00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>

              <div className="coralta-card__body">
                <p className="coralta-card__title">Beneficios clave:</p>
                <div className="coralta-card__grid">
                  <span>
                    <b className="coralta-dot">•</b> Sin cuota de mantenimiento
                  </span>
                  <span>
                    <b className="coralta-dot">•</b> Escrituración inmediata
                  </span>
                  <span>
                    <b className="coralta-dot">•</b> 8 km de Mérida
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ¿QUÉ ES? */}
      <ScrollReveal>
        <section className="coralta-section coralta-section--intro" id="coralta-que-es">
          <div className="coralta-container">
            <h2 className="coralta-h2">¿Qué es Coralta?</h2>
            <p className="coralta-p">
              Coralta es un desarrollo en Conkal que busca combinar buena ubicación, urbanización y
              libertad de inversión, con beneficios como <b>sin cuota de mantenimiento</b> y{" "}
              <b>escrituración inmediata</b>.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* UBICACIÓN */}
      <ScrollReveal>
        <section className="coralta-location coralta-location--dark" id="coralta-ubicacion">
          <div className="coralta-container-location coralta-grid--2col">
            <div className="coralta-location__content">
              <h2 className="coralta-location__title">
                Ubicación <span className="coralta-hl">estratégica</span>
              </h2>
              <p className="coralta-location__p">
                Conectado con Mérida y la zona de Conkal, ideal para quienes quieren moverse rápido
                y estar en una zona con proyección.
              </p>

              <ul className="coralta-location__list">
                <li>A 300 mts de carretera Mérida–Motul</li>
                <li>Aprox. 8 km de Mérida</li>
                <li>Comunidad planificada (116 terrenos)</li>
                <li>Inversión sin compromisos adicionales</li>
              </ul>

              <a href={GMAPS_URL} target="_blank" rel="noreferrer" className="coralta-btn-maps">
                Ver ubicación exacta
              </a>
            </div>

            <div className="coralta-location__map">
              <div className="coralta-map__frame coralta-premium--shadow">
                <MapContainer
                  center={position}
                  zoom={12}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                  className="coralta-dark-map"
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                  <CircleMarker
                    center={position}
                    pathOptions={{fillColor: '#ffcc00', color: '#ffcc00', weight: 2, fillOpacity: 1 }}
                    radius={10}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                      Coralta
                    </Tooltip>
                  </CircleMarker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INFRAESTRUCTURA */}
      <section
        ref={infraRef}
        className={`coralta-infra-section ${infraVisible ? "coralta-active-animation" : ""}`}
        id="coralta-infra"
      >
        <div className="coralta-infra-grid">
          <div className="coralta-infra-col-img">
            <img src={lote3D} alt="Infraestructura Coralta" className="coralta-infra-full-img" />
          </div>

          <div className="coralta-infra-col-text">
            <h2 className="coralta-infra-title">
              Infraestructura lista para <span className="coralta-infra-hl">avanzar</span>
            </h2>
            <div className="coralta-infra-line-divider" />

            <div className="coralta-infra-list">
              {infraFeatures.map((item, index) => (
                <div
                  key={item.id}
                  className="coralta-infra-item"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="coralta-infra-icon-box">{item.icon}</div>
                  <p className="coralta-infra-label">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS ADICIONALES (CAMINO) */}
      <ScrollReveal>
        <section
          ref={pathRef}
          className={`coralta-path-section ${pathVisible ? "coralta-is-active" : ""}`}
          id="coralta-servicios"
        >
          <div className="coralta-path-container">
            <div className="coralta-path-header">
              <h2 className="coralta-path-h2">
                Servicios <span className="coralta-path-alt">adicionales</span>
              </h2>
              <p className="coralta-path-muted">Detalles que elevan tu inversión.</p>
            </div>

            <div className="coralta-path-wrapper">
              <svg className="coralta-path-svg" viewBox="0 0 1200 300" fill="none">
                <path
                  d="M0 150C150 150 250 50 400 50C550 50 650 250 800 250C950 250 1050 150 1200 150"
                  stroke="#f1a245"
                  strokeWidth="3"
                  strokeDasharray="1200"
                  style={{ strokeDashoffset: pathVisible ? "0" : "1200" }}
                />
              </svg>

              <div className="coralta-path-grid">
                {serviciosAdicionales.map((item, index) => (
                  <div key={item.id} className={`coralta-path-item coralta-item-${index + 1}`}>
                    <div className="coralta-path-dot">
                      <span className="coralta-path-number">{item.id}</span>
                    </div>

                    <div className="coralta-path-card">
                      <div className="coralta-path-icon">{item.icon}</div>
                      <h3 className="coralta-path-card-title">{item.title}</h3>
                      <p className="coralta-path-card-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MASTER PLAN */}
      <section className="coralta-master-bg-section" id="coralta-masterplan-final">
        <div className="coralta-master-columns">
          <div className="coralta-master-col">
            <img src={col1} alt="Master 1" />
          </div>
          <div className="coralta-master-col">
            <img src={col2} alt="Master 2" />
          </div>
          <div className="coralta-master-col">
            <img src={col3} alt="Master 3" />
          </div>
        </div>

        <div className="coralta-master-bg-overlay" />

        <div className="coralta-master-bg-content">
          <ScrollReveal>
            <p className="coralta-master-bg-kicker">MASTER PLAN</p>
            <h3 className="coralta-master-bg-title">Crecimiento planeado</h3>

            <a
              href={coraltaMaster}
              download="MasterPlan_Coralta.png"
              className="coralta-btn coralta-btn--ghost"
              style={{ marginTop: "30px" }}
            >
              Descargar Master Plan
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
