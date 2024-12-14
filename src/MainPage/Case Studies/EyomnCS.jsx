import React from "react";
import HorizontalLine from "../../Component/HorizontalLine";
import { FaLevelDownAlt } from "react-icons/fa";
import EyomnBig from "../../assets/Image/EyomnBig.png";
import EyomImg1 from "../../assets/Image/EyomImg1.png";

const EyomnCS = () => {
  return (
    <div className="bg-bg-dark h-full w-full font-sans">
      <div className="w-full h-[50vh] flex mb-16 px-10 mt-20">
        <section className="w-1/2 flex items-center">
          <h1 className="text-f-light text-[32px] 2xl:text-[40px] font-Raleway font-medium">
            Streamlining Patient
            <br />
            Data Management for Eye Clinics with AI-
            <br />
            Driven Automation
          </h1>
        </section>
        <section className="w-1/2 ">
          <img
            src={EyomImg1}
            alt="Img 1"
            className="object-contain w-full h-full"
          />
        </section>
      </div>
      <section className="w-full px-10 mb-16">
        <HorizontalLine />
        <article className="flex px-4 mt-2 justify-between">
          <section>
            <p className="font-medium text-f-light">Year</p>
            <p className="text-f-gray mt-4">2024</p>
          </section>
          <section>
            <p className="font-medium text-f-light">Duration</p>
            <p className="text-f-gray mt-4">2 Semester</p>
          </section>
          <section>
            <p className="font-medium text-f-light">Platform</p>
            <p className="text-f-gray mt-4">Responsive Website</p>
          </section>
          <section>
            <p className="font-medium text-f-light">Role</p>
            <p className="text-f-gray mt-4">
              Frontend Developer
              <br />
              UI / UX Designer
            </p>
          </section>
        </article>
      </section>
      <div className="w-full h-[70vh] bg-red-200 mb-16">
        <img src={EyomnBig} alt="Img 1" className="object-fill w-full h-full" />
      </div>
      <div className="px-10 pb-16">
        <HorizontalLine />
        <section className="flex py-16">
          <div className="w-2/5">
            <section className="flex gap-2 items-center">
              <FaLevelDownAlt className="rotate-90  scale-y-[-1]" />
              <p>Overview</p>
            </section>
          </div>
          <article className="w-3/5 flex flex-col gap-4">
            <div className="flex w-full">
              <section className="w-1/5">
                <p>Problem</p>
              </section>
              <section className="w-4/5 ">
                <img
                  src=""
                  alt="Prb Img"
                  className="h-[400px] bg-red-50 rounded-md"
                />
                <p>
                  Eye clinics often face inefficiencies in managing patient data
                  and treatment histories. Traditional paper records pose risks
                  of data loss, hinder quick retrieval, and compromise patient
                  privacy, while medical scribing is time-consuming and adds to
                  clinicians’ workloads.
                </p>
              </section>
            </div>
            <div className="flex w-full">
              <section className="w-1/5">
                <p>Objective</p>
              </section>
              <section className="w-4/5 ">
                <p>
                  “Design an intuitive, accessible interface for to manage
                  patient records, appointment scheduling, fast medical report,
                  and standardized medical note.”
                </p>
              </section>
            </div>
          </article>
        </section>
        <HorizontalLine />
      </div>
    </div>
  );
};

export default EyomnCS;
