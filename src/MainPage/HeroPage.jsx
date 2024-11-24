import React from "react";
import NavBar from "../Component/NavBar";
import HeroSection from "../Page/HeroSection";

const HeroPage = () => {
  return (
    <div className="h-[70vh] bg-bg-dark text-f-light">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default HeroPage;
