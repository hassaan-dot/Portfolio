import React, { useEffect, useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-4 md:px-10 lg:px-20 font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <div className="w-full h-56 sm:h-64 bg-gray-800/50 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 pt-4 line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-hidden"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-white/20 bg-gray-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <h3
                id="project-modal-title"
                className="text-lg font-bold text-white sm:text-2xl"
              >
                {selectedProject.title}
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gray-800 text-2xl font-bold text-white transition-colors hover:border-purple-500 hover:bg-purple-600"
              >
                &times;
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <div className="mb-4 flex w-full items-center justify-center rounded-xl bg-gray-800/50 p-2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[50vh] w-full object-contain rounded-xl"
                />
              </div>

              <p className="mb-4 text-sm text-gray-400 md:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 pb-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#251f38] px-2 py-1 text-xs font-semibold text-purple-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
