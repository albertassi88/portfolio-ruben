import React from 'react';
import SidebarSkills from '../components/SidebarSkills';
import TitlePages from '../components/TitlePages';
import '../styles/Skills.css';

function Skills() {
  return (
    <section>
      <TitlePages title={'Habilidades'}/>
      <article className="container_skills" id="skills">
          <div className="skills">
              {SidebarSkills.map((skill, index) => (
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
