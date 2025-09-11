import { projects } from "../constants";
import { FaGithub,FaExternalLinkAlt  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




const Divider = ({ children }) => (
  <div className="flex items-center w-full text-4xl font-semibold text-purple-200 mb-10">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="mx-4 whitespace-nowrap">{children}</span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
);

const FeaturedProject = ({
  id,
  name,
  description,
  tags,
  githubLink,
  externalLink,
  imagePosition,
  image
}) => {
  const navigate = useNavigate();
  const isLeft = imagePosition === "left";
  console.log("Image prop:", image);
  return (
    <div onClick={() => navigate(`/project/${id}`)} className={`w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-16 cursor-pointer hover:opacity-90 transition`}>
      <div className="bg-gray-400 rounded-md w-full md:w-[400px] h-[250px] flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-medium text-gray-300 mb-2">{name}</h3>
        <p className="text-purple-100 text-md leading-relaxed mb-4">
          {description}
        </p>
        <hr className="border-gray-300 mb-2" />
        <div className="flex flex-wrap text-xs text-gray-600 gap-2 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="p-2  bg-neutral-900  text-sm font-medium text-purple-600 mx-1 "
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 text-gray-500">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Link"
            className="hover:text-gray-200 transition "
          >
           <FaGithub />
          </a>
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="External Link"
            className="hover:text-gray-200 transition"
          >
           <FaExternalLinkAlt/>
          </a>
        </div>
      </div>
    </div>
  );
};

const OtherProject = ({
  id,
  name,
  description,
  tags,
  githubLink,
  externalLink,
  image
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/project/${id}`)} className="flex items-start space-x-4 mb-6 cursor-pointer hover:opacity-90 transition">
      <div className="bg-gray-400 rounded-md w-24 h-24 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-gray-300 mb-2">{name}</h4>
        <p className="text-sm text-purple-200 mb-2">{description}</p>
        <hr className="border-gray-300 mb-2" />
        <div className="flex flex-wrap text-xs text-gray-600 gap-2 mb-1">
          {tags.map((tag, i) => (
            <span className="p-2  bg-neutral-900  text-sm font-medium text-purple-600 mx-1" key={i}>{tag}</span>
          ))}
        </div>
        <div className="flex space-x-3 text-gray-700">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Link"
            className="hover:text-gray-200 transition"
          >
          <FaGithub/>
          </a>
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="External Link"
            className="transition hover:text-gray-200"
          >
           <FaExternalLinkAlt />

          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-16 py-12 max-w-7xl mx-auto space-y-16">
      <Divider> Featured Projects </Divider>

      {projects.featured.map((project) => (
        <FeaturedProject key={project.id} {...project} />
      ))}

      <Divider>Other Projects</Divider>

      <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-x-20 gap-y-8">
        {projects.others.map((project) => (
          <OtherProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
