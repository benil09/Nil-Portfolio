 
import { useParams } from "react-router-dom";
import { projects } from "../constants/index.js";

const Overview = () => {
  const { id } = useParams();
  console.log("Projects data:", projects);
  const allProjects = [
    ...(projects.featured || []),
    ...(projects.others || []),
  ];
  console.log("All projects combined:", allProjects);
  const project = allProjects.find((p) => p.id === parseInt(id));
  console.log("URL Param id:", id, "Parsed id:", parseInt(id));

  console.log("Project : ", project);

  if (!project) {
    return <div className="max-w-4xl mx-auto p-4">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="w-full h-auto overflow-hidden rounded-lg mb-6">
        <img
          src={project.image}
          alt="Project Screenshot"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
        {project.name}
      </h1>

      <div className="text-purple-100 space-y-4 mb-6">
        <p>{project.description}</p>
        <ul className="list-disc list-inside space-y-2">
          {project.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="p-2  bg-neutral-900  text-sm font-medium text-purple-600 mx-1 "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-5 py-2 cursor-pointer rounded hover:bg-gray-700 transition"
        >
          View GitHub
        </a>
        <a
          href={project.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 cursor-pointer rounded hover:bg-blue-500 transition"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default Overview;
