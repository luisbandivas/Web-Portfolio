import React, { useState, useEffect } from "react";
import HeroImg from "../assets/Image/hero-img.png";
import HorizontalLine from "../Component/HorizontalLine";
import { FaArrowDown } from "react-icons/fa";
import Rays from "../assets/Image/Rays.svg";

const HeroSection = () => {
  const [textAnimationL, setTextAnimationL] = useState("animate-slideInL");
  const [textAnimationR, setTextAnimationR] = useState("animate-slideInR");
  const scrollThreshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setTextAnimationL("animate-slideOutL");
        setTextAnimationR("animate-slideOutR");
      } else {
        setTextAnimationL("animate-slideInL");
        setTextAnimationR("animate-slideInR");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between py-0 px-8 2xl:px-40  text-f-light h-[60vh]">
      <header></header>
      <section className="flex">
        <div className="w-2/5"></div>
        <div className="w-3/5 text-h5">
          <article
            className={`flex font-normal items-center gap-5 ${textAnimationL}`}
          >
            <img
              src={HeroImg}
              alt="Hero image of a student"
              className="w-28 h-12 rounded-sm"
            />
            <h6>Luis Bandivas is a student at Laguna</h6>
          </article>
          <p className={textAnimationR}>
            University. He’s in his senior year, majoring in CS. He is an
            aspiring UI/UX designer and developer.
          </p>
        </div>
      </section>
      <footer className="flex flex-col mb-2">
        <div className="w-full flex">
          <div className="w-2/5">
            <img
              src={Rays}
              alt="Decorative rays graphic"
              className="w-8 h-8 mb-2 hover:animate-spin"
            />
          </div>
          <div className="w-3/5 flex gap-2 items-center">
            <p>Scroll Down</p>
            <FaArrowDown className="animate-bounce" />
          </div>
        </div>
        <HorizontalLine />
      </footer>
    </div>
  );
};

export default HeroSection;
