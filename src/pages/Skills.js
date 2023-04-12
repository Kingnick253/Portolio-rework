import React from "react";


import SkillsData from "../components/SkillsData";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="bg-gradient-to-b from-FrostTwo to-FrostOne w-full h-screen">
        <div className="flex max-w-screen-lg mx-auto p-4 flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 ">
              Technologies
            </p>
            <p className="pt-2">I have experience with</p>
          </div>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-9 px-12 sm:px-0">
            {SkillsData.map(({ id, icon, style, title }) => (
              <div
                key={id}
                className={ ` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={icon} alt="" className="  object-scale-down h-20 w-20 w-20 mx-auto" />
                <p className="mt-3">{title}</p>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
