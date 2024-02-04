import React from 'react'
import { MyArchivement } from '../utils/myArchive'
import { FaCalendarDays } from 'react-icons/fa6'

const Archive = () => {
  return (
    <div className="font-Nunito">
      <h1 className="border-b-4 border-black text-3xl pb-1 mt-5 mb-2 font-Orbitron font-bold">
        Archivements
      </h1>
      {MyArchivement.map((a, index) => (
        <div key={index} className="mt-2">
          <div className='flex flex-row items-center'>
            <p className="text-xl font-semibold font-Exo">{a.name}</p>
            {a.score && a.level ? <p className='italic ml-1 text-lg font-semibold'>- {a.level} / {a.score}</p> : null}
          </div>
          <p className='text-lg'>{a.agency}</p>
          <div className="flex flex-row items-center">
            <FaCalendarDays /> <p>{a.dateReceived} / </p>
            <p className='ml-1'>{a.type} / {a.recognition}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Archive