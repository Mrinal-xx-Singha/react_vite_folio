import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div name="home" className='bg-[#080808] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#fff]'>
            <p className='text-pink-600 font-bold text-md'>Hi 👋🏼 My Name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>Mrinal Singha</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a WebApp/<span className='text-pink-600'>React Developer</span></h2>
            <p className='text-[#892b0] py-4 max-w-[700px]'>"I'm a dedicated front-end developer on a mission to craft digital excellence through pixel-perfect precision and cutting-edge web technologies. My passion lies in creating captivating user experiences that leave a lasting impression.
             Let's bring your digital vision to life!"</p>         
             <div>

            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            
            </button>
        </div>
        </div>

    </div>
  )
}

export default Home
