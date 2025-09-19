import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import image from "/image.jpeg";

const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-20 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-10 md:gap-14 lg:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-4 max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-xs md:text-sm text-white">
            <span className="relative flex h-3 w-3 ">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for hire
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
            Caio Vinícius
          </h1>
          <h3 className="text-lg md:text-xl lg:text-2xl font-light bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
            Web Developer
          </h3>

          <p className="text-sm md:text-base text-slate-400">
            I’m a{" "}
            <span className="text-white font-medium">Frontend Developer</span>{" "}
            with hands-on experience building{" "}
            <span className="text-white font-medium">
              scalable web applications
            </span>
            , browser extensions, and{" "}
            <span className="text-white font-medium">blockchain solutions</span>
            . Skilled in modern frameworks and libraries such as
            <span className="text-white font-medium"> React</span>,
            <span className="text-white font-medium"> Next.js</span>,
            <span className="text-white font-medium"> Svelte</span>, and
            <span className="text-white font-medium"> TypeScript</span>, I enjoy
            creating{" "}
            <span className="text-white font-medium">
              user-focused features
            </span>{" "}
            and improving overall{" "}
            <span className="text-white font-medium">UX</span>.
          </p>

          <p className="text-sm md:text-base text-slate-400">
            My background includes contributions to
            <span className="text-white font-medium"> crypto wallets</span>,
            <span className="text-white font-medium">
              {" "}
              blockchain explorers
            </span>
            , and
            <span className="text-white font-medium"> payment solutions</span>,
            as well as website development and
            <span className="text-white font-medium">
              {" "}
              system automation projects
            </span>
            . Recently, I completed a degree in
            <span className="text-white font-medium">
              {" "}
              Software Analysis and Development{" "}
            </span>
            at UNIFOR (2022–2024).
          </p>

          <div className="flex gap-5 mt-4">
            <a
              href="https://github.com/caioapolonio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub
                size={30}
                className="text-white cursor-pointer hover:scale-125 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/caioviniciusmendes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin
                size={30}
                className="text-white cursor-pointer hover:scale-125 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </motion.div>

        <img
          src={image}
          alt="Caio Vinicius"
          className="w-40 sm:w-52 md:w-64 lg:w-72 rounded-full hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500"
        />
      </motion.div>
    </div>
  );
};

export default About;
