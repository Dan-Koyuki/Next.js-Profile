import React from "react";
import { MyProject } from "../utils/project.resume";
import { FaCalendarDays } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="font-Nunito">
      <h1 className="border-b-4 border-black text-3xl pb-1 mt-5 mb-2 font-Orbitron font-bold">
        Projects
      </h1>
      {MyProject.map((project, index) => (
        <div key={index} className="mt-2">
          <p className="text-xl font-semibold font-Exo">{project.name}</p>
          <p className="text-lg italic font-semibold text-yellow-500">{project.role}</p>
          <div className="flex flex-row items-center">
            <FaCalendarDays /> <p>{project.duration} /</p>
            <p className="font-semibold ml-1">{project.status}</p>
          </div>
          <p className="text-lg">{project.technologies.join(" - ")}</p>
          <ul className='list-disc ml-5'>
          {project.contribute.map((c, index) => (  
            <li key={index}>{c}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Project;
