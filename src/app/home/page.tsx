import React from 'react'
import TopHome from '../nav/topHome'
import Bot from '../nav/bot'
import About from './about'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='font-Orbitron'>
      <div className='sticky top-0 z-10'>
        <TopHome />
      </div>
      <div id='intro-section' className='grid grid-cols-2 bg-gradient-to-t from-blue-600 to-blue-900 rounded-lg shadow-md'>
        <div className='flex flex-col items-center justify-center p-8'>
          <h3 className='text-white text-2xl font-semibold mb-4'>Hello there,</h3>
          <h1 className='text-white text-4xl font-bold mb-4'>{`I\'m Dan Koyuki`}</h1>
          <span className='text-white text-lg mb-4'>Aspiring Web Developer</span>
          <h3 className='text-white text-lg font-semibold mb-4 quote'>"願いが続ける限り、希望を叶う"</h3>
          <span className='text-white text-sm'>(As long as you keep wishing, your wishes will come true)</span>
        </div>
        <div className='relative z-0'>
          <Image src='https://res.cloudinary.com/dankoyuki/image/upload/v1707010295/Custom%20Card/n7ju7o3wq2jnn5chjkzm.png' className='object-cover w-full h-full rounded-r-lg' alt={'Person Placeholder'} />
          <div className='absolute inset-0 bg-black opacity-50 rounded-r-lg'></div> {/* Overlay effect */}
        </div>
      </div>

      <div id='about-section'>
        <About />
      </div>

      <div id='skill-section'>
        <Bot />
      </div>

      <div id='portfolio-section'>
        <Bot />
      </div>

      <div id='contact-section'>
        <Bot />
      </div>
    </div>
  )
}

export default Home