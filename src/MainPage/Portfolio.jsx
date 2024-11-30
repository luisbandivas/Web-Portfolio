import React from "react";
import HeroPage from "./HeroPage";
import ProjectSection from "../Page/ProjectSection";
import AboutSection from "../Page/AboutSection";
import ContactSection from "../Page/ContactSection";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../Component/ScrollToTop";

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className="bg-bg-dark font-sans">
        <section id="herosection">
          <HeroPage />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default Portfolio;
