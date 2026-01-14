import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./css/Home.css";

export default function Navbar({ activeSection = "inicio" }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleInvestClick = () => {
    const element = document.getElementById("invertir");
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si scrolleas hacia abajo, ocultar navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } 
      // Si scrolleas hacia arriba, mostrar navbar
      else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top nav-home-navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
      style={{
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="nav-home-logo" />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#renta">Renta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#invertir">Invierte</a>
            </li>
            
            <li className="nav-item">
              <button 
                className="navbar-invest-btn"
                onClick={handleInvestClick}
                style={{
                  backgroundColor: '#FFC311',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '40px',
                  padding: '10px 28px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginLeft: '15px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                INVIERTE AHORA
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}