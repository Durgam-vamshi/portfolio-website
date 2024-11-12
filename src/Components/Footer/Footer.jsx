import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer" // Ensure the footer has this id so the anchor link can target it
      className="bg-[#465697] text-white p-10 md:p-12 flex flex-col md:flex-row justify-between items-center rounded-t-lg shadow-lg"
    >
      {/* Left side - Contact Header */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
        <h3 className="text-md md:text-2xl font-normal">Feel free to reach out!</h3>
      </div>

      {/* Right side - Contact Information */}
      <ul className="mt-4 md:mt-0 text-sm md:text-lg flex flex-col md:flex-row md:gap-8 space-y-4 md:space-y-0 items-center">
        {/* Email */}
        <li className="flex items-center gap-3 transition-transform duration-300 transform hover:scale-105">
          <MdOutlineEmail size={24} />
          <span>durgamvamshicareer@gmail.com</span>
        </li>

        {/* LinkedIn */}
        <li className="flex items-center gap-3 transition-transform duration-300 transform hover:scale-105">
          <CiLinkedin size={24} />
          <span>linkedin.com/in/vamshidurgam</span>
        </li>

        {/* GitHub */}
        <li className="flex items-center gap-3 transition-transform duration-300 transform hover:scale-105">
          <FaGithub size={24} />
          <span>github.com/durgam-vamshi</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
