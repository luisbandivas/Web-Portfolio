import { useState } from "react";
import HeroPage from "./MainPage/HeroPage";
import ProjectSection from "./Page/ProjectSection";
import AboutSection from "./Page/AboutSection";
import ContactSection from "./Page/ContactSection";

function App() {
  return (
    <div className="bg-bg-dark">
      <HeroPage />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
