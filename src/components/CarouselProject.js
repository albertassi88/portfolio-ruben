import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../components/Card';
import '../styles/Projects.css';

function CarouselProject() {
    return (
        <div className="container-project" id="projects">
        <Carousel>
          {Card.map((element, index) => (
            <div className="box-project" key={index}>
              <img src={element.image} alt="foto"/> 
              <div className="box-element">
                <h2>{element.title}</h2>
                <h2>{element.description}</h2>
                <a href={element.site} target="_blank" rel="noreferrer">
                  <button>Repositório</button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
}

export default CarouselProject;