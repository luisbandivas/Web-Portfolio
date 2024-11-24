import React from "react";
import HorizontalLine from "../Component/HorizontalLine";

const ProjectCard = ({ year, title, tags }) => {
  return (
    <div>
      <div className="flex w-full">
        <div className="w-1/12">
          <p>{year}</p>
        </div>
        <div className="w-11/12 h-[600px] rounded-md bg-zinc-50"></div>
      </div>
      <div className="flex w-full py-4">
        <div className="w-1/12"></div>
        <section className="flex flex-col w-full gap-4">
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
