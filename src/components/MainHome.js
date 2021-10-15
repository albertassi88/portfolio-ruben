import React from 'react';
import {SiWhatsapp} from 'react-icons/si';
import photoHome from '../images/photoHome.jpg';
import '../styles/MainHome.css';

function MainHome() {
  return (
    <main>
      <div data-aos="fade-down" className="box-main" id="home">
        <img className="foto_home" src={photoHome} alt="minha foto"></img>
        <h2>Olá, Eu sou
          <br/><span className="home_title_color">Ruben Albertassi</span>
          <br/>Desenvolvedor Web Full Stack
        </h2>
      </div>
      <div className="box-main-button">
        <a 
          href="https://api.whatsapp.com/send?phone=5524988694508" 
          target="_blank" 
          rel="noreferrer"
        >
          <button type="button" data-aos="fade-down">
            <SiWhatsapp />
            <p>WhatsApp</p>
          </button>
        </a>
      </div>
    </main>
  );
}

export default MainHome;