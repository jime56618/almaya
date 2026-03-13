import React, { useState, useEffect, useRef } from 'react';
import { FiZap, FiDroplet, FiMap, FiSun, FiWifi, FiCloudRain, FiBox, FiSettings } from 'react-icons/fi';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Assets
import viaHero from "../assets/images/via-hero.png";
import viaMaster from "../assets/images/via-master.png";
import lote3D from '../assets/images/via-lote.png';
import col1 from '../assets/images/via-col1.png';
import col2 from '../assets/images/via-col2.png';
import col3 from '../assets/images/via-col3.png';
import "./css/via.css";
import ScrollReveal from "../components/ScrollReveal";

export default function ViaSerena() {
  const position = [21.098570, -89.508462];
  const GMAPS_URL = "https://wa.me/5219991135644?text=Hola,%20quiero%20agendar%20una%20visita%20a%20Vía%20Serena";

  // Infra
  const infraFeatures = [
    { id: 1, icon: <FiZap />, text: "Luz eléctrica a pie de lote" },
    { id: 2, icon: <FiDroplet />, text: "Agua potable municipal" },
    { id: 3, icon: <FiMap />, text: "Calles pavimentadas" },
    { id: 4, icon: <FiSun />, text: "Iluminación pública" }
  ];

  // ✅ Servicios adicionales (re-enfocados a beneficio / plusvalía)
  const serviciosAdicionales = [
    { id: 1, icon: <FiWifi />, title: "Voz y datos", desc: "Instalaciones subterráneas que mejoran estética y plusvalía." },
    { id: 2, icon: <FiCloudRain />, title: "Drenaje pluvial", desc: "Sistema diseñado para evitar encharcamientos y problemas futuros." },
    { id: 3, icon: <FiBox />, title: "Delimitación", desc: "Mayor orden y seguridad para el desarrollo y tu inversión." },
    { id: 4, icon: <FiSettings />, title: "Acometida", desc: "Preparación lista para construir sin gastos inesperados." }
  ];

  // ✅ Tipos de lote (sección nueva)
  const lotes = [
    {
      id: 1,
      title: "Lote estándar",
      bullets: ["Ideal para casa residencial", "Ubicación funcional dentro del desarrollo", "Listo para construir"],
      price: "Desde $600,000"
    },
    {
      id: 2,
      title: "Lote premium",
      bullets: ["Mejor ubicación dentro del proyecto", "Mayor potencial de plusvalía", "Ideal para proyecto residencial premium"],
      price: "Cotiza disponibilidad"
    }
  ];

  // Estados para animaciones
  const [infraVisible, setInfraVisible] = useState(false);
  const [pathVisible, setPathVisible] = useState(false);

  // Refs para el observer
  const infraRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.12 };

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
    <main className="via-page">
      {/* HERO SECTION */}
      <header className="via-hero">
  <img className="via-hero__img" src={viaHero} alt="Vía Serena Conkal" />
  <div className="via-hero__overlay" />

  <div className="via-hero__content">
    <ScrollReveal>
      <div className="via-hero__wrapper">
        
        {/* Texto superior estilizado como la imagen */}
        <div className="via-hero__top-text">
          DESARROLLO RESIDENCIAL EXCLUSIVO
        </div>

        <h1 className="via-hero__title">
          VÍA <span className="txt-yellow">SERENA</span> 
        </h1>
        
        <p className="via-hero__subtitle">
          Tu terreno listo para construir en la zona de mayor crecimiento.
        </p>

        {/* Cuadro de precio más ancho y resaltado */}
        <div className="via-hero__price-card">
          <span className="price-label">DESDE</span>
          <div className="price-main">
            <span className="price-symbol">$</span>
            <span className="price-amount">308,000</span>
            <span className="price-currency">MXN</span>
          </div>
          <p className="price-features">Servicios a pie de lote • Propiedad Privada</p>
        </div>

        <div className="via-hero__actions">
          <a href="#via-contacto" className="btn-reserve">Reserva tu Lote</a>
          <a href="#via-lotes" className="btn-outline">Ver Terrenos</a>
        </div>

        <div className="via-hero__footer">
          <span className="via-bolt">⚡</span> ¡Últimos lotes disponibles en Preventa!
        </div>

      </div>
    </ScrollReveal>
  </div>
