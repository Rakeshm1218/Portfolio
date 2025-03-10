import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex items-center flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4 mb-2 flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                width={250}
                className="mb-6 rounded "
              />
              <div>
                <a
                  className="text-purple-800  bg-white rounded-full px-8 py-2 hover:bg-purple-800 hover:text-white duration-300 ease-out"
                  href={project.demo}
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="text-purple-800  bg-transparent border rounded-full px-6 py-2 ml-2 hover:bg-purple-800 hover:text-white hover:border-purple-800 duration-300 ease-out"
                  href={project.git}
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
              <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <p
                    key={index}
                    className="mr-2 mt-2 text-sm bg-neutral-900 rounded px-2 py-1 font-medium text-purple-900"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
