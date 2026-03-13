import React, { useState,  useRef } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import heroImg from "../assets/images/armeda-hero.JPG"; 
import img1 from "../assets/images/armeda-1.jpg";
import imgSeguridad from "../assets/images/armeda-seguridad.jpg";
import imgLegal from "../assets/images/armeda-legalidad.jpeg";
import imgEstilo from "../assets/images/armeda-vida.jpg";
import Armedavideo from"../assets/images/armeda-video.mp4";
import "./css/armeda.css";
import ScrollReveal from "../components/ScrollReveal";

import { 
  HiOutlineMapPin, HiOutlineHomeModern, HiOutlineSquare3Stack3D, 
  HiOutlineArrowsPointingOut, HiOutlineBolt, HiOutlineTruck,
  HiOutlineLink, HiOutlineSparkles, HiOutlineTag, HiOutlineMap
} from "react-icons/hi2";
import { HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineSun } from "react-icons/hi";

import { MapContainer, TileLayer, Tooltip, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { HiTrendingUp, HiOutlineLocationMarker, HiOutlineHome, HiOutlineViewGrid } from "react-icons/hi";


export default function ArmedaLanding() {
  const GMAPS_URL = "https://www.google.com/maps/place/DESARROLLO+ARMEDA/@21.1020932,-89.7136639,10z/data=!4m6!3m5!1s0x8f567fe3932c82b3:0x9c0b4f5091b3253d!8m2!3d21.0837868!4d-89.4474378!16s%2Fg%2F11tcv867b6?entry=ttu";
  const position = [21.0837868, -89.4474378];


  const [isExplored, setIsExplored] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 19) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToForm = () => {
    // 1. Buscamos el elemento en el DOM actual
    const el = document.getElementById("formulario");

    if (el) {
      // 2. Si existe (porque estás en el Home), baja con scroll suave
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // 3. Si NO existe (estás en la página /armeda), navega al home usando el hash
      // Esto disparará la lógica que ya tiene tu Home para scrollear al cargar
      navigate("/#formulario");
    }
  };
  
  const premiumIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Pin premium
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});


  return (
    <main className="armedaLanding">
      {/* SECCIÓN HERO (Basada en la imagen) */}
      {/* SECCIÓN HERO */}
<section className="armedaLanding__hero">
  <img src={heroImg} alt="Hero" className="hero__bgImage" />
  <div className="hero__overlay">
    <div className="armedaLanding__container hero__centeredContent">
      <ScrollReveal direction="up">
        {/* Marca con espacio separado */}
        <div className="armedaLanding__brand">
          <strong className="armedaLanding__brandStrong">ARMEDA</strong>
          <span className="armedaLanding__brandLight">CONKAL</span>
        </div>

        {/* Títulos centrados */}
        <h1 className="hero__title">
          Descubre el lugar perfecto <br /> para tu <span className="armedaLanding__hl">patrimonio</span>
        </h1>
        <p className="hero__subtitle">
          Lotes ideales para invertir y construir a minutos de Mérida con alta plusvalía.
        </p>
      </ScrollReveal>
    </div>
  </div>

  {/* BARRA AMARILLA CON ICONOS ESPECÍFICOS */}
  <div className="hero__floatingBar">
          <div className="floatingBar__content">
            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiTrendingUp size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                  <strong>Plusvalía</strong>
                  <p>Alta rentabilidad</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineLocationMarker size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                  <strong>Ubicación</strong>
                  <p>Cerca de Mérida</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineHome size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                  <strong>Uso de suelo</strong>
                  <p>Residencial</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineViewGrid size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                  <strong>Medidas</strong>
                  <p>400 m² totales</p>
              </div>
            </div>

            <button className="bar__btn" onClick={handleGoToForm}>Solicitar Info</button>
          </div>
        </div>
</section>

      {/* SECCIÓN DETALLES (Helouse Calabioue Style) */}
      <section className="armedaLanding__details section--padding">
        <div className="armedaLanding__container grid--2col">
          <div className="details__images">
             <div className="img--main">
               <video
                 ref={videoRef}
                 src={Armedavideo}
                 autoPlay
                 muted
                 loop
                 playsInline
                 onTimeUpdate={handleTimeUpdate}
                 className="video-as-img"
               />
             </div>
             
          </div>
          <div className="details__text">
            <h2 className="section__title">¿Qué es <span className="armedaLanding__hl">Armeda</span>?</h2>
            <p className="section__p">
              Armeda es un desarrollo de terrenos ubicado en Conkal, Yucatán, en una
              zona de crecimiento al norte de Mérida. Ideal para quienes buscan invertir
              con visión o construir patrimonio en una ubicación estratégica.
            </p>
            <ul className="armedaLoc__list">
              <li>10 m de frente x 40 m de fondo</li>
              <li>Superficie total de 400 m²</li>
              <li>Conexión a vialidades principales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN UBICACIÓN (Scare Vacation Style) */}
      
      <section className="armedaLanding__location section--padding location--dark">
  <div className="armedaLanding__container grid--2col">
    <div className="location__content">
      <h2 className="location__title">
        Ubicación <span className="hl--yellow">estratégica</span> en <span className="hl--yellow">Conkal</span>
      </h2>
      <p className="location__p">
        Conkal forma parte de la zona norte de Mérida, una zona con 
        <strong> alto crecimiento y plusvalía</strong>, con conexión directa a la ciudad y la costa.
      </p>
      <ul className="location__list">
        <li>A solo 15 min de Altabrisa</li>
        <li>Cerca de las mejores universidades</li>
        <li>Acceso rápido a la carretera Mérida-Progreso</li>
      </ul>
      <a href={GMAPS_URL} target="_blank" rel="noreferrer" className="armedaLanding__btnPrimary"> 
        Ver en Google Maps 
      </a>
    </div>

    <div className="location__map">
  <div className="map__frame premium--shadow">
    <MapContainer 
      center={[21.15, -89.45]} // Centro ajustado para ver alrededores
      zoom={10} // Menos zoom para ver Mérida, Baca, Progreso, etc.
      scrollWheelZoom={false} 
      style={{height:'100%', width:'100%'}}
      className="dark-map" 
    >
      {/* Usamos el TileLayer light que se volverá gris con el CSS */}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      
      {/* PUNTO AMARILLO en lugar de Pin */}
      <CircleMarker 
        center={position} 
        pathOptions={{ 
           fillColor: '#FFC311', // Amarillo puro de tu marca
           color: '#FFC311',    // Borde blanco sutil
          weight: 2, 
          fillOpacity: 1 
        }} 
        radius={10} // Tamaño del punto
      >
        <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
          Desarrollo Armeda
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  </div>
</div>
  </div>
