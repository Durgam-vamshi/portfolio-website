import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalProjects = [
    {
      title: "E-Commerce Website",
      main: "This is an e-commerce website that replicates features similar to Amazon. Users can browse a wide range of products, add items to their cart, and securely checkout."
    },
  ];

  const companyProjects = [
    {
      title: "Corporate Dashboard",
      main: "A dashboard for corporate clients that provides analytics and insights into their performance metrics, built using React and D3.js."
    },
    {
      title: "Inventory Management System",
      main: "An inventory management system that helps businesses track stock levels, orders, and deliveries efficiently."
    }
  ];

  return (
    <div id="Projects" className="p-8 md:p-16 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Projects</h1>
      
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 text-lg font-semibold transition-all duration-200 ${activeTab === "personal" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-200"} rounded-md hover:bg-blue-700`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </button>
        <button
          className={`py-2 px-4 text-lg font-semibold transition-all duration-200 ${activeTab === "company" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-200"} rounded-md hover:bg-blue-700`}
          onClick={() => setActiveTab("company")}
        >
          Company Projects
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {activeTab === "personal" &&
          personalProjects.map((project, index) => (
            <ProjectCard key={index} title={project.title} main={project.main} />
          ))}
        {activeTab === "company" &&
          companyProjects.map((project, index) => (
            <ProjectCard key={index} title={project.title} main={project.main} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
