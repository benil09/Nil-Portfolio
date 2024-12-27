import React from "react";
import { PROJECTS } from "../constants/index.js";

function Projects() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-4"></div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 ">
              <img width={150} height={150}  className="mb-6 rounded " src={project.image} alt={project.title} />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title} </h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech,index)=>
            <span key={index} className="p-2 bg-neutral-900 text-sm font-medium text-purple-600 rounded mx-1"> {tech} </span>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