</section>


{/* =========================
   FICHA TECNICA
========================= */}

<section className="armedaSpec section--padding" id="armeda-ficha">
  <div className="armedaLanding__container">
    <ScrollReveal duration={1.15}>
      <div className="armedaSpec__head">
        <span className="armedaSpec__kicker">Ficha técnica</span>
        <h2 className="armedaSpec__title">
          Información <span className="hl--yellow">general</span>
        </h2>
        <p className="armedaSpec__sub">
          Datos clave del proyecto para consultar rápido.
        </p>
      </div>
    </ScrollReveal>

    <div className="armedaSpec__grid">
      {[
        { i: <HiOutlineMapPin />, k: "Ubicación", v: "Conkal, Yucatán (zona norte)" },
        { i: <HiOutlineHomeModern />, k: "Tipo", v: "Terrenos residenciales" },
        { i: <HiOutlineTag />, k: "Uso de suelo", v: "Residencial" },
        { i: <HiOutlineArrowsPointingOut />, k: "Medidas", v: "10 m x 40 m" },
        { i: <HiOutlineSquare3Stack3D />, k: "Superficie", v: "400 m²" },
        { i: <HiOutlineMap />, k: "Acceso", v: "A pie de lote" },
        { i: <HiOutlineSparkles />, k: "Delimitación", v: "Mojoneras" },
        { i: <HiOutlineBolt />, k: "Infraestructura", v: "Luz y calles asfálticas" },
        { i: <HiOutlineLink />, k: "Conectividad", v: "Vialidades principales" },
        { i: <HiOutlineTruck />, k: "Extras", v: "A 30 min de la playa / MSI" },
      ].map((row, i) => (
        <ScrollReveal key={i} duration={1.0 + i * 0.05}>
          <div className="armedaSpec__row">
            <div className="armedaSpec__iconBox">{row.i}</div>
            <div className="armedaSpec__content">
              <span className="armedaSpec__key">{row.k}</span>
              <p className="armedaSpec__val">{row.v}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal duration={1.25}>
      <div className="armedaSpec__note">
        *La disponibilidad y condiciones pueden variar. Solicita información vigente.
      </div>
    </ScrollReveal>
  </div>
</section>

   <section className={`armedaPillars ${isExplored ? 'mode--explored' : 'mode--summary'}`}>
        <div className="armedaLanding__container armedaPillars__outerGrid">
          
          {/* LADO IZQUIERDO (Se mueve arriba en mode--explored) */}
          <div className="armedaPillars__head">
            <h2 className="armedaPillars__title">
              Razones para invertir en <span className="hl--yellow">Armeda</span>
            </h2>
            <p className="armedaPillars__sub">
              Un proyecto diseñado para ofrecer seguridad, crecimiento y una excelente calidad de vida en Yucatán.
            </p>
            <button 
              className="armedaLanding__btnPrimary"
              onClick={() => setIsExplored(!isExplored)}
            >
              {isExplored ? "Ver Resumen" : "Explorar Beneficios"}
            </button>
          </div>

          {/* LADO DERECHO (Tarjetas que se despliegan) */}
          <div className="armedaPillars__cardsWrapper">
            {/* TARJETA 1 */}
            <article className="armedaPillars__card">
              <div className="armedaPillars__imgBox">
                <img src={imgSeguridad} alt="Seguridad" className="armedaPillars__img" />
                <div className="armedaPillars__cardOverlay">
                  <HiOutlineShieldCheck className="armedaPillars__cardIcon" />
                  <h3 className="armedaPillars__cardTitle">Seguridad</h3>
                </div>
              </div>
              <div className="armedaPillars__cardInfo">
                <p>Yucatán se mantiene como el estado más seguro de México, ofreciendo un entorno de paz y confianza para tu familia.</p>
              </div>
            </article>

            {/* TARJETA 2 */}
            <article className="armedaPillars__card">
              <div className="armedaPillars__imgBox">
                <img src={imgLegal} alt="Certeza Legal" className="armedaPillars__img" />
                <div className="armedaPillars__cardOverlay">
                  <HiOutlineDocumentText className="armedaPillars__cardIcon" />
                  <h3 className="armedaPillars__cardTitle">Certeza Legal</h3>
                </div>
              </div>
              <div className="armedaPillars__cardInfo">
                <p>Contamos con toda la documentación en regla y permisos municipales para garantizar que tu inversión sea sólida.</p>
              </div>
            </article>

            {/* TARJETA 3 */}
            <article className="armedaPillars__card">
              <div className="armedaPillars__imgBox">
                <img src={imgEstilo} alt="Estilo de vida" className="armedaPillars__img" />
                <div className="armedaPillars__cardOverlay">
                  <HiOutlineSun className="armedaPillars__cardIcon" />
                  <h3 className="armedaPillars__cardTitle">Estilo de Vida</h3>
                </div>
              </div>
              <div className="armedaPillars__cardInfo">
                <p>Disfruta de la cercanía con las mejores playas y la gastronomía única de Conkal, combinando modernidad y tradición.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

{/* CONTEXTO / PLUSVALÍA */}
<section className="armedaContext section--padding" id="armeda-contexto">
  <div className="armedaLanding__container armedaContext__wrap">
    <ScrollReveal duration={1.15}>
      <div className="armedaContext__left">
        <span className="armedaContext__kicker">Zona & contexto</span>
        <h2 className="armedaContext__title">
          Conkal: zona norte 
          <span className="hl--line-only">
            con <span className="hl--text-gold">crecimiento</span>
          </span>
        </h2>
        
        <p className="armedaContext__p">
          Conkal forma parte del corredor norte de Mérida: una zona que se ha consolidado por su
          conectividad, cercanía a servicios y proyección residencial.
        </p>

        <ul className="armedaContext__list">
          <li>Conexión rápida a Mérida</li>
          <li>Cercanía a servicios y puntos de interés</li>
          <li>Zona con desarrollo residencial constante</li>
          <li>Accesos prácticos hacia carretera Mérida–Progreso</li>
        </ul>

        <div className="armedaContext__chips">
          <span className="armedaContext__chip">Conectividad</span>
          <span className="armedaContext__chip">Plusvalía</span>
          <span className="armedaContext__chip">Ubicación estratégica</span>
        </div>
        
        {/* Botón movido aquí para mejor flujo visual */}
        
      </div>
    </ScrollReveal>

    <ScrollReveal duration={1.5}>
      <div className="armedaContext__right">
        <div className="armedaContext__imgBox">
          <img src={img1} alt="Ubicación Armeda" className="armedaContext__img" />
          <div className="armedaContext__imgOverlay"></div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
    </main>
  );
}