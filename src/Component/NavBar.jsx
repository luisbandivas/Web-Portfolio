import React, { useState, useEffect } from "react";
import Logo from "../assets/Image/logo.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [fadesIn, setFadesIn] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFadesIn("animate-fadeIn");
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div
      className={`text-p-rg flex py-8 px-8 2xl:px-40 ${fadesIn} bg-bg-dark text-f-light`}
    >
      <section
        className="w-2/5 font-medium flex items-center gap-2 cursor-pointer"
        onClick={handleHome}
      >
        <img src={Logo} alt="My Logo" className="h-10 w-10" />
        <h1>LM BANDIVAS</h1>
      </section>
      <section className="w-3/5 flex justify-between items-center">
        <p>Under Development</p>
        <nav className="flex gap-6 font-medium">
          <button onClick={() => handleNavigation("/projects")}>Project</button>
          <button onClick={() => handleNavigation("/about")}>About</button>
          <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
