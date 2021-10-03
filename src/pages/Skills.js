import React from 'react';
import SidebarData from '../components/SidebarData';
import TitlePages from '../components/TitlePages';
import '../styles/Skills.css';

function Skills() {
  return (
    <section>
      <TitlePages title={'Habilidades'}/>
      <article className="container_skills" id="skills">
          <div className="skills">
              {SidebarData.map((skill, index) => (
                <div className="skill" key={index}>
                  {skill.icon}
                  <span>{skill.title}</span>
                </div>
              ))}
          </div>
      </article>      
    </section>
  );
}

export default Skills;
