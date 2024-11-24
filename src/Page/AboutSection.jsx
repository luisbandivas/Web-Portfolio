import React from "react";
import { FaLevelDownAlt } from "react-icons/fa";
import HorizontalLine from "../Component/HorizontalLine";
import AboutImg from "../assets/Image/about-img.png";

const AboutSection = () => {
  return (
    <div className="w-full px-8  2xl:px-40 bg-bg-dark text-f-light pb-40">
      <HorizontalLine />
      <div className="flex mt-2">
        <div className="w-2/5">
          <section className="flex gap-2 items-center mb-8">
            <FaLevelDownAlt className="rotate-90  scale-y-[-1]" />
            <p>Tools & Skills</p>
          </section>
          <article className="flex flex-col gap-1">
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Java</p>
            <p>C#</p>
            <p>Python</p>
            <p>Adobe Illustrator</p>
            <p>Figma</p>
          </article>
        </div>
        <div className="w-3/5">
          <div className="w-full flex justify-between">
            <section className="flex gap-2 items-center">
              <FaLevelDownAlt className="rotate-90  scale-y-[-1]" />
              <p>About</p>
            </section>
            <div className="p-4 bg-blue-50 rounded-full"></div>
          </div>
          <img src={AboutImg} alt="me img" className="w-1/3 rounded-md my-8" />
          <article>
            <h6 className="text-h5">
              To me, design is about solving problems,
              <br />
              while making solutions visually appealing.
            </h6>
            <p className="text-p-rg mt-3">
              Hello there! My name is Luis Mario. Throughout my college years, I
              have developed a passion for pursuing a career in user experience
              design. While I recognize that I still have skills to improve, I
              thrive on becoming better each day and staying up to date with the
              latest design trends and technology to deliver solutions that not
              only meet user objective but also leave impact to them.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
