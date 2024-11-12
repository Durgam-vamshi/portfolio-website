import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png"; // Assuming the path is correct
import { IoArrowForward } from "react-icons/io5"; // Icon for the job title

const About = () => {
  return (
    <section
      id="About"
      className="bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 p-8 md:p-12 rounded-lg"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={AboutImg}
            alt="About"
            className="w-100 h-30 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Right Section: Title and Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <IoArrowForward size={30} className="text-indigo-500" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Frontend Developer
              </h3>
            </div>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              As a frontend developer, I create responsive web applications
              using HTML, CSS, and JavaScript. I work closely with designers to
              implement user-friendly interfaces and enhance user experience
              through optimized design and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
