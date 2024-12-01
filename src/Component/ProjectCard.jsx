import React from "react";
import HorizontalLine from "../Component/HorizontalLine";
import P1 from "../assets/Image/P1.png";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ year, title, tags }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (title === "Eyomn") {
      navigate("/eyomn");
    }
  };

  return (
    <div>
      <div className="flex w-full">
        <div className="w-1/12 2xl:w-2/12">
          <p>{year}</p>
        </div>
        {title === "Eyomn" ? (
          <div
            className="relative w-11/12 2xl:w-10/12 h-[560px] 2xl:h-[600px] rounded-sm bg-bg-dark overflow-hidden cursor-pointer group"
            onClick={handleNavigation}
          >
            <img
              src={P1}
              alt={title}
              className="transition-transform duration-200 ease-in-out transform group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-11/12 2xl:w-10/12 h-[560px] 2xl:h-[600px] rounded-sm bg-zinc-50"></div>
        )}
      </div>
      <div className="flex w-full py-4 mb-4">
        <div className="w-1/12 2xl:w-2/12"></div>
        <section className="flex flex-col w-11/12 2xl:w-10/12 gap-4">
          <div className="flex justify-between">
            <p>{title}</p>
            <section className="flex gap-4">
              {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </section>
          </div>
          <HorizontalLine />
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
