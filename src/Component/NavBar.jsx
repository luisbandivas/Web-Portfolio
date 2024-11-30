import React, { useState, useEffect } from "react";
import Logo from "../assets/Image/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [fadesIn, setFadesIn] = useState("");

  useEffect(() => {
    setFadesIn("animate-fadeIn");
  }, []);

  const handleScroll = (target) => {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`text-p-rg flex py-8 px-8 2xl:px-40 ${fadesIn}`}>
      <section
        className="w-2/5 font-medium flex items-center gap-2 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("herosection");
        }}
      >
        <img src={Logo} alt="My Logo" className="h-10 w-10" />
        <h1>LM BANDIVAS</h1>
      </section>
      <section className="w-3/5 flex justify-between">
        <p>Under Development</p>
        <nav className="flex gap-6 font-medium">
          <Link
            to="projects"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Project
          </Link>
          <Link
            to="about"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </Link>
          <Link
            to="contact"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
