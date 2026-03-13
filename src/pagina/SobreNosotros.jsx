import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import ScrollReveal from "../components/ScrollReveal"; // ✅ AJUSTA ESTA RUTA si está en otro lugar
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import heroImg from "../assets/images/almaya desarrollos.jpeg";

import fundador1 from "../assets/images/andres pedrero.png";
import fundador2 from "../assets/images/irvyng villagomez.png";
import comercial from "../assets/images/yenni aquino.jpg";
import comercial2 from "../assets/images/edgar ramirez.jpg";
import alizanzas from "../assets/images/citlali sanchez.jpg";
import admin from "../assets/images/yarelly chab.jpg";
import marketing from "../assets/images/julio perez.jpg";
import finanzas from "../assets/images/esteban santes.jpg";

import proy1 from "../assets/images/via.png";
import proy2 from "../assets/images/kunku.png";
import proy3 from "../assets/images/armeda.png";

import "./css/sobrenosotros.css";

import { BiShieldQuarter, BiBulb, BiTrendingUp} from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";

const Nosotros = () => {
  const reels = useMemo(
    () => [
      { id: "almaya-1", code: "DRnAM6Tibos" },
      { id: "almaya-2", code: "DSnlC3dgVcc" },
      { id: "almaya-3", code: "DTgPPbJgUGJ" },
    ],
    []
  );

 const equipo = [
    { id: 1, nombre: "ANDRÉS PEDRERO", puesto: "FUNDADOR", img: fundador1 },
    { id: 2, nombre: "YRVING VILLAGÓMEZ", puesto: "FUNDADOR", img: fundador2 },
    { id: 3, nombre: "JENNY AQUINO", puesto: "GERENTE COMERCIAL", img: comercial },
    { id: 4, nombre: "EDGAR RAMIREZ", puesto: "GERENTE COMERCIAL", img: comercial2 },
    { id: 5, nombre: "YOLOXITL SANCHEZ", puesto: "GERENTE DE ALIANZAS COMERCIALES", img: alizanzas },
    { id: 6, nombre: "YARELLY CHAB", puesto: "GERENTE ADMINISTRATIVO", img: admin },
    { id: 7, nombre: "JULIO PÉREZ", puesto: "GERENTE DE MARKETING", img: marketing },
    { id: 8, nombre: "ESTEBAN SANTES", puesto: "GERENTE DE FINANZAS", img: finanzas },
  ];

  useEffect(() => {
    // Carga el script de Instagram una sola vez
    if (!document.getElementById("ig-embed-script")) {
      const s = document.createElement("script");
      s.id = "ig-embed-script";
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
      s.onload = () => {
        if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
      };
    } else {
      // Reprocesa por si React renderiza después
      if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    }
  }, [reels]);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="sobrenosotros-hero container-fluid"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="sobrenosotros-hero-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 sobrenosotros-hero-content">
              <ScrollReveal>
                <h1 className="sobrenosotros-hero-title">
                  SOMOS <span>ALMAYA</span>
                </h1>

                <p className="sobrenosotros-hero-text">
                  Un equipo preparado para acompañarte a construir tu patrimonio con claridad y confianza.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="sobrenosotros-historia container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <ScrollReveal>
              <h2 className="sobrenosotros-section-title">
                <span className="sobrenosotros-title-normal">NUESTRA</span>{" "}
                <span className="sobrenosotros-title-highlight">HISTORIA</span>
              </h2>

              <p className="sobrenosotros-text sobrenosotros-historia-text">
                Nacimos para transformar la experiencia inmobiliaria, haciendo cada proceso más claro,
                humano y confiable. Acompañamos con cercanía y transparencia cada decisión, 
                desde el inicio hasta la consolidación del patrimonio.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <ScrollReveal>
              <div className="sobrenosotros-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/ck-Nnlg78rM?si=Oyy-MTReBtw4WFiZ"
                  title="Video institucional"
                  allowFullScreen
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
             {/* MISIÓN, VISIÓN & VALORES */}
      <section className="sobrenosotros-valores">
        <div className="container">
          <ScrollReveal>
            <div className="sobrenosotros-valores-header text-center">
              <h2 className="sobrenosotros-valores-title">
                <span className="sobrenosotros-title-light">NUESTRA</span>{" "}
                <span className="sobrenosotros-title-gold">MISIÓN & VISIÓN</span>
              </h2>
              <div className="sobrenosotros-divider"></div>
            </div>
          </ScrollReveal>
      
          {/* FILA DE MISIÓN Y VISIÓN JUNTAS */}
          <div className="row g-4 mb-5 text-center justify-content-center align-items-start"> {/* Agregué align-items-center */}
            <div className="col-md-6 col-lg-5 sobrenosotros-mision"> {/* Agregué esta clase */}
              <ScrollReveal>
                <h5 className="sobrenosotros-subtitle">MISIÓN</h5>
                <p className="sobrenosotros-text-light">
                  Acompañamos a las personas a construir y consolidar su patrimonio mediante proyectos inmobiliarios seguros y confiables.
                  A través de relaciones de largo plazo basadas en confianza y transparencia,
                  ofrecemos claridad y acompañamiento constante antes, durante y después de cada etapa.
                </p>
              </ScrollReveal>
            </div>
            <div className="col-md-6 col-lg-5">
              <ScrollReveal>
                <h5 className="sobrenosotros-subtitle">VISIÓN</h5>
                <p className="sobrenosotros-text-light">
                  Ser una desarrolladora referente en México, transformando la forma en que las personas construyen su patrimonio.
                  Con un enfoque humano y de largo plazo, buscamos generar estabilidad, crecimiento y confianza, construyendo un legado basado en la integridad, el compromiso y las relaciones duraderas.
                </p>
              </ScrollReveal>
            </div>
          </div>
      
          {/* FILA DE LOS 4 VALORES JUNTOS */}
          <div className="row g-3 text-center">
            <div className="col-6 col-lg-3">
              <ScrollReveal>
                <div className="sobrenosotros-icon-card">
                  <BiShieldQuarter className="sobrenosotros-icon" />
                  <h6>TRANSPARENCIA</h6>
                  <p>Claridad total en cada proceso.</p>
                </div>
              </ScrollReveal>
            </div>
      
            <div className="col-6 col-lg-3">
              <ScrollReveal>
                <div className="sobrenosotros-icon-card">
                  <BiBulb className="sobrenosotros-icon" />
                  <h6>ACOMPAÑAMIENTO</h6>
                  <p>Cercanía real en cada decisión.</p>
                </div>
              </ScrollReveal>
            </div>
      
            <div className="col-6 col-lg-3">
              <ScrollReveal>
                <div className="sobrenosotros-icon-card">
                  <FaHandshake className="sobrenosotros-icon" />
                  <h6>RELACIÓN LARGO PLAZO</h6>
                  <p>Construcción de patrimonio real.</p>
                </div>
              </ScrollReveal>
            </div>
      
            <div className="col-6 col-lg-3">
              <ScrollReveal>
                <div className="sobrenosotros-icon-card">
                  <BiTrendingUp className="sobrenosotros-icon" />
                  <h6>CRECIMIENTO</h6>
                  <p>Decisiones que generan valor.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="equipo-slider-section">
      <div className="container">
        <div className="slider-layout">
          
          {/* Columna Izquierda: Texto estático como en tu ejemplo */}
          <div className="slider-info">
            <h2 className="slider-title">CONOCE A</h2>
            <h2 className="slider-title-highlight">NUESTRO EQUIPO</h2>
            <p className="slider-description">
              Nuestro equipo de expertos está listo para impulsarte al siguiente nivel. 
              Desliza para conocer a los líderes de cada área.
            </p>
            
          </div>

          {/* Columna Derecha: El Carrousel */}
          <div className="slider-content">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.nav-next',
                prevEl: '.nav-prev',
              }}
              pagination={{
                el: '.custom-pagination',
                clickable: true,
              }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 2.5 }
              }}
              className="mySwiper"
            >
              {equipo.map((miembro) => (
                <SwiperSlide key={miembro.id}>
                  <div className="team-card-v2">
                    <img src={miembro.img} alt={miembro.nombre} />
                    <div className="team-card-footer">
                      <h4>{miembro.nombre}</h4>
                      <span>{miembro.puesto}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controles de navegación debajo del slider */}
            <div className="slider-controls">
              <button className="nav-prev">←</button>
              <div className="custom-pagination"></div>
              <button className="nav-next">→</button>
            </div>
          </div>

        </div>
      </div>
    </section>


      {/* EXPERIENCIAS */}
      <section className="sobrenosotros-experiencias">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-4">
              <h2 className="sobrenosotros-section-title section-title-dark">
                <span className="sobrenosotros-title-normal title-dark">
                  EXPERIENCIAS
                </span>{" "}
                <span className="sobrenosotros-title-highlight title-gold-dark">
                  ALMAYA
                </span>
              </h2>

              <p className="sobrenosotros-experiencias-desc">
                Reels reales de clientes contando cómo vivieron su proceso de
                compra con Almaya.
              </p>
            </div>
          </ScrollReveal>

          <div className="row g-3 justify-content-center">
            {reels.map((reel) => (
              <div key={reel.id} className="col-12 col-md-6 col-lg-4">
                <ScrollReveal>
                  <div className="ig-reel-card">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={`https://www.instagram.com/reel/${reel.code}/`}
                      data-instgrm-version="14"
                      style={{
                        background: "#0d0d0d",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        borderRadius: "14px",
                        overflow: "hidden",
                      }}
                    ></blockquote>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="sobrenosotros-proyectos-wide">
        <div className="container-fluid">
          <div className="proyectos-wide-inner">
            <ScrollReveal>
              <div className="mb-4">
                <h2 className="proyectos-wide-title">
                  <span className="proyectos-wide-title-dark">CONOCE ALGUNOS</span>{" "}
                  <span className="proyectos-wide-title-gold">
                    DE NUESTROS PROYECTOS
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <ScrollReveal>
                  <div className="proyectos-wide-card">
                    <a href="/proyectos/via-serena" className="proyectos-wide-imageLink">
                      <div className="proyectos-wide-imgWrap">
                        <img src={proy1} alt="Vía Serena" loading="lazy" />
                        <div className="proyectos-wide-overlay">
                     
                        </div>
                      </div>
                    </a>

                    <div className="proyectos-wide-actions">
                       <Link className="proyectos-wide-btn" to="/via-serena">
                         Ver proyecto
                       </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <ScrollReveal>
                  <div className="proyectos-wide-card">
                    <a href="/proyectos/kunku" className="proyectos-wide-imageLink">
                      <div className="proyectos-wide-imgWrap">
                        <img src={proy2} alt="Kunkú" loading="lazy" />
                        <div className="proyectos-wide-overlay">
                         
                        </div>
                      </div>
                    </a>

                    <div className="proyectos-wide-actions">
                      <Link className="proyectos-wide-btn" to="/kunku">
                        Ver proyecto
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <ScrollReveal>
                  <div className="proyectos-wide-card">
                    <a href="/proyectos/coralta" className="proyectos-wide-imageLink">
                      <div className="proyectos-wide-imgWrap">
                        <img src={proy3} alt="Armeda" loading="lazy" />
                        <div className="proyectos-wide-overlay">
                          
                        </div>
                      </div>
                    </a>

                    <div className="proyectos-wide-actions">
                      <Link className="proyectos-wide-btn" to="/armeda">
                        Ver proyecto
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
