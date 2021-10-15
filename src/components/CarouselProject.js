import React, { useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import TodoContext from '../context/TodoContext';
import Loading from '../components/Loading';
import '../styles/Projects.css';

function CarouselProject() {
  const { apiCardProject, loading } = useContext(TodoContext); 

  return (
    <div className="container-project" id="projects">
      <Carousel>
        {loading ? <Loading /> 
        : apiCardProject.map(({displayName, description, githubUrl, images}, index) => {
          const image = images[0].resolutions.mobile.url;
          return (
            <div className="box-project" key={index}>
              <img src={image} alt="foto"/> 
              <div className="box-element">
                <h2>{displayName}</h2>
                <h2>{description}</h2>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <button>Repositório</button>
                </a>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}

export default CarouselProject;