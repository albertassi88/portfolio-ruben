import React from "react";
import photoAbout from "../images/photoAbout.jpg";
import "../styles/About.css";

function ArticleAbout() {
  return (
    <div className="container-about" id="about">
      <article className="box-about">
        <img 
          className="foto_about" 
          src={photoAbout} 
          alt="minha foto" 
        /> 
        <h3 >
          Sou natural de Volta Redonda-RJ e encantado por inovação e tecnologia, acredito 
          no trabalho de transformar o complexo em algo
          simples, impactando positivamente a vida das pessoas. <br/>
          Sou formado em Sistemas de Informação, o que me 
          levou a apaixonar por programação. <br/>
          Atualmente sou estudante de desenvolvimento de 
          software na Trybe, ao longo da formação, estudamos 
          JavaScript, HTML, CSS, React, Node, Express.js, SQL, 
          Git, entre outras linguagens e frameworks. 
        </h3>
      </article>
    </div>
  );
}

export default ArticleAbout;
