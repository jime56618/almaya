import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import slide2 from "../assets/images/slide2.jpg";
import collage1 from "../assets/images/collage1.jpg";
import collage2 from "../assets/images/collage2.jpeg";
import collage3 from "../assets/images/collage3.jpeg";
import img1 from "../assets/images/proyecto1.png";
import img3 from "../assets/images/proyecto2.png";
import img2 from "../assets/images/proyecto3.png";
import img4 from "../assets/images/proyecto4.png";

import img5 from "../assets/images/proyecto5.jpg";
import img6 from "../assets/images/proyecto6.png";
import img7 from "../assets/images/proyecto7.png";
import img8 from "../assets/images/proyecto8.jpg";
import procesoImg from "../assets/images/nosotros.jpeg";
import whatsappImg from "../assets/images/whatsapp.png";


import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { FaUserCheck, FaRegEye, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



import ScrollReveal from "../components/ScrollReveal";
import ReviewsMarquee from "../components/ReviewsMarquee";

import "./css/Home.css";


const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 } // Tiempo entre cada paso
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { 
    height: "100%", 
    transition: { duration: 3.2, ease: "linear" } // 0.8s * 4 pasos = 3.2s
  }
};

export default function Home() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("inicio");
  const [contadoresActivos, setContadoresActivos] = useState(false);
  const [anios, setAnios] = useState(0);
  const [proyectos, setProyectos] = useState(0);
  const [clientes, setClientes] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const routes = {
  invertir: [
    "/via-serena",             // Para img1
    "/landing-centro-urbano",  // Para img2
    "/armeda",      // Para img3
    "/landing-villas-sol"      // Para img4
  ],
  vivir: [
    "/residencial-lujo",       // Para img5
    "/lofts-urbanos",          // Para img6
    "/penthouse-vista",        // Para img7
    "/villas-familiares"       // Para img8
  ]
};
   

  const [tipoRenta, setTipoRenta] = useState("");

  const [tipoProyecto, setTipoProyecto] = useState("invertir");

  const [showHintProyectos, setShowHintProyectos] = useState(false);
  const [showHintProceso, setShowHintProceso] = useState(false);


  const reviews = [
  {
    name: "Mariana López",
    text: "Excelente atención y acompañamiento. Me explicaron todo claro y sin presión.",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    text: "Muy buen seguimiento. Cumplieron tiempos y resolvieron mis dudas rápido.",
    avatar: "https://i.pravatar.cc/80?img=32",
    rating: 5,
  },
  {
    name: "Fernanda Ruiz",
    text: "Me dieron opciones reales según mi presupuesto. Todo el proceso fue fácil.",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
  }
  
];

const renderReviewCard = (item) => (
  <div className="review-card">
    <div className="review-top">
      <div className="review-avatar">
        <img src={item.avatar} alt={item.name} loading="lazy" />
      </div>
      <div className="review-meta">
        <div className="review-title">{item.name}</div>
        <div className="review-stars" aria-label={`${item.rating} estrellas`}>
          {"★".repeat(item.rating)}
        </div>
      </div>
    </div>

    <div className="review-text">{item.text}</div>
  </div>
);

 
  const [accion, setAccion] = useState(""); // invertir | rentar | comercializar | trabajar

  const heroData = {
    subtitle:
      "Te acompañamos con claridad y confianza en cada etapa de tu inversión",
    buttonText: "Agenda tu visita",
   
    targetSection: "formulario",
  };

const API_URL = import.meta.env.VITE_API_URL;

const [form, setForm] = useState({
  accion: "",
  nombre: "",
  telefono: "",
  correo: "",
  comentario: "",
  zona: "",
  presupuesto: "",
  tipoRenta: "",
  tipoPropiedad: "",
  ubicacion: "",
  experiencia: "",
  disponibilidad: "",
});

const [sending, setSending] = useState(false);
const [formMsg, setFormMsg] = useState({ type: "", text: "" });

const setField = (name, value) => {
  setForm((prev) => ({ ...prev, [name]: value }));
};

