'use client'
import React, { useState } from 'react'
import { MyPortfolio } from '../utils/project.portfolio';
import Image from 'next/image'

const Portfolio = () => {
  const [hovered, isHovered] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl p-2 border-gray-600 rounded-2xl w-full text-center font-extrabold">
        Portfolio
      </h1>
      <div className="w-11/12 flex flex-wrap justify-center items-center gap-3 py-2">
        {MyPortfolio.map((project, index) => (
          <div
            key={index}
            className="w-1/4"
          >
            <Image
              src={hovered ? project.folder : project.folderhover}
              alt={project.name}
              width={2048}
              height={1536}
              onMouseEnter={() => isHovered(false)}
              onMouseLeave={() => isHovered(true)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio