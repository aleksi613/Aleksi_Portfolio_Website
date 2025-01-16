import React from "react";
import { BallCanvas } from "./canvas/BallCanvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center 
        px-4 py-20 text-gray-200 min-h-screen
      "
    >
      <h2 className="text-5xl font-bold tracking-wide mb-4">
        Skills
      </h2>

      <p className="max-w-xl text-center text-gray-300 mb-8">
      Here are the technologies I’ve worked with, from advanced skills in backend development to foundational experience in front-end tools
      </p>

      {/* 3D Balls grid */}
      <div className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="
              w-20 h-20 sm:w-28 sm:h-28
              transition-transform 
              hover:scale-105 
            "
          >
            <BallCanvas 
              icon={technology.icon} 
              technologyName={technology.name} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");