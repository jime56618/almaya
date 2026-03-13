import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logoAlmaya from '../assets/images/logo.png'; 
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="armedaFooter">
      <div className="armedaLanding__container">
        <div className="armedaFooter__mainGrid">
          
          {/* LOGO Y REDES */}
          <div className="armedaFooter__brand">
            <Link className="armedaFooter__logoBox" to="/">

              <img src={logoAlmaya} alt="Almaya Desarrollos" className="armedaFooter__img" />
            </Link>
            <div className="armedaFooter__socials">
              <a href="https://www.facebook.com/share/1QYUZ8FdMJ/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/almaya.desarrollos/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@almaya.desarrollos?_r=1&_t=ZS-93yjlcHbzAv" target="_blank" rel="noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* CORPORATIVO */}
          <div className="armedaFooter__col">
            <h4 className="armedaFooter__title">Corporativo</h4>
            <p className="armedaFooter__text">
              C. 32 337D, Emiliano Zapata Nte,<br />
              97129 Mérida, Yuc.
            </p>
          </div>

          {/* CONTACTO */}
          <div className="armedaFooter__col">
            <h4 className="armedaFooter__title">Contáctanos</h4>
            <p className="armedaFooter__text">
              <span className="armedaFooter__highlight">(999) 113 5644</span><br />
              almayadesarrollos@gmail.com
            </p>
            <p className="armedaFooter__hours">
              Horario 9:00 a 15:00
            </p>
          </div>
        </div>

        {/* LEGALES */}
        <div className="armedaFooter__bottom">
          <div className="armedaFooter__legal">
            <Link to="/privacidad">Aviso de privacidad</Link>
            <span className="sep">|</span>
            <Link to="/terminos">Términos y condiciones</Link>
            <span className="sep">|</span>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;