import React from "react";
import {
  SiReact,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const techIcons = [
  SiReact,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
];

// Duplicate icons for infinite scroll illusion
const allIcons = [...techIcons, ...techIcons];

const TechSlider = () => {
  return (
    <section className="py-10 bg-[#0d0d0d]">
      <h2 className="text-center text-4xl text-white font-bold mb-6">
        Technologies
      </h2>
      <div className="icon-slider-wrapper">
        <div className="icon-slider-track">
          {allIcons.map((Icon, index) => (
            <div
              key={index}
              className="text-white text-5xl mx-6 hover:text-purple-400 transition-transform duration-300 transform hover:scale-110"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
