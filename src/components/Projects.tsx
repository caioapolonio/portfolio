import { motion } from "framer-motion";
import { projectData } from "../projectData";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTensorflow,
  SiFastapi,
  SiRedis,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiD3Dotjs,
  SiGraphql,
  SiAmazonwebservices,
  SiRedux,
  SiFlutter,
  SiFirebase,
  SiSqlite,
  SiAngular,
  SiNestjs,
  SiPostgresql,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si";
import type { JSX } from "react";

// Map tech names to icons
const techIcons: Record<string, JSX.Element> = {
  React: <SiReact size={16} />,
  Vite: <SiVite size={16} />,
  TailwindCSS: <SiTailwindcss size={16} />,
  TypeScript: <SiTypescript size={16} />,
  JavaScript: <SiJavascript size={16} />,
  Python: <SiPython size={16} />,
  TensorFlow: <SiTensorflow size={16} />,
  FastAPI: <SiFastapi size={16} />,
  Redis: <SiRedis size={16} />,
  "Vue.js": <SiVuedotjs size={16} />,
  "Node.js": <SiNodedotjs size={16} />,
  MongoDB: <SiMongodb size={16} />,
  Express: <SiExpress size={16} />,
  "D3.js": <SiD3Dotjs size={16} />,
  "React Native": <SiReact size={16} />,
  GraphQL: <SiGraphql size={16} />,
  "AWS IoT": <SiAmazonwebservices size={16} />,
  Redux: <SiRedux size={16} />,
  Flutter: <SiFlutter size={16} />,
  Firebase: <SiFirebase size={16} />,
  SQLite: <SiSqlite size={16} />,
  Angular: <SiAngular size={16} />,
  NestJS: <SiNestjs size={16} />,
  PostgreSQL: <SiPostgresql size={16} />,
  "Socket.io": <SiSocketdotio size={16} />,
  Docker: <SiDocker size={16} />,
};

const Projects = () => {
  return (
    <div
      className="relative min-h-screen mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center"
      id="projects"
    >
      <div id="projects-anchor" className="absolute -top-24"></div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-semibold"
      >
        My Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {projectData.map((project) => (
          <a
            href={project.link}
            target="_blank"
            key={project.id}
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800"
          >
            <img
              src={project.image}
              alt={`Preview of ${project.title}`}
              className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 hover:bg-gray-800 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-slate-400 flex-grow">
                {project.description}
              </p>

              <div className="mt-2 flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-xs px-2 py-1.5 rounded-lg flex items-center gap-2"
                  >
                    {techIcons[tech] && <span>{techIcons[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
