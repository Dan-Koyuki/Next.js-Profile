'use client'
import React, { useState } from 'react'
import { MySkill } from '../utils/mySkill'
import Image from 'next/image';

interface Category {
  key: string,
  value: string,
  classCategory: string
}

const Skills = () => {
  const [isCategory, setCategory] = useState<string>("Tools");
  const [classCategory, setClassCategory] = useState<string>("w-1/4");

  const ImageCollection: string[] = MySkill.filter(skill => skill.category === isCategory).map(skill => skill.image);

  const TabButton : Category[] = [
    {
      key: 'F',
      value: 'Framework',
      classCategory: 'w-1/4'
    },
    {
      key: 'L',
      value: 'Language',
      classCategory: 'w-1/4'
    },
    {
      key: 'PL',
      value: 'Programming Language',
      classCategory: 'w-1/4'
    },
    {
      key: 'U',
      value: 'Tools',
      classCategory: 'w-1/4'
    },
  ]

  const handleSkills = (category: string, classCategory: string) => {
    setCategory(category);
    setClassCategory(classCategory);
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-4xl p-2 border-gray-600 rounded-2xl w-full text-center font-extrabold">
        Skills
      </h1>
      <div className='flex flex-row w-4/5 mt-2'>
        {TabButton.map((Tab, index) => (
          <div className='w-1/4 text-center' key={index}>
            <button onClick={() => handleSkills(Tab.value, Tab.classCategory)}>{Tab.value}</button>
          </div>
        ))}
      </div>
      {/* Dynamically show image based on selected Array */}
      <div className="m-8 flex flex-col items-center justify-center w-4/5">
        <div className="flex flex-wrap w-4/5">
          {ImageCollection.map((image, index) => (
            <div key={index} className={`p-2 ${classCategory}`}> 
              <Image src={image} alt={image} className="w-full h-auto" width={250} height={365} priority={true}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills