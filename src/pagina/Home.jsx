import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
// Importa las imágenes del collage
import collage1 from "../assets/images/collage1.jpg";
import collage2 from "../assets/images/collage2.jpg";
import collage3 from "../assets/images/collage3.jpg";

import "./css/Home.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  const [contadoresActivos, setContadoresActivos] = useState(false);
  const [anios, setAnios] = useState(0);
  const [proyectos, setProyectos] = useState(0);
  const [clientes, setClientes] = useState(0);

  const slides = [slide1, slide2, slide3];
  
  const slideData = [
    {
      id: 1,
      title: "Invierte de forma inteligente",
      subtitle: "Oportunidades inmobiliarias seguras y rentables.",
      buttonText: "Contáctanos",
      targetSection: "invertir"
    },
    {
      id: 2,
      title: "Propiedades que generan valor",
      subtitle: "Proyectos diseñados para crecer contigo.",
      buttonText: "Descubre más",
      targetSection: "propiedades"
    },
    {
      id: 3,
      title: "Confianza y experiencia",
      subtitle: "Te acompañamos en cada paso de tu inversión.",
      buttonText: "Conócenos",
      targetSection: "nosotros"
    }
  ];

  // Efecto para detectar sección activa al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.home-section, .home-hero');
    const navLinks = document.querySelectorAll('.nav-home-navbar .nav-link');
    
    const handleScroll = () => {
      let current = 'inicio';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || 'inicio';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });
      
      setActiveSection(current);
      
      // Actualizar clases en los navlinks
      navLinks.forEach(link => {
        const href = link.getAttribute('href')?.replace('#', '');
        if (href === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Detectar si la sección Nosotros es visible para activar contadores
      const seccionNosotros = document.getElementById('nosotros');
      if (seccionNosotros && !contadoresActivos) {
        const rect = seccionNosotros.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible) {
          setContadoresActivos(true);
          iniciarContadores();
        }
      }
    };
    
    // Configurar Intersection Observer para mejor rendimiento
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'inicio';
          setActiveSection(sectionId);
          
          navLinks.forEach(link => {
            const href = link.getAttribute('href')?.replace('#', '');
            if (href === sectionId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inicialmente
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [contadoresActivos]);

  // Efecto para manejar indicadores del carrusel
  useEffect(() => {
    const carouselElement = document.getElementById('homeCarousel');
    
    const handleSlideEvent = () => {
      // Esperar un momento para que Bootstrap actualice las clases
      setTimeout(() => {
        const activeSlide = carouselElement.querySelector('.carousel-item.active');
        const slides = carouselElement.querySelectorAll('.carousel-item');
        
        slides.forEach((slide, index) => {
          if (slide === activeSlide) {
            setCarouselActiveIndex(index);
          }
        });
      }, 100);
    };
    
    if (carouselElement) {
      carouselElement.addEventListener('slide.bs.carousel', handleSlideEvent);
      carouselElement.addEventListener('slid.bs.carousel', handleSlideEvent);
      
      // Inicializar con el índice correcto
      const initialActive = carouselElement.querySelector('.carousel-item.active');
      const allSlides = carouselElement.querySelectorAll('.carousel-item');
      allSlides.forEach((slide, index) => {
        if (slide === initialActive) {
          setCarouselActiveIndex(index);
        }
      });
    }
    
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('slide.bs.carousel', handleSlideEvent);
        carouselElement.removeEventListener('slid.bs.carousel', handleSlideEvent);
      }
    };
  }, []);

  // Función para iniciar contadores animados
  const iniciarContadores = () => {
    // Contador para años (0 a 12)
    let contadorAnios = 0;
    const intervaloAnios = setInterval(() => {
      contadorAnios += 1;
      setAnios(contadorAnios);
      if (contadorAnios >= 12) {
        clearInterval(intervaloAnios);
      }
    }, 100);

    // Contador para proyectos (0 a 150)
    let contadorProyectos = 0;
    const intervaloProyectos = setInterval(() => {
      contadorProyectos += 3;
      setProyectos(contadorProyectos > 150 ? 150 : contadorProyectos);
      if (contadorProyectos >= 150) {
        clearInterval(intervaloProyectos);
      }
    }, 20);

    // Contador para clientes (0 a 95)
    let contadorClientes = 0;
    const intervaloClientes = setInterval(() => {
      contadorClientes += 2;
      setClientes(contadorClientes > 95 ? 95 : contadorClientes);
      if (contadorClientes >= 95) {
        clearInterval(intervaloClientes);
      }
    }, 30);
  };

  // Función para forzar actualización de indicadores
  const updateCarouselIndicators = () => {
    const indicators = document.querySelectorAll('#homeCarousel .carousel-indicators button');
    indicators.forEach((indicator, index) => {
      if (index === carouselActiveIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  };

  // Efecto para actualizar indicadores cuando cambia el índice
  useEffect(() => {
    updateCarouselIndicators();
  }, [carouselActiveIndex]);

  const handleButtonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} />

      {/* HERO / CAROUSEL */}
      <section id="inicio" className="home-hero">
        <div
          id="homeCarousel"
          className="carousel slide home-carousel"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >

          {/* INDICADORES (LINEAS) */}
          <div className="carousel-indicators">
            {slideData.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCarouselActiveIndex(index)}
              />
            ))}
          </div>

          {/* SLIDES */}
          <div className="carousel-inner">
            {slideData.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="home-carousel-overlay"></div>
                <img 
                  src={slides[index]} 
                  className="d-block w-100 home-carousel-img" 
                  alt={slide.title}
                />

                <div className="home-carousel-content">
                  <h1 className="home-carousel-title">
                    {slide.title}
                  </h1>
                  <p className="home-carousel-subtitle">
                    {slide.subtitle}
                  </p>
                  <button
                    className="home-carousel-btn"
                    onClick={() => handleButtonClick(slide.targetSection)}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="home-section">
        <div className="nosotros-container">
          
          <div className="about-layout">
            {/* Columna izquierda - About Company */}
            <div className="about-left">
              <h2 className="about-company-title">SOBRE ALMAYA</h2>
              <p className="about-company-description">
                 En Almaya desarrollamos proyectos inmobiliarios con visión estratégica,
                 combinando diseño, ubicación y rentabilidad para crear valor real.
              </p>

              <div className="about-btn-container">
                <button className="about-transparent-btn">
                  Descubre Más
                </button>
              </div>
            </div>

            {/* Columna derecha - Estadísticas */}
            <div className="about-right">
              <div className="company-stats">
                <div className="stat-card">
                  <div className="stat-number">{anios}+</div>
                  <div className="stat-label">Years of Excellence in Architecture & Design</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">{proyectos}+</div>
                  <div className="stat-label">Projects Successfully Completed</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-number">{clientes}%</div>
                  <div className="stat-label">Our Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* ACORDEÓN DE IMÁGENES - SIN TEXTOS */}
          <div className="image-accordion">
            <div className="accordion-images">
              <div className="accordion-item">
                <img src={collage1} alt="Proyecto 1" className="accordion-img" />
              </div>
              
              <div className="accordion-item">
                <img src={collage2} alt="Proyecto 2" className="accordion-img" />
              </div>
              
              <div className="accordion-item">
                <img src={collage3} alt="Proyecto 3" className="accordion-img" />
              </div>
            </div>
          </div>
          
        </div>
      </section>

       <section id="proyectos" className="home-section proyectos-section aurora-custom">
        <div className="container">
          <h2 className="proyectos-titulo">Proyectos Destacados</h2>
          <p className="proyectos-subtitulo">Contamos con una amplia cartera de propiedades seleccionadas para maximizar tu retorno de inversión.</p>
          
        </div>
      </section>

      <section id="renta" className="home-section">
        <div className="container">
          <h2>Renta</h2>
          <p className="text-center">Oportunidades de inversión diversificadas y con altos rendimientos comprobados.</p>
        </div>
      </section>

      <section id="invertir" className="home-section">
        <div className="container">
          <h2>Invierte con nosotros</h2>
          <p className="text-center">Comienza tu camino hacia la libertad financiera con nuestras asesorías personalizadas.</p>
        </div>
      </section>
    </>
  );
}