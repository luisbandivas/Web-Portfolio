import React from "react";
import { FaLevelDownAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="w-full h-[50vh] px-8  2xl:px-40 py-4 bg-[#303030] text-f-light flex">
      <div className="w-2/5">
        <section className="flex gap-2 items-center">
          <FaLevelDownAlt className="rotate-90  scale-y-[-1]" />
          <p>Contact</p>
        </section>
      </div>
      <div className="w-3/5 flex flex-col justify-between">
        <nav>
          <section className="flex gap-2 items-center mb-2">
            <FaLevelDownAlt />
            <p>LinkedIn</p>
          </section>
          <section className="flex gap-2 items-center mb-2">
            <FaLevelDownAlt />
            <p>Facebook</p>
          </section>
          <section className="flex gap-2 items-center mb-2">
            <FaLevelDownAlt />
            <p>Instagram</p>
          </section>
        </nav>
        <section>
          <h4 className="text-p-lg">I am currently looking for internship</h4>
          <a href="" className="text-h5">
            jimboybandivas@gmail.com
          </a>
        </section>
        <p className="text-p-sm font-light">
          This portfolio was created as part of my application for internship
          opportunities.
          <br />
          <span>
            Loosely designed in Figma, deployed with Vercel. All text is set in
            the Inter typeface.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
