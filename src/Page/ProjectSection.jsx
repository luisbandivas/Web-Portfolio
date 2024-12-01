import React from "react";
import ProjectCard from "../Component/ProjectCard";
import { FaLevelDownAlt } from "react-icons/fa";

const ProjectSection = () => {
  const DummyData = [
    {
      year: "2024",
      title: "Eyomn",
      tags: ["ReactJS", "TailwindCSS", "Firebase", "NodeJS"],
    },
    {
      year: "2023",
      title: "Beesion",
      tags: ["ReactJS", "TailwindCSS", "Machine Learning"],
    },
    {
      year: "2022",
      title: "Sticky Buddy",
      tags: ["C#", "Windows Form", "Firebase"],
    },
  ];

  return (
    <div className="px-8 py-32 2xl:px-40 bg-bg-dark text-f-light flex">
      <div className="w-2/5">
        <section className="flex gap-2 items-center">
          <FaLevelDownAlt className="rotate-90  scale-y-[-1]" />
          <p>Projects</p>
        </section>
      </div>
      <div className="w-3/5">
        {DummyData.map((project) => (
          <ProjectCard
            year={project.year}
            title={project.title}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