</header>
      {/* SECCIÓN ¿QUÉ ES? */}
      <ScrollReveal>
        <section className="via-section via-section--intro" id="via-que-es">
          <div className="via-container">
            {/* ✅ Título más vendedor */}
            <h2 className="via-h2">¿Por qué invertir en Vía Serena hoy?</h2>
            <p className="via-p">
              Vía Serena es un desarrollo residencial <b>municipalizado</b> en Conkal,
              pensado para invertir y construir con libertad: <b>sin cuotas de mantenimiento</b>,
              con servicios conectados a la <b>red pública</b> y una ubicación con alta proyección de <b>plusvalía</b>.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* SECCIÓN UBICACIÓN CON MAPA */}
      <ScrollReveal>
        <section className="via-location location--dark" id="via-ubicacion">
          <div className="via-container-location grid--2col">
            <div className="location__content">
              <h2 className="location__title">Ubicación <span className="hl--yellow">estratégica</span></h2>

              {/* ✅ Texto reforzado para venta */}
              <p className="location__p">
                Conkal se ubica al norte de Mérida, con conectividad y alto crecimiento.
                Zona con fuerte demanda habitacional y alta proyección de <strong>plusvalía</strong>.
              </p>

              <ul className="location__list">
                <li>Zona norte de Mérida</li>
                <li>Conectividad con la ciudad</li>
                <li>Alta proyección de crecimiento</li>
                <li>Entorno residencial premium</li>
              </ul>

              {/* ✅ CTA de acción real */}
              <a href={GMAPS_URL} target="_blank" rel="noreferrer" className="via-btn-maps">
                Agendar visita al terreno
              </a>
            </div>

            <div className="location__map">
              <div className="map__frame premium--shadow">
                <MapContainer
                  center={position}
                  zoom={12}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                  className="dark-map"
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                  <CircleMarker
                    center={position}
                    pathOptions={{ fillColor: '#ffcc00', color: '#ffcc00', weight: 2, fillOpacity: 1 }}
                    radius={10}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>Vía Serena</Tooltip>
                  </CircleMarker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECCIÓN INFRAESTRUCTURA */}
      <section
        ref={infraRef}
        className={`via-infra-section ${infraVisible ? 'active-animation' : ''}`}
      >
        <div className="via-infra-grid">
          <div className="via-infra-col-img">
            <img src={lote3D} alt="Infraestructura" className="via-infra-full-img" />
          </div>

          <div className="via-infra-col-text">
            <h2 className="via-infra-title">
              Compra hoy. <span className="via-infra-hl">Construye cuando quieras</span>
            </h2>
            <div className="via-infra-line-divider"></div>

            {/* ✅ Frase corta que cambia percepción */}
            <p className="via-infra-sub">
              No estás comprando promesa. Estás comprando un lote con servicios listos.
            </p>

            <div className="via-infra-list">
              {infraFeatures.map((item, index) => (
                <div
                  key={item.id}
                  className="via-infra-item"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="via-infra-icon-box">{item.icon}</div>
                  <p className="via-infra-label">{item.text}</p>
                </div>
              ))}
            </div>

            {/* ✅ CTA repetido, sin cambiar diseño (reusa botón) */}
            <div className="via-infra-cta">
              <a className="via-btn via-btn--primary" href="#via-contacto">Quiero precios y disponibilidad</a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NUEVA SECCIÓN: TIPOS DE LOTE + DESDE CUÁNTO */}
      <ScrollReveal>
        <section className="via-section via-lotes-section" id="via-lotes">
          <div className="via-container">
            <h2 className="via-h2">Tipos de lote disponibles</h2>
            <p className="via-p">
              Elige el tipo de lote que se ajusta a tu proyecto. Solicita disponibilidad actualizada por WhatsApp.
            </p>

            <div className="via-lotes-grid">
              {lotes.map((l) => (
                <div key={l.id} className="via-lote-card">
                  <div className="via-lote-head">
                    <h3 className="via-lote-title">{l.title}</h3>
                    <span className="via-lote-price">{l.price}</span>
                  </div>

                  <ul className="via-lote-list">
                    {l.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <a className="via-btn via-btn--primary via-lote-btn" href="#via-contacto">
                    Ver disponibilidad
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECCIÓN SERVICIOS ADICIONALES (CAMINO CURVO) */}
      <ScrollReveal>
  <section
    ref={pathRef}
    className={`via-path-section ${pathVisible ? 'is-active' : ''}`}
    id="via-servicios"
  >
    <div className="via-path-container">
      <div className="via-path-header">
        <h2 className="via-path-h2">
          Infraestructura que <span className="via-path-alt">protege tu inversión</span>
        </h2>
        <p className="via-path-muted">No es solo un lote. Es un proyecto con planeación urbana real.</p>
      </div>

      <div className="via-path-grid">
        {serviciosAdicionales.map((item, index) => (
          <div key={item.id} className="via-path-item">
            <div className="via-path-dot">
              <span className="via-path-number">{item.id}</span>
            </div>
            <div className="via-path-card">
              <div className="via-path-icon">{item.icon}</div>
              <h3 className="via-path-card-title">{item.title}</h3>
              <p className="via-path-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="via-path-cta">
        <a className="via-btn via-btn--gold" href="#via-contacto">
          Recibir información por WhatsApp
        </a>
      </div>
    </div>
  </section>
</ScrollReveal>

      {/* MASTER PLAN - SECCIÓN CON FONDO TRIPLE */}
      <section className="via-master-bg-section" id="via-masterplan-final">
        <div className="via-master-columns">
          <div className="via-master-col"><img src={col1} alt="Master 1" /></div>
          <div className="via-master-col"><img src={col2} alt="Master 2" /></div>
          <div className="via-master-col"><img src={col3} alt="Master 3" /></div>
        </div>

        <div className="via-master-bg-overlay"></div>

        <div className="via-master-bg-content">
          <ScrollReveal>
            <p className="via-master-bg-kicker">MASTER PLAN</p>
            <h3 className="via-master-bg-title">Crecimiento planeado</h3>

            {/* ✅ Urgencia suave */}
            <p className="via-master-bg-note">Consulta disponibilidad de esta etapa antes de que se agote.</p>

            {/* ✅ CTA con intención de precio */}
            <a
              href={viaMaster}
              download="MasterPlan_ViaSerena.png"
              className="via-btn via-btn--ghost"
              style={{ marginTop: '18px' }}
            >
              Descargar precios y ubicaciones
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="via-form-section" id="via-contacto">
  <div className="via-container">
    <div className="via-form-box">

      <h2 className="via-form-title">
        Recibe precios y disponibilidad
      </h2>

      <p className="via-form-sub">
        Déjanos tus datos y un asesor te contacta por WhatsApp.
      </p>

      <form
        className="via-form"
        onSubmit={(e) => {
          e.preventDefault();
          // Aquí conectas tu backend o WhatsApp
        }}
      >
        <div className="via-form-row">
          <input type="text" placeholder="Nombre*" required />
          <input type="text" placeholder="Apellidos*" required />
        </div>

        <div className="via-phone">
          <span>+52</span>
          <input
            type="tel"
            placeholder="Número de WhatsApp*"
            required
            inputMode="numeric"
          />
        </div>

        <input type="email" placeholder="Correo electrónico" />

        <select defaultValue="">
          <option value="" disabled>¿Buscas para invertir o construir?</option>
          <option>Invertir</option>
          <option>Construir</option>
          <option>Ambos</option>
        </select>

        <button type="submit" className="via-form-btn">
          Quiero precios y disponibilidad
        </button>

        <p className="via-form-legal">
          Tus datos se utilizan únicamente para brindarte información del proyecto.
        </p>
      </form>

    </div>
  </div>
</section>

    </main>
  );
}