import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
  return (   
    <header>
      <nav>
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contacts">Contatos</a>
      </nav>  
    </header>
  );
}

export default NavBar;
