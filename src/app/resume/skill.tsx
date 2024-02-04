import React from 'react'
import { MySkill } from '../utils/mySkill'

const Skill = () => {
  return (
    <div className='font-Nunito'>
      <h1 className="border-b-4 border-black text-3xl pb-1 mt-5 mb-2 font-Orbitron font-bold">
        Skills
      </h1>
      <ul className='list-disc'>
        {MySkill.map((skill, index) => (
          <li key={index} className='ml-5'>{skill.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skill