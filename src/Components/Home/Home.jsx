import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      {/* Left side of the Home section */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br />
        <p className="text-sm md:text-2xl tracking-tight">
          React Developer | Skilled in State Management, Hooks, and Routing
        </p>
        <br/>

        {/* Button with anchor tag to scroll to footer */}
        <a
          href="#footer" // Link to the Footer section using anchor tag
          className="mt-8 md:mt-12 text-white py-3 px-6 text-sm md:text-lg md:py-3 md:px-8 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </a>
      </div>

      {/* Right side of the Home section */}
      <div>
        <img
          className="w-48 h-48 md:w-64 md:h-64 rounded-full"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
