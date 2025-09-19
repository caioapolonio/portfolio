import { motion } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSvelte,
  SiReact,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      {
        id: 1,
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
      },
      { id: 2, name: "React", icon: <SiReact className="text-cyan-500" /> },
      { id: 3, name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { id: 4, name: "Svelte", icon: <SiSvelte className="text-orange-500" /> },
      {
        id: 5,
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        id: 6,
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
      },
      {
        id: 7,
        name: "Express.js",
        icon: <SiExpress className="text-white" />,
      },
      { id: 8, name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      {
        id: 9,
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-sky-600" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      className="min-h-screen mx-auto max-w-6xl p-6 sm:p-12 text-white flex flex-col gap-12 items-center justify-center"
      id="skills"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-white"
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col gap-6 items-center"
          >
            <h2 className="text-xl font-semibold text-slate-200 border-b border-gray-700 pb-2 w-full text-center">
              {category.category}
            </h2>
            <div className="flex flex-col gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-800"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="text-sm font-medium text-slate-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
