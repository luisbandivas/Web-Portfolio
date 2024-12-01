import React from "react";
import HorizontalLine from "../../Component/HorizontalLine";
import Rays from "../../assets/Image/Rays.svg";
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
      <div className="px-10 pb-16 text-f-light flex items-center gap-10">
        <article className="w-1/2">
          <h6>
            <i className="font-medium text-xl 2xl:text-[32px]">Problem</i>
          </h6>
          <p className="font-normal mt-2 2xl:text-[18px] leading-relaxed 2xl:font-light">
            Eye clinics often face inefficiencies in managing patient data and
            treatment histories. Traditional paper records pose risks of data
            loss, hinder quick retrieval, and compromise patient privacy, while
            medical scribing is time-consuming and adds to clinicians’
            workloads.
          </p>
        </article>
        <article className="w-1/2 text-2xl 2xl:text-[36px] font-extralight">
          <h6 className="leading-relaxed">
            “Our goal was to design an intuitive, accessible interface for to
            manage patient records, appointment scheduling, fast medical report,
            and standardized medical note.”
          </h6>
        </article>
      </div>
      <div className="px-10 pb-16">
        <HorizontalLine />
        <section className="mt-16 text-f-light w-full flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            <img src={Rays} alt="Circle img" className="h-8" />
            <h1 className="text-xl 2xl:text-[32px] font-semibold">Solution</h1>
          </div>
          <p className="font-normal mt-2 2xl:text-[18px] leading-relaxed 2xl:font-light text-center px-10 2xl:px-20">
            This project introduces a digital platform for eye clinics,
            improving data accessibility and workflow efficiency. Leveraging a
            Large Language Model (LLM) to automate medical scribing in the SOAP
            (Subjective, Objective, Assessment, Plan) format.
          </p>
          <div className="flex gap-20 mt-16">
            <div className="rounded-full border text-center w-96 h-96 flex flex-col gap-2 items-center justify-center p-4 shadow-md shadow-teal-200 bg-[#264653]">
              <h6 className="text-p-lg text-teal-400 font-medium text-wrap px-2">
                Automated Documentation
              </h6>
              <p className="text-p-sm font-normal text-wrap">
                The LLM structures patient encounter notes into the SOAP format,
                saving time and ensuring accuracy.
              </p>
            </div>
            <div className="rounded-full border text-center w-96 h-96 flex flex-col gap-2 items-center justify-center p-4 shadow-md shadow-teal-200 bg-[#264653]">
              <h6 className="text-p-lg text-teal-400 font-medium text-wrap px-2">
                Enhanced Security and Access
              </h6>
              <p className="text-p-sm font-normal text-wrap">
                Digital records reduce risks associated with paper records,
                providing secure, organized, and easily retrievable patient
                data.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EyomnCS;
