import Link from "next/link";
import React from "react";
import Project from "./project.resume";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Career from "./career.resume";
import Education from "./education.resume";
import Skill from "./skills.resume";
import Archive from "./archive.resume";

const resume = () => {
  return (
    <div className="bg-white rounded-3xl mx-10 p-5 font-Orbitron text-black ">
      <div id={"name-title"}>
        <p className="text-4xl font-extrabold">Irwanto Danang Bahtiar</p>
        <p className="text-lg text-yellow-500 font-bold">
          Aspiring Web Developer
        </p>
      </div>
      <div
        id={"contact"}
        className="flex flex-row flex-wrap basis-1/3 justify-between mr-32 mt-4 font-semibold"
      >
        <div className="flex items-center justify-center">
          <IoMdMail className="mr-1" /> <p>dankoyuki398@gmail.com</p>
        </div>
        <div className="flex items-center justify-center">
          <FaPhoneFlip className="mr-1" /> <p>+62 821-1642-4576</p>
        </div>
        <div className="flex items-center justify-center">
          <FaLocationDot className="mr-1" /> <p>Majalengka, West Java</p>
        </div>
      </div>
      <div
        id={"contact"}
        className="flex flex-row flex-wrap basis-1/3 justify-between mr-32 mt-2 font-semibold"
      >
        <div className="flex items-center justify-center">
          <FaLinkedin className="mr-1" />
          <Link
            className="text-blue-400"
            href={"https://www.linkedin.com/in/dan-koyuki"}
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className=" border-black border-2 mb-1 mt-4"></div>
      <div className=" border-black border-2 mt-1"></div>

      <div id={"detail"} className="flex flex-row">
        <div id={"workexp-project"} className="w-4/6 pr-1">
          <div id="workexp"></div>
          {/* if no workexp */}
          <div id="archivement-certificate">
            <Archive />
          </div>
          <div id="project">
            <Project />
          </div>
        </div>
        <div id="careerobj-edu-skill" className="w-2/6 ml-1">
          <div id="careerobj">
            <Career />
          </div>
          <div id="edu">
            <Education />
          </div>
          <div id="skill">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
