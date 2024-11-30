import React from "react";
import HeroPage from "./HeroPage";
import ProjectSection from "../Page/ProjectSection";
import AboutSection from "../Page/AboutSection";
import ContactSection from "../Page/ContactSection";

const Portfolio = () => {
  return (
    <div className="bg-bg-dark">
      <section id="herosection">
        <HeroPage />
      </section>
      <section id="projectSection">
        <ProjectSection />
      </section>
      <section id="aboutSection">
        <AboutSection />
      </section>
      <section id="contactSection">
        <ContactSection />
      </section>
    </div>
  );
};

export default Portfolio;
