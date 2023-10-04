import React from 'react'

import react from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Javascript from '../assets/javascript.png';
import Github from '../assets/github1.jpg';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Material from '../assets/Material.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#080808] w-full h-screen  text-gray-300'>
      
      {/* cotnaienr */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4 text-lg'>These are the technologies i've worked with </p>
        </div>

        {/* container for all the icons  */}

        <div className=' w-full grid grid-cols-2 sm:grid-cols-3  text-center gap-4 py-8'>
          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110'>
            <img src={Html} alt="html icon" className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110'>
            <img src={Css} alt="css icon" className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110'>
            <img src={Javascript} alt="javascript icon" className='w-20 mx-auto' />
            <p className='my-4'>Javascript</p>
          </div>

          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110'>
            <img src={react} alt="react icon" className='w-20 mx-auto' />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110'>
            <img src={Tailwind} alt="tailwind icon" className='w-20 mx-auto' />
            <p className='my-4'>Tailwind</p>
          </div>

          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110 bg-slate-110'>
            <img src={Github} alt="github icon" className='w-20 mx-auto' />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[rgb(219,39,119)] hover:scale-110 bg-slate-110 '>
            <img src={Material} alt="Material ui" className='w-20 mx-auto' />
            <p className='my-4'>Material ui</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
