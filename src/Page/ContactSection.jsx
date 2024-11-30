import React from "react";
import { FaLevelDownAlt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";

const ContactSection = () => {
  const textToCopy = "jimboybandivas@gmail.com";

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
            <HiExternalLink />
            <a
              href="https://www.linkedin.com/in/luis-mario-bandivas-033b3929a/"
              target="_blank"
              className="hover:text-teal-300"
            >
              LinkedIn
            </a>
          </section>
          <section className="flex gap-2 items-center mb-2">
            <HiExternalLink />
            <a
              href="https://github.com/luisbandivas"
              target="_blank"
              className="hover:text-teal-300"
            >
              Github
            </a>
          </section>
          <section className="flex gap-2 items-center mb-2">
            <HiExternalLink />
            <a
              href="https://web.facebook.com/luis.bandivas"
              target="_blank"
              className="hover:text-teal-300"
            >
              Facebook
            </a>
          </section>
          <section className="flex gap-2 items-center mb-2">
            <HiExternalLink />
            <a
              href="https://www.instagram.com/luis_bndvs/"
              target="_blank"
              className="hover:text-teal-300"
            >
              Instagram
            </a>
          </section>
        </nav>
        <section>
          <h4 className="text-p-lg">I am currently looking for internship</h4>
          <article className="flex items-center gap-2">
            <a href="" className="text-h5">
              jimboybandivas@gmail.com
            </a>
            <FiCopy
              className="w-8 h-8"
              onClick={() =>
                navigator.clipboard
                  .writeText(textToCopy)
                  .then(() => alert("Text copied!"))
              }
            />
          </article>
        </section>
        <p className="text-p-sm font-light">
          This portfolio was created as part of my application for internship
          opportunities.
          <br />
          <span className="text-zinc-400">
            Loosely designed in{" "}
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Figma
            </a>{" "}
            and coded in{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Visual Studio Code
            </a>{" "}
            by yours truly. Built with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              React.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Tailwind CSS
            </a>
            , deployed with{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Vercel
            </a>
            . All text is set in the{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              className="font-medium text-zinc-300 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Inter
            </a>{" "}
            typeface.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
