import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menu icons
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl font-extrabold drop-shadow-md">
          AC
        </h1>
      </div>
      <div className="flex items-center gap-4 text-2xl text-white">
        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Links for larger screens */}
      <div className="hidden md:flex items-center gap-8 text-lg text-white">
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
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 md:hidden">
          <div className="flex flex-col items-center gap-4 text-lg text-white">
            <a
              href="#about"
              className="block w-full text-center py-2"
              onClick={toggleMenu}
            >
              AboutMe
            </a>
            <a
              href="#technologies"
              className="block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Technologies
            </a>
            <a
              href="#experience"
              className="block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block w-full text-center py-2"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block w-full text-center py-2"
              onClick={toggleMenu}
            >
              ContactMe
            </a>
          </div>
          <div className="flex justify-center gap-4 text-2xl text-white mt-4">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
