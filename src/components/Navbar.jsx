import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl font-extrabold drop-shadow-md">
          AC
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-4 text-2xl text-white">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
      </div>
      <div className="flex items-center gap-8 text-lg text-white">
        <a href="#about" className="relative group">
          <span className="font-semibold uppercase tracking-wide transition duration-300 group-hover:text-pink-500">
            AboutMe
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#technologies" className="relative group">
          <span className="font-semibold uppercase tracking-wide transition duration-300 group-hover:text-pink-500">
            Technologies
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#experience" className="relative group">
          <span className="font-semibold uppercase tracking-wide transition duration-300 group-hover:text-pink-500">
            Experience
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="relative group">
          <span className="font-semibold uppercase tracking-wide transition duration-300 group-hover:text-pink-500">
            Projects
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="relative group">
          <span className="font-semibold uppercase tracking-wide transition duration-300 group-hover:text-pink-500">
            ContactMe
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
