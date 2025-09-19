import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience-anchor" },
    { name: "Projects", href: "#projects-anchor" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Caio Vinícius
        </a>

        <ul className="hidden md:flex gap-10">
          {menuLinks.map((link) => (
            <li
              key={link.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-100"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden z-50 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <BiX size={30} /> : <BiMenu size={28} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-[79px] left-0 right-0 bg-black/95 border-b border-gray-800 space-y-6 py-12 text-center text-lg font-medium"
            >
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
