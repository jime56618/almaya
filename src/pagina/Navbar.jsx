import React, { useState, useEffect, useMemo } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./css/Home.css";

export default function Navbar({ onGoFormulario, activeSection }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // ✅ Si NO estás en Home, define un “active” por ruta (ajusta rutas a las tuyas)
  const activeByRoute = useMemo(() => {
    if (isHome) return null;

    if (location.pathname.includes("sobre-nosotros")) return "nosotros";
    if (location.pathname.includes("proyectos")) return "proyectos";
    // si tienes otras páginas, agrégalas aquí
    return null;
  }, [isHome, location.pathname]);

  // ✅ sección activa final (prioridad: Home scroll -> activeSection, si no: ruta)
  const currentActive = isHome ? activeSection : activeByRoute;

  const goToHash = (id) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate(`/#${id}`);
  };

  const handleInvestClick = () => {
    if (isHome && onGoFormulario) {
      onGoFormulario();
      return;
    }
    navigate("/#formulario");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // helper para clase active
  const navClass = (id) =>
    `nav-link btn btn-link nav-home-link ${currentActive === id ? "is-active" : ""}`;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top nav-home-navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      }`}
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
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
              <button className={navClass("inicio")} onClick={() => goToHash("inicio")}>
                Inicio
              </button>
            </li>

            <li className="nav-item">
              <button className={navClass("nosotros")} onClick={() => goToHash("nosotros")}>
                Nosotros
              </button>
            </li>

            <li className="nav-item">
              <button className={navClass("proyectos")} onClick={() => goToHash("proyectos")}>
                Proyectos
              </button>
            </li>

            <li className="nav-item">
              <button className={navClass("proceso")} onClick={() => goToHash("proceso")}>
                Proceso
              </button>
            </li>

            <li className="nav-item">
              <button
                className="navbar-invest-btn"
                onClick={handleInvestClick}
                style={{
                  backgroundColor: "#FFC311",
                  color: "#000000",
                  border: "none",
                  borderRadius: "40px",
                  padding: "10px 28px",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  marginLeft: "15px",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
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
