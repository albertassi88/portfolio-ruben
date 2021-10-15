import React from "react";
import ArticleAbout from "../components/ArticleAbout";
import TitlePages from "../components/TitlePages";

function About() {
  return (
    <section>
      <TitlePages title={"Sobre"}/>
      <ArticleAbout />
    </section>
  );
}

export default About;
