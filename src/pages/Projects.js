import React from "react";
import CarouselProject from "../components/CarouselProject";
import TitlePages from "../components/TitlePages";

function Projects() {
  return (
    <section>
      <TitlePages title={"Projetos"}/>
      <CarouselProject />
    </section>
  );
}

export default Projects;