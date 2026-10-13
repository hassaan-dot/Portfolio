import React from "react";
import { experiences } from "../../constants";

const CompanyLogo = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`max-w-full max-h-full w-auto h-auto object-contain object-center ${className}`}
  />
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-10 lg:px-20 font-sans bg-skills-gradient"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative mb-20 flex flex-col items-center sm:items-stretch sm:flex-row"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white border-4 border-[#8245ec] rounded-full z-10 flex items-center justify-center overflow-hidden p-1.5">
              <CompanyLogo src={experience.img} alt={experience.company} />
            </div>

            <div
              className={`relative w-full sm:w-1/2 ${
                index % 2 === 0 ? "sm:pl-16 sm:pr-4" : "sm:pl-4 sm:pr-16"
              } mt-16 sm:mt-0`}
              style={{
                marginLeft: index % 2 === 0 ? "auto" : "0",
                marginRight: index % 2 !== 0 ? "auto" : "0",
              }}
            >
              <div className="bg-gray-900 border border-white rounded-2xl p-6 shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center shrink-0">
                    <CompanyLogo src={experience.img} alt={experience.company} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-gray-300">{experience.company}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-sm sm:text-base">
                  {experience.desc}
                </p>

                <div className="mt-4">
                  <h5 className="text-white font-medium mb-2">Skills:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
