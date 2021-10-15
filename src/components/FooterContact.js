import React from "react";
import * as SiIcons from "react-icons/si";
import "../styles/FooterContact.css";

function FooterContact() {
  return (
    <div className="container-footer">        
      <nav className="nav-footer">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="#contacts">Contatos</a>
      </nav>
      <div className="box-follow">
        <h2>Conecte-se comigo</h2>
        <a 
          href="https://github.com/albertassi88" 
          target="_blank" 
          rel="noreferrer"    
        >
          <SiIcons.SiGithub />            
        </a>
        <a 
          href="https://www.linkedin.com/in/ruben-albertassi/" 
          target="_blank" 
          rel="noreferrer"
        >
          <SiIcons.SiLinkedin />            
        </a>
      </div>
      <p className="by-footer">Copyright ©2021 | By Ruben Albertassi</p>
    </div>  
  );
}

export default FooterContact;
