import { motion } from "framer-motion";
import type { JSX } from "react";
import { MdWork, MdSchool } from "react-icons/md";
import {
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className=" text-sm" />,
  "Next.js": <SiNextdotjs className="text-sm" />,
  Svelte: <SiSvelte className="text-sm" />,
  TypeScript: <SiTypescript className=" text-sm" />,
  JavaScript: <SiJavascript className=" text-sm" />,
  HTML: <SiHtml5 className=" text-sm" />,
  CSS: <SiCss3 className=" text-sm" />,
  Node: <SiJavascript className=" text-sm" />,
};

const workHistory = [
  {
    role: "Frontend Developer",
    company: "Klever – Crypto Wallet & Ecosystem",
    period: "Jun 2024 — Present",
    tech: ["React", "Next.js", "Svelte", "TypeScript", "JavaScript"],
    details: [
      "Contributed to the development of a non-custodial crypto wallet as a Chrome extension.",
      "Improved user experience and integrated Web3 technologies across multiple blockchains.",
      "Built features for Buy Crypto, KleverScan (blockchain explorer), and Payments (Crypto to Pix).",
    ],
  },
  {
    role: "Web Developer - Internship",
    company: "NYX – Network for Young Xplorer",
    period: "Feb 2024 — Jul 2024",
    tech: ["HTML", "CSS", "JavaScript"],
    details: [
      "Developed and updated website features.",
      "Collaborated in weekly team meetings and delivered improvements based on feedback.",
    ],
  },
  {
    role: "Developer - Internship",
    company: "STB Tecnologias",
    period: "Jan 2023 — May 2023",
    tech: ["JavaScript"],
    details: [
      "Enhanced a camera monitoring system with new features.",
      "Implemented automated screenshot capture and Google Drive integration.",
    ],
  },
];

const educationHistory = [
  {
    degree: "Software Analysis and Development",
    school: "UNIFOR",
    period: "Aug 2022 — Dec 2024",
    location: "Fortaleza",
  },
  {
    degree: "Full Stack Developer",
    school: "Digital College",
    period: "Apr 2022 — Mar 2023",
    location: "Fortaleza",
    details: [
      "One-year program covering frontend, backend, and DevOps practices.",
      "Hands-on experience with ReactJS, Node.js, Express.js, and databases.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className="mx-auto max-w-6xl p-6 sm:p-12 text-white flex flex-col gap-16 relative"
      id="experience"
    >
      <div id="experience-anchor" className="absolute -top-24"></div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-semibold text-white text-center"
      >
        Experience & Education
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <MdWork className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-semibold">Work History</h2>
          </div>

          {workHistory.map((job, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-800"
            >
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <p className="text-slate-300">
                {job.company} • <span className="italic">{job.period}</span>
              </p>

              {job.tech && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white text-xs px-2 py-1.5 rounded-lg flex items-center gap-2"
                    >
                      {techIcons[t]} {t}
                    </span>
                  ))}
                </div>
              )}

              <ul className="list-disc list-inside text-slate-400 mt-3 space-y-1 text-sm">
                {job.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 mb-4">
            <MdSchool className="text-3xl text-green-500" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>

          {educationHistory.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-800"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-slate-300">
                {edu.school} • <span className="italic">{edu.period}</span>
              </p>
              <p className="text-slate-400 text-sm">{edu.location}</p>

              {edu.details && (
                <ul className="list-disc list-inside text-slate-400 mt-3 space-y-1 text-sm">
                  {edu.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
