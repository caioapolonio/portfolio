import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      className="min-h-screen mx-auto max-w-6xl p-6 sm:p-10 flex flex-col items-center justify-center text-white gap-10"
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-semibold text-center"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-slate-400 text-center max-w-xl text-sm sm:text-base"
      >
        Whether you have an opportunity, a project idea, or just want to say hi
        — I’d love to connect! You can reach me directly by email or through my
        social profiles below.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center"
      >
        <a
          href="mailto:caioviniciusmendesa@gmail.com"
          className="flex items-center gap-3 px-5 py-3 bg-zinc-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-800"
        >
          <BiEnvelope
            size={22}
            className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300"
          />
          <span className="text-sm sm:text-base">
            caioviniciusmendesa@gmail.com
          </span>
        </a>

        <a
          href="https://github.com/caioapolonio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-zinc-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-800"
        >
          <BiLogoGithub
            size={22}
            className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300"
          />
          <span className="text-sm sm:text-base">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/caioviniciusmendes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-zinc-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-800"
        >
          <BiLogoLinkedin
            size={22}
            className="text-blue-400 group-hover:text-blue-500 transition-colors duration-300"
          />
          <span className="text-sm sm:text-base">LinkedIn</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
