import React, { useEffect } from "react";
import HeroSection from "../Page/HeroSection";
import ProjectSection from "../Page/ProjectSection";
import AboutSection from "../Page/AboutSection";
import ContactSection from "../Page/ContactSection";
import ScrollToTop from "../Component/ScrollToTop";

const Portfolio = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <div className="bg-bg-dark font-sans">
      <section id="herosection">
        <HeroSection />
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
  );
};

export default Portfolio;
