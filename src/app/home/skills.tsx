'use client'
import React, { useState } from 'react'
import { MySkill } from '../utils/mySkill'
import Carousel from '../utils/Carousel';

interface Category {
  key: string,
  value: string,
}

const Skills = () => {
  const [isCategory, setCategory] = useState<string>("Tools");

  const ImageCollection: string[] = MySkill.filter(skill => skill.category === isCategory).map(skill => skill.image);

  const TabButton : Category[] = [
    {
      key: 'F',
      value: 'Framework',
    },
    {
      key: 'L',
      value: 'Language',
    },
    {
      key: 'PL',
      value: 'Programming Language',
    },
    {
      key: 'U',
      value: 'Tools',
    },
  ]

  const handleSkills = (category: string) => {
    setCategory(category);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl p-2 border-gray-600 rounded-2xl w-full text-center font-extrabold">
        Skills
      </h1>
      <div className="flex flex-row w-4/5 mt-2">
        {TabButton.map((Tab, index) => (
          <div className="w-1/4 text-center" key={index}>
            <button onClick={() => handleSkills(Tab.value)}>
              {Tab.value}
            </button>
          </div>
        ))}
      </div>

      <Carousel
        images={ImageCollection}
        imageClass="w-full h-auto"
        imageHeight={365}
        imageWidth={250}
        containerClass="relative z-0 m-8 flex flex-col items-center justify-center w-4/5 border"
        itemPerSlide={4}
      />
    </div>
  );
}

export default Skills