const resetExtras = (accionNueva) => {
  setForm((prev) => ({
    ...prev,
    accion: accionNueva,
    zona: "",
    presupuesto: "",
    tipoRenta: "",
    tipoPropiedad: "",
    ubicacion: "",
    experiencia: "",
    disponibilidad: "",
    comentario: "",
  }));
};


 const handleSubmit = async (e) => {
  e.preventDefault();
  setFormMsg({ type: "", text: "" });
   if (!accepted) {
    setShowError(true);
    return;
  }

  setShowError(false);
  const accionFinal = form.accion || "general";

  if (!form.nombre.trim() || !form.telefono.trim()) {
    setFormMsg({ type: "error", text: "Nombre y teléfono son obligatorios." });
    return;
  }

  const payload = {
    accion: accionFinal,
    nombre: form.nombre,
    telefono: form.telefono,
    correo: form.correo || null,
    comentario: form.comentario || null,

    zona: form.zona || null,
    presupuesto: form.presupuesto || null,
    tipoRenta: form.tipoRenta || null,
    tipoPropiedad: form.tipoPropiedad || null,
    ubicacion: form.ubicacion || null,
    experiencia: form.experiencia || null,
    disponibilidad: form.disponibilidad || null,
  };

  try {
    setSending(true);

    const res = await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg =
        json?.message ||
        (json?.errors ? Object.values(json.errors).flat().join(" ") : null) ||
        "No se pudo enviar. Intenta de nuevo.";
      setFormMsg({ type: "error", text: msg });
      return;
    }

    setFormMsg({ type: "success", text: "¡Listo! Te contactamos en breve." });
    setTimeout(() => {setFormMsg({ type: "", text: "" });}, 4000);

    setForm((prev) => ({
      ...prev,
      nombre: "",
      telefono: "",
      correo: "",
      comentario: "",
      zona: "",
      presupuesto: "",
      tipoRenta: "",
      tipoPropiedad: "",
      ubicacion: "",
      experiencia: "",
      disponibilidad: "",
    }));
  } catch (err) {
    setFormMsg({ type: "error", text: "Error de conexión con la API." });
  } finally {
    setSending(false);
  }
};

  const renderForm = () => {
  const accion = form.accion;

  const textareaPlaceholder =
    accion === "invertir"
      ? "¿Qué tipo de inversión buscas? (terreno, casa, etc.)"
      : accion === "rentar"
      ? "Cuéntanos un poco sobre la propiedad que deseas rentar"
      : accion === "comercializar"
      ? "Cuéntanos lo básico (precio, estado, urgencia, etc.)"
      : accion === "trabajar"
      ? "Cuéntanos tu perfil y disponibilidad"
      : "Cuéntanos qué buscas y te contactamos.";

  return (
    <form onSubmit={handleSubmit}>
      <div className="qb-row">
        <input
          className="qb-input form-control"
          placeholder="Nombre y apellido"
          value={form.nombre}
          onChange={(e) => setField("nombre", e.target.value)}
        />
        <input
          className="qb-input form-control"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(e) => setField("telefono", e.target.value)}
        />
      </div>

      <div className="qb-row">
        <input
          className="qb-input form-control"
          placeholder="Correo"
          value={form.correo}
          onChange={(e) => setField("correo", e.target.value)}
        />
        <select
          className="qb-input form-select"
          value={accion}
          onChange={(e) => resetExtras(e.target.value)}
        >
          <option value="">¿Qué buscas?</option>
          <option value="invertir">Invertir</option>
          <option value="rentar">Rentar</option>
          <option value="comercializar">Comercializar</option>
          <option value="trabajar">Trabajar</option>
        </select>
      </div>

      {accion === "invertir" && (
        <div className="qb-row">
          <input
            className="qb-input form-control"
            placeholder="Zona de interés"
            value={form.zona}
            onChange={(e) => setField("zona", e.target.value)}
          />
          <input
            className="qb-input form-control"
            placeholder="Presupuesto aprox."
            value={form.presupuesto}
            onChange={(e) => setField("presupuesto", e.target.value)}
          />
        </div>
      )}

      {accion === "rentar" && (
        <div className="qb-row">
          <input
            className="qb-input form-control"
            placeholder="Zona"
            value={form.zona}
            onChange={(e) => setField("zona", e.target.value)}
          />
          <select
            className="qb-input form-select"
            value={form.tipoRenta}
            onChange={(e) => setField("tipoRenta", e.target.value)}
          >
            <option value="">¿Qué vas a rentar?</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="terreno">Terreno</option>
          </select>
        </div>
      )}

      {accion === "comercializar" && (
        <div className="qb-row">
          <input
            className="qb-input form-control"
            placeholder="Tipo de propiedad"
            value={form.tipoPropiedad}
            onChange={(e) => setField("tipoPropiedad", e.target.value)}
          />
          <input
            className="qb-input form-control"
            placeholder="Ubicación"
            value={form.ubicacion}
            onChange={(e) => setField("ubicacion", e.target.value)}
          />
        </div>
      )}

      {accion === "trabajar" && (
        <div className="qb-row">
          <input
            className="qb-input form-control"
            placeholder="¿Tienes experiencia? (sí/no)"
            value={form.experiencia}
            onChange={(e) => setField("experiencia", e.target.value)}
          />
          <input
            className="qb-input form-control"
            placeholder="Disponibilidad"
            value={form.disponibilidad}
            onChange={(e) => setField("disponibilidad", e.target.value)}
          />
        </div>
      )}

      <textarea
        className="qb-textarea form-control"
        placeholder={textareaPlaceholder}
        value={form.comentario}
        onChange={(e) => setField("comentario", e.target.value)}
      />

      {formMsg.text && (
        <div
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
            fontSize: 14,
            background: formMsg.type === "success" ? "#e8fff1" : "#ffecec",
          }}
        >
          {formMsg.text}
        </div>
      )}
      
      <div className="privacy-container">
        <label className="privacy-label">
          <input
           type="checkbox"
           checked={accepted}
           onChange={(e) => {
             setAccepted(e.target.checked);
             setShowError(false);
           }}
           style={{
             marginRight: "8px",
             outline: showError ? "2px solid red" : "none"
           }}
           />
          He leído y acepto el{" "}
          <a href="/privacidad" target="_blank">
            Aviso de Privacidad
          </a>
        </label>
    
        <p className="privacy-text">
          Tus datos serán utilizados únicamente para contactarte y brindarte información.
        </p>
      </div>

      <button type="submit" disabled={sending} className="qb-submit w-100" >
      {sending ? "Enviando..." : "Enviar"}
      </button>

    </form>
  );
};


    // Copy dinámico del formulario (título + subtítulo)

      const getFormCopy = (accion) => {
        switch (accion) {
          case "rentar":
            return {
              title: (
                <>
                  <span className="form-line">
                    <span className="form-white">¿TIENES UNA PROPIEDAD </span>
                    <span className="form-white">QUE</span>
                  </span>
                  <span className="form-line">
                    <span className="form-accent">QUIERAS RENTAR?</span>
                  </span>
                </>
              ),
              sub: "Déjanos tus datos y te ayudamos a rentarla rápido, con claridad y seguridad.",
            };
      
          case "invertir":
            return {
              title: (
                <>
                  <span className="form-line">
                    <span className="form-white">¿QUIERES </span>
                    <span className="form-accent">INVERTIR</span>
                  </span>
                  <span className="form-line">
                    <span className="form-white">EN YUCATÁN CON </span>
                    <span className="form-accent">SEGURIDAD?</span>
                  </span>
                </>
              ),
              sub: "Te compartimos opciones según tu objetivo, zona y presupuesto.",
            };
      
          case "comercializar":
            return {
              title: (
                <>
                  <span className="form-line">
                    <span className="form-white">¿QUIERES </span>
                    <span className="form-accent">COMERCIALIZAR</span>
                  </span>
                  <span className="form-line">
                    <span className="form-white">TU </span>
                    <span className="form-accent">PROPIEDAD?</span>
                  </span>
                </>
              ),
              sub: "Cuéntanos lo básico y te decimos el mejor camino para moverla con estrategia.",
            };
      
          case "trabajar":
            return {
              title: (
                <>
                  <span className="form-line">
                    <span className="form-white">¿QUIERES </span>
                    <span className="form-accent">TRABAJAR</span>
                  </span>
                  <span className="form-line">
                    <span className="form-white">CON </span>
                    <span className="form-accent">NOSOTROS?</span>
                  </span>
                </>
              ),
              sub: "Déjanos tu información y cuéntanos tu experiencia y disponibilidad.",
            };
      
          default:
            return {
              title: (
                <>
                  <div className="form-header-row">
                   <span className="form-white">DESCUBRE</span>
                   
                   <span className="form-underline-path">
                     <span className="form-white"> EL CAMINO HACIA TU</span>
                   </span>
                 </div>
                  <span className="form-line">
                    <span className="form-accent">PRÓXIMO GRAN ÉXITO</span>
                  </span>
                </>
              ),
              sub: "Contáctanos y te guiamos con asesoría clara para avanzar con seguridad.",
            };
        }
      };
      
  const { title: formTitleNode, sub: formSubText } = getFormCopy(form.accion);



  const handleButtonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const handleAccionAndGoForm = (nuevaAccion) => {
    resetExtras(nuevaAccion);
    setTipoRenta("");
    setTimeout(() => handleButtonClick("formulario"), 0);
  };


  const handleHeroToForm = () => {
    resetExtras(""); // modo general
    handleButtonClick("formulario");
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const triggerHint = (setter) => {
      setter(true);
      setTimeout(() => setter(false), 2600);
    };

    const proyectosEl = document.getElementById("proyectos");
    const procesoEl = document.getElementById("proceso");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.id === "proyectos") {
            triggerHint(setShowHintProyectos);
            observer.unobserve(entry.target);
          }

          if (entry.target.id === "proceso") {
            triggerHint(setShowHintProceso);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (proyectosEl) observer.observe(proyectosEl);
    if (procesoEl) observer.observe(procesoEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  // Si la URL termina en #formulario
  if (window.location.hash === "#formulario") {
    setTimeout(() => {
      const el = document.getElementById("formulario");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500); // El delay de 500ms es para esperar a que carguen las imágenes y el mapa
  }
}, [window.location.hash]); // Se dispara cuando cambia el hash

     

  useEffect(() => {
    const sections = document.querySelectorAll(".home-section, .home-hero");

    const handleScroll = () => {
      let current = "inicio";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "inicio";
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });
      setActiveSection(current);

      const seccionNosotros = document.getElementById("nosotros");
      if (seccionNosotros && !contadoresActivos) {
        const rect = seccionNosotros.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
          setContadoresActivos(true);
          iniciarContadores();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contadoresActivos]);

  const iniciarContadores = () => {
    let contadorAnios = 0;
    const intervaloAnios = setInterval(() => {
      contadorAnios += 1;
      setAnios(contadorAnios);
      if (contadorAnios >= 6) clearInterval(intervaloAnios);
    }, 100);

   let contadorProyectos = 0;
   const intervaloProyectos = setInterval(() => {
     contadorProyectos += 1; 
     setProyectos(contadorProyectos > 7 ? 7 : contadorProyectos);
   
     if (contadorProyectos >= 7) {
       clearInterval(intervaloProyectos);
     }
   }, 100);

    let contadorClientes = 0;
   const intervaloClientes = setInterval(() => {
   contadorClientes += 30; 
   setClientes(contadorClientes > 1500 ? 1500 : contadorClientes);
   if (contadorClientes >= 1500) {
    clearInterval(intervaloClientes);
   }
   }, 30);

  };

  return (
    <>
      <Navbar activeSection={activeSection} onGoFormulario={handleHeroToForm} />

      <section id="inicio" className="home-hero">
        <div className="home-hero-container">
          <img src={slide2} className="home-hero-img" alt="Hero Almaya" />
          <div className="home-hero-content">
            <ScrollReveal>
              <h1 className="home-hero-title">
                <span className="hero-title-highlight">Desarrollos inmobiliarios</span>
                <br />
                pensados para construir tu patrimonio
              </h1>

              <p className="home-hero-subtitle">{heroData.subtitle}</p>
              <button className="home-hero-btn" onClick={handleHeroToForm}>
                {heroData.buttonText}
              </button>
            </ScrollReveal>
          </div>
          <div className="home-hero-curve"></div>
        </div>
      </section>

      {/* ---- TUS SECCIONES (sin cambios) ---- */}
      <section id="nosotros" className="home-section">

         
        <ScrollReveal>
          <div className="nosotros-container">
            <div className="about-layout">
              <div className="about-left">
                <h2 className="about-company-title">Descubre ALMAYA</h2>
                <p className="about-company-description">
                  Acompañamos a personas y familias a construir su patrimonio mediante proyectos inmobiliarios seguros, 
                  con respaldo legal y en ubicaciones estratégicas de Yucatán.

                </p>
                 <div className="about-btn-container">
                  <button
                    className="about-transparent-btn"
                    onClick={() => navigate("/nosotros")}
                  >
                    Descubre Más
                  </button>
                </div>
              </div>
              <div className="about-right">
                <div className="company-stats">
                  <div className="stat-card">
                    <div className="stat-number">{anios}+</div>
                    <div className="stat-label">Años de experiencia,</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{proyectos}+</div>
                    <div className="stat-label">Proyectos entregados</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{clientes}+</div>
                    <div className="stat-label"> Familias inversionistas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-accordion">
              <div className="accordion-images">
                <div className="accordion-item">
                  <img src={collage1} alt="P1" className="accordion-img" />
                </div>
                <div className="accordion-item">
                  <img src={collage2} alt="P2" className="accordion-img" />
                </div>
                <div className="accordion-item">
                  <img src={collage3} alt="P3" className="accordion-img" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="proyectos" className="home-section proyectos-section">
      <div className="container-proyectos">
        <div className="proyectos-grid-collage">
          
          <div className="proyectos-info-block">
            <div className="info-sticky">
              <ScrollReveal>
                <span className="info-tag">Portafolio Exclusivo</span>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="proyectos-titulo">
                  <span className="titulo-light">Conoce nuestros</span>
                  <span className="titulo-bold"> Proyectos Destacados</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <div className="proyectos-switch">
                  {/* El contenedor dinámico para mover la burbuja */}
                  <div className={`switch-pill ${tipoProyecto}`}>
                    <button
                      type="button"
                      className={`switch-option ${tipoProyecto === "invertir" ? "active" : ""}`}
                      onClick={() => setTipoProyecto("invertir")}
                    >
                      <FaMapMarkedAlt className="switch-icon" />
                      Terrenos
                    </button>

                    <button
                      type="button"
                      className={`switch-option ${tipoProyecto === "vivir" ? "active" : ""}`}
                      onClick={() => setTipoProyecto("vivir")}
                    >
                      <FaHome className="switch-icon" />
                      Casas
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="proyectos-switch-desc">
                  {tipoProyecto === "invertir"
                    ? "Proyectos estratégicos pensados para generar plusvalía y retorno."
                    : "Encuentra espacios diseñados para convertirlos en tu hogar ideal."}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                {/*<button className="proyectos-cta-btn">*/}
                
                  <span className="cta-arrow">→</span>
                  Descubre cada proyecto con solo un click
                 {/*</button>*/}
              </ScrollReveal>
            </div>
          </div>

          {/* GRID DE IMÁGENES CON LÓGICA INVERTIDA */}
          
        {/* Card 1 - Grande */}
        <div className="proyecto-card card-large">
          <Link to={tipoProyecto === "invertir" ? "/via-serena" : "/montebello"}>
            <img
              src={tipoProyecto === "invertir" ? img1 : img5}
              alt="Proyecto Principal"
              className="proyecto-img"
            />
            <div className="proyecto-overlay">
              <div className="proyecto-data">
                <h3 className="proyecto-nombre">Residencial Almaya</h3>
                <p className="proyecto-desc">Exclusividad y confort en acabados de lujo.</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Card 2 - Top Right */}
        <div className="proyecto-card card-top-right">
          <Link to={tipoProyecto === "invertir" ? "/armeda" : ""}>
            <img
              src={tipoProyecto === "invertir" ? img2 : img6}
              alt="Centro Urbano"
              className="proyecto-img"
            />
            <div className="proyecto-overlay">
              <div className="proyecto-data">
                <h3 className="proyecto-nombre">Centro Urbano</h3>
                <p className="proyecto-desc">Espacios modernos y funcionales.</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Card 3 - Vertical Right */}
        <div className="proyecto-card card-vertical-right">
          <Link to={tipoProyecto === "invertir" ? "/coralta" : ""}>
            <img
              src={tipoProyecto === "invertir" ? img3 : img7}
              alt="Torre Horizonte"
              className="proyecto-img"
            />
            <div className="proyecto-overlay">
              <div className="proyecto-data">
                <h3 className="proyecto-nombre">Torre Horizonte</h3>
                <p className="proyecto-desc">Vistas espectaculares y tecnología.</p>

          
              </div>
            </div>
          </Link>
        </div>
        
        {/* Card 4 - Wide */}
        <div className="proyecto-card card-wide">
          <Link to={tipoProyecto === "invertir" ? "/kunku" : ""}>
            <img
              src={tipoProyecto === "invertir" ? img4 : img8}
              alt="Villas"
              className="proyecto-img"
            />
            <div className="proyecto-overlay">
              <div className="proyecto-data">
                <h3 className="proyecto-nombre">
                  {tipoProyecto === "invertir" ? "Villas del Sol" : "Villas Familiares"}
                </h3>
                <p className="proyecto-desc">
                  {tipoProyecto === "invertir"
                    ? "Un refugio de paz rodeado de naturaleza."
                    : "Espacios pensados para crear recuerdos."}
                </p>
              </div>
            </div>
          </Link>
        </div>

        </div>
      </div>
    </section>

    <section id="proceso" className="home-section proceso-section">
  <div className="container proceso-container">
    <div className="proceso-grid">
      
      {/* LADO IZQUIERDO: IMAGEN */}
      <div className="proceso-left">
        <div className="proceso-image-wrap">
          <img src={procesoImg} alt="Equipo Almaya" className="proceso-image" />
        </div>
      </div>

      {/* LADO DERECHO: CONTENIDO Y TIMELINE */}
      <div className="proceso-right">
        <h2 className="proceso-title">
          <span className="proceso-title-accent">¿Cómo comprar o rentar</span>
          <span className="proceso-title-rest"> una propiedad paso a paso?</span>
        </h2>
        
        <p className="proceso-subtitle">
          <span className="proceso-text-b4">Te acompañamos desde la búsqueda hasta la firma para que </span>
          <span className="proceso-text-bc">el proceso sea simple y seguro.</span>
        </p>

        {/* CONTENEDOR DE PASOS */}
        <motion.div 
          className="proceso-features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ESTA ES LA LÍNEA QUE SE EXPANDE */}
          <motion.div 
            className="timeline-line-dynamic" 
            variants={lineVariants} 
          />

          {[
            { title: "Cuéntanos qué necesitas", desc: "Zona, presupuesto y objetivo." },
            { title: "Opciones filtradas", desc: "Solo propiedades disponibles para ti." },
            { title: "Visitas guiadas", desc: "Coordinamos recorridos y dudas." },
            { title: "Cierre con respaldo", desc: "Requisitos y firma hasta entrega." }
          ].map((step, index) => (
            <motion.div key={index} className="proceso-feature" variants={itemVariants}>
              <div className="feature-timeline-node">
                <div className="feature-icon-outer">
                  <div className="feature-icon-inner"></div>
                </div>
              </div>
              <div className="feature-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          className={`proceso-cta-btn ${showHintProceso ? "cta-hint" : ""}`}
          onClick={() => handleButtonClick("que-buscas")}
        >
          <span className="cta-arrow">→</span>
          Cuéntanos qué buscas
        </button>
      </div>
    </div>
  </div>
</section>

      {/* ========= SECCIÓN: ¿QUÉ BUSCAS? (solo selector) ========= */}
      <section id="que-buscas" className="home-section qb-section">
        <div className="qb-container">
          <ScrollReveal>
            <div className="qb-title-wrap">
              <h2 className="qb-title">
                <span className="qb-title-black">¿Qué</span>{" "}
                <span className="qb-title-yellow">buscas?</span>
              </h2>
              <div className="qb-underline" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="qb-buttons">
              <button
                className={`qb-btn ${accion === "invertir" ? "active" : ""}`}
                onClick={() => handleAccionAndGoForm("invertir")}
              >
                INVERTIR
              </button>

              <button
                className={`qb-btn ${accion === "rentar" ? "active" : ""}`}
                onClick={() => handleAccionAndGoForm("rentar")}
              >
                RENTAR
              </button>

              <button
                className={`qb-btn ${accion === "comercializar" ? "active" : ""}`}
                onClick={() => handleAccionAndGoForm("comercializar")}
              >
                COMERCIALIZAR
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="qb-hint" style={{ marginTop: "6px", textAlign: "center" }}>
              Selecciona una opción y te llevamos justo a lo que necesitas
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========= ✅ TESTIMONIOS (ABAJO DE QUE BUSCAS) ========= */}
      <section id="testimonios" className="home-section reviews-section">
        <ScrollReveal>
          <div className="reviews-title-wrap">
            <h2 className="reviews-title">
              <span className="reviews-title-accent">CONFIANZA</span>{" "}
              <span className="reviews-title-rest">Y RESULTADOS</span>
            </h2>
          </div>
        </ScrollReveal>
      
        <div className="reviews-container">
          <ScrollReveal>
            <div className="reviews-left">
               <div className="reviews-quote-icon" aria-hidden="true">
          <svg viewBox="0 0 300 180" width="140" height="110">
            <path
              d="M20 160V95c0-48 28-80 75-90l13 28c-30 10-44 30-44 60h44v67H20z"
              fill="#D9D9D9"
            />
            <path
              d="M160 160V95c0-48 28-80 75-90l13 28c-30 10-44 30-44 60h44v67h-88z"
              fill="#D9D9D9"
            />
          </svg>
        </div>

              <h3 className="reviews-question">¿QUÉ OPINAN NUESTROS CLIENTES DE NOSOTROS?</h3>
            </div>
          </ScrollReveal>
      
          <ScrollReveal>
            <div className="reviews-right">
              {/* 2 filas para que se vea más “premium” y fluido */}
              <div className="reviews-loop">
                <ReviewsMarquee
                  items={reviews}
                  speed={42}
                  direction="left"
                  gap={18}
                  pauseOnHover={true}
                  renderItem={renderReviewCard}
                />
              </div>
      
              <div className="reviews-loop reviews-loop--second">
                <ReviewsMarquee
                  items={reviews.slice().reverse()}
                  speed={34}
                  direction="right"
                  gap={18}
                  pauseOnHover={true}
                  renderItem={renderReviewCard}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ========= FORMULARIO FIJO ========= */}
      <section id="formulario" className="home-section form-section">
        <ScrollReveal>
          <>
            <div className="form-container">
              {/* IZQUIERDA: COPY + CONTACTO */}
              <div className="form-left">
              <h2 className="form-title">
                {formTitleNode}
              </h2>
              
              <p className="form-sub">
                {formSubText}
              </p>

                <div className="form-contact">
                  <div className="form-contact-item">
                    <FaPhoneAlt className="form-contact-icon" />
                    <a href="tel:9991135644" className="form-contact-link">
                      9991135644
                    </a>
                  </div>
                  
                  <div className="form-contact-item">
                    <FaEnvelope className="form-contact-icon" />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=almayadesarrollos@gmail.com"
                      className="form-contact-link"
                    >
                      almayadesarrollos@gmail.com
                    </a>
                  </div>

                  <div className="form-contact-item">
                    <FaMapMarkerAlt className="form-contact-icon" />
                    <span>C. 32 337D, Emiliano Zapata Nte</span>
                  </div>
                </div>
              </div>

              {/* DERECHA: FORM */}
              <div className="form-right">
                <div className="form-fields">{renderForm()}</div>
              </div>
            </div>

            {/* MAPA */}
            <div className="form-map-wrap">
              <div className="form-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4826556421544!2d-89.61518062496899!3d21.013365280632122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567555cd2d0e9b%3A0x6296e7b5847bd0f7!2sAlmaya%20Desarrollos!5e0!3m2!1ses-419!2smx!4v1769107962683!5m2!1ses-419!2smx"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Almaya Desarrollos - Ubicación"
                />
              </div>
            </div>
          </>
        </ScrollReveal>
      </section>

      <a
        href="https://wa.me/529991135644"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappImg} alt="WhatsApp" className="whatsapp-icon" />
      </a>

    </>

    
  );
}