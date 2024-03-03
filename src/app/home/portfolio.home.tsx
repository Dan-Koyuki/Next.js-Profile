"use client";
import React, { useState } from "react";
import { MyPortfolio, PortfolioModel } from "../utils/project.portfolio";
import Image from "next/image";
import ModalPortfolio from "../utils/portfolio.modal";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [details, isDetails] = useState(false);
  const [selectedProject, setProject] = useState<PortfolioModel>(
    MyPortfolio[0]
  );

  const openDetails = (project: PortfolioModel) => {
    isDetails(true);
    setProject(project);
  };

  const closeDetails = () => {
    isDetails(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl p-2 border-gray-600 rounded-2xl w-full text-center font-extrabold">
        Portfolio
      </h1>
      <div className="flex w-11/12 flex-wrap justify-center items-center gap-3 py-2">
        {MyPortfolio.map((project, index) => (
          <div key={index} className="md:w-1/5 w-1/3">
            <Image
              src={
                hoveredIndex === index ? project.folderhover : project.folder
              }
              alt={project.name}
              width={2048}
              height={1536}
              onClick={() => openDetails(project)}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            />
          </div>
        ))}
      </div>
      <ModalPortfolio
        isOpen={details}
        isClose={closeDetails}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;
