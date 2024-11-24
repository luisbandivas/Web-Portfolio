import React from "react";
import HeroImg from "../assets/Image/hero-img.png";
import HorizontalLine from "../Component/HorizontalLine";
import { FaArrowDown } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="h-full flex flex-col justify-between py-8 px-8 2xl:px-40">
      <section></section>
      <section className="flex">
        <div className="w-2/5"></div>
        <div className="w-3/5  text-h5">
          <article className="flex font-normal items-center gap-5">
            <img
              src={HeroImg}
              alt="hero image"
              className="w-28 h-12 rounded-sm"
            />
            <h6>Luis Bandivas is a student at Laguna </h6>
          </article>
          <h6>
            University. He’s in his senior year, majoring in CS. He is an
            aspiring UI/UX designer and developer.
          </h6>
        </div>
      </section>
      <section className="flex flex-col mb-2">
        <div className="w-full flex">
          <div className="w-2/5"></div>
          <div className="w-3/5 flex gap-2 items-center">
            <p>Scroll Down</p>
            <FaArrowDown />
          </div>
        </div>
        <HorizontalLine />
      </section>
    </div>
  );
};

export default HeroSection;
