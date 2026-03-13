import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

import { MapContainer, TileLayer, Tooltip, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  HiTrendingUp,
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiOutlineViewGrid,
} from "react-icons/hi";

import {
  HiOutlineMapPin,
  HiOutlineHomeModern,
  HiOutlineSquare3Stack3D,
  HiOutlineSparkles,
  HiOutlineTag,
  HiOutlineBolt,
  HiOutlineLink,
  HiOutlineTruck, HiOutlineCheckCircle
} from "react-icons/hi2";

// ✅ Cambia estos assets por tus imágenes reales de Entorno
import heroImg from "../assets/images/entorno-hero.png";
import img1 from "../assets/images/entorno-1.png";
import img2 from "../assets/images/alrededor.png";
import baja from "../assets/images/planta baja.png";
import alta from "../assets/images/planta alta.png";
// Si tienes video, úsalo. Si no, deja una imagen.
// import EntornoVideo from "../assets/videos/entorno-video.mp4";

import "./css/montebello.css";

export default function EntornoMontebelloLanding() {

    const [activeTab, setActiveTab] = useState(0);
  // ✅ Pega aquí el link real cuando lo tengas
  const GMAPS_URL = "https://www.google.com/maps";
  // ✅ Pega coordenadas reales de Montebello (si las tienes).
  // Placeholder: norte de Mérida (aprox)
  const position = [21.02, -89.58];

  const [isExplored, setIsExplored] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    if (videoRef.current.currentTime >= 19) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const data = [
    {
      title: "Distribución Planta Baja",
      subtitle: "Diseñada para el día a día",
      image: baja, // Reemplaza con tu import
      items: [
        { label: "Cochera techada", desc: "Espacio para 2 autos." },
        { label: "Área Social", desc: "Sala y comedor con excelente iluminación." },
        { label: "Cocina Integral", desc: "Espacio optimizado y funcional." },
        { label: "Servicios", desc: "Medio baño de visitas y Patio / Pet Garden." }
      ]
    },
    {
      title: "Distribución Planta Alta",
      subtitle: "Comodidad y privacidad",
      image: alta, // Reemplaza con tu import
      items: [
        { label: "Recámara Principal", desc: "Con baño completo privado." },
        { label: "Recámara Junior", desc: "Con baño propio y balcón frontal." },
        { label: "Área de lavado", desc: "Espacio de servicio y bodega integrada." }
      ]
    }
  ];

  const current = data[activeTab];



  const navigate = useNavigate();

  const handleGoToForm = () => {
    const el = document.getElementById("formulario");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate("/#formulario");
  };

  return (
    <main className="armedaLanding entornoLanding">
      {/* =========================
          HERO
      ========================= */}
      <section className="armedaLanding__hero entornoHero">
        <img src={heroImg} alt="Entorno Montebello" className="hero__bgImage" />

        <div className="hero__overlay">
          <div className="armedaLanding__container hero__centeredContent">
            <ScrollReveal direction="up">
              <div className="armedaLanding__brand">
                <strong className="armedaLanding__brandStrong">ENTORNO</strong>
                <span className="armedaLanding__brandLight">MONTEBELLO</span>
              </div>

              <h1 className="hero__title">
                Vivienda familiar <br /> premium en el{" "}
                <span className="armedaLanding__hl">norte de Mérida</span>
              </h1>

              <p className="hero__subtitle">
                26 residencias exclusivas con precio competitivo por m² en
                Montebello. Desde <b>$3.2 MDP</b> · <b>115 m²</b>.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* BARRA FLOTANTE */}
        <div className="hero__floatingBar">
          <div className="floatingBar__content">
            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiTrendingUp size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                <strong>Plusvalía</strong>
                <p>Zona norte probada</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineLocationMarker size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                <strong>Montebello</strong>
                <p>Todo a tu alcance</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineHome size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                <strong>26 residencias</strong>
                <p>Exclusividad real</p>
              </div>
            </div>

            <div className="bar__item">
              <div className="bar__iconCircle">
                <HiOutlineViewGrid size={22} color="#f1ece0" />
              </div>
              <div className="bar__text">
                <strong>Inversión</strong>
                <p>Renta $17–$19k</p>
              </div>
            </div>

            <button className="bar__btn" onClick={handleGoToForm}>
              Solicitar Info
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          ¿QUÉ ES?
      ========================= */}
      <section className="armedaLanding__details section--padding">
        <div className="armedaLanding__container grid--2col">
          <div className="details__images">
            <div className="img--main">
              {/* Si tienes video, descomenta y quita el img */}
              {/* <video
                ref={videoRef}
                src={EntornoVideo}
                autoPlay
                muted
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="video-as-img"
              /> */}
              <img src={img1} alt="Entorno Montebello - Render" />
            </div>
          </div>

          <div className="details__text">
            <h2 className="section__title">
              ¿Qué es <span className="armedaLanding__hl">Entorno</span>?
            </h2>
            <p className="section__p">
              Entorno Montebello es un conjunto de <b>26 residencias</b> en una de
              las zonas con mayor plusvalía de Mérida, con un enfoque en
              privacidad, orden y exclusividad. Ideal para vivir o invertir con
              alta demanda de renta.
            </p>

            <ul className="armedaLoc__list">
              <li>Desde $3.2 MDP · 115 m²</li>
              <li>2 recámaras con baño + ½ baño</li>
              <li>2 privadas con caseta de acceso</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          UBICACIÓN
      ========================= */}
      <section className="armedaLanding__location section--padding location--dark">
        <div className="armedaLanding__container grid--2col">
          <div className="location__content">
            <h2 className="location__title">
              Ubicación <span className="hl--yellow">premium</span> en{" "}
              <span className="hl--yellow">Montebello</span>
            </h2>

            <p className="location__p">
              Vive donde el valor ya está probado: Montebello en el norte de
              Mérida, rodeado de servicios, hospitales, plazas y conexión directa
              al Periférico Norte.
            </p>

            <ul className="location__list">
              <li>City Center</li>
              <li>Hospital Faro del Mayab</li>
              <li>Plazas comerciales y corporativos</li>
              <li>Colegios de alto nivel</li>
              <li>Conexión directa al Periférico Norte</li>
            </ul>

            <a
              href={GMAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="armedaLanding__btnPrimary"
            >
              Ver en Google Maps
            </a>
          </div>

          <div className="location__map">
            <div className="map__frame premium--shadow">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                className="dark-map"
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

                <CircleMarker
                  center={position}
                  pathOptions={{
                    fillColor: "#FFC311",
                    color: "#FFC311",
                    weight: 2,
                    fillOpacity: 1,
                  }}
                  radius={10}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                    Entorno Montebello
                  </Tooltip>
                </CircleMarker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FICHA TÉCNICA
      ========================= */}
      <section className="armedaSpec section--padding" id="entorno-ficha">
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
              { i: <HiOutlineMapPin />, k: "Ubicación", v: "Montebello, Mérida (zona norte)" },
              { i: <HiOutlineHomeModern />, k: "Tipo", v: "Residencias familiares premium" },
              { i: <HiOutlineTag />, k: "Unidades", v: "26 residencias (2 privadas)" },
              { i: <HiOutlineSquare3Stack3D />, k: "Construcción", v: "115 m²" },
              { i: <HiOutlineSparkles />, k: "Concepto", v: "Privacidad, orden y exclusividad" },
              { i: <HiOutlineBolt />, k: "Incluye", v: "Cocina con granito y acabados incluidos" },
              { i: <HiOutlineLink />, k: "Renta estimada", v: "$17,000 – $19,000 MXN / mes" },
              { i: <HiOutlineTruck />, k: "Entrega", v: "Verano 2027" },
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
              *Disponibilidad y condiciones pueden variar. Solicita información vigente.
            </div>
          </ScrollReveal>
        </div>
      </section>

       <section 
      className="armedaSpec section--padding" 
      style={{ backgroundColor: '#eeeeee' }} // El color que pediste
    >
      <div className="armedaLanding__container">
        <div className="armedaDistribucion__grid">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="armedaDistribucion__info">
            <ScrollReveal duration={1.15}>
              <span className="armedaSpec__kicker">{current.kicker}</span>
              <h2 className="armedaSpec__title">
                {current.title} <span className="hl--yellow">Entorno</span>
              </h2>
              
              <div className="armedaDistribucion__list">
                {current.items.map((item, i) => (
                  <div key={i} className="armedaDistribucion__listItem">
                    <HiOutlineCheckCircle className="armedaDistribucion__icon" />
                    <div>
                      <span className="armedaSpec__key">{item.label}</span>
                      <p className="armedaSpec__val">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* INDICADORES TIPO BOTÓN */}
              <div className="armedaDistribucion__nav">
                {data.map((_, index) => (
                  <button
                    key={index}
                    className={`armedaDistribucion__btn ${activeTab === index ? "is-active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {index === 0 ? "PLANTA BAJA" : "PLANTA ALTA"}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* COLUMNA DERECHA: IMAGEN */}
          <div className="armedaDistribucion__visual">
            <ScrollReveal duration={1.25} delay={0.2}>
              <div className="armedaDistribucion__imgWrapper">
                <img src={current.image} alt={current.title} className="armedaDistribucion__img" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

      {/* =========================
          CONTEXTO / PLUSVALÍA
      ========================= */}
      <section className="armedaContext section--padding" id="entorno-contexto">
        <div className="armedaLanding__container armedaContext__wrap">
          <ScrollReveal duration={1.15}>
            <div className="armedaContext__left">
              <span className="armedaContext__kicker">Zona & contexto</span>

              <h2 className="armedaContext__title">
                Montebello: norte de Mérida{" "}
                <span className="hl--line-only">
                  con <span className="hl--text-gold">valor probado</span>
                </span>
              </h2>

              <p className="armedaContext__p">
                Entorno Montebello nace en una de las zonas con mayor plusvalía de Mérida,
                combinando ubicación, diseño y precio competitivo.
              </p>

              <ul className="armedaContext__list">
                <li>Conectividad inmediata</li>
                <li>Servicios y puntos clave cerca</li>
                <li>Alta demanda de renta residencial</li>
                <li>Exclusividad por baja densidad</li>
              </ul>

              <div className="armedaContext__chips">
                <span className="armedaContext__chip">Plusvalía</span>
                <span className="armedaContext__chip">Renta</span>
                <span className="armedaContext__chip">Zona premium</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal duration={1.5}>
            <div className="armedaContext__right">
              <div className="armedaContext__imgBox">
                <img src={img2} alt="Entorno Montebello" className="armedaContext__img" />
                <div className="armedaContext__imgOverlay"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
