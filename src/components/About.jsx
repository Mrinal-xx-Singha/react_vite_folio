import React from 'react'

const About = () => {
  return (
    <div name='about' className = "w-full h-screen bg-[#080808] text-gray-300 ">
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>

        </div>
        
        <div>
        </div>

         <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold sm:justify-center'>
            <p>Hi 👋🏼,<br /> I'm <span>Mrinal</span>, nice to meet you.<br />
            please take a look at my work</p>
          </div>
          <div className='text-justify'>
            <p>I am an adept <span>Electrical Engineer</span> with an unwavering passion for <span>Front-End Development</span> & Web Development in general. Equipped with a solid technical foundation,
                I have seamlessly transitioned my skills to create captivating and user-centric <span>digital experiences</span>. 
                My meticulous attention to detail, coupled with a keen eye for design aesthetics, allows me to craft intuitive interfaces that bridge the gap between functionality and visual appeal. 
                Eager to contribute my engineering precision and enthusiasm for web development to a dynamic <span>front-end</span> team, I am dedicated to delivering seamless and engaging user interactions through my coding expertise.
            </p>
            <h1 className='text-2xl mt-2'>Education</h1>
            <h2><span>Btech Electrical Engineering "(2020-2024)"</span>
            <ul className='text-justify'>
            <li>
              <h3>Did a 15day <span>Industrial Training</span> / Internship 
                at (NFR) <span>"North Eastern Frontier Railways"</span>.
              </h3>
            </li>
            </ul>
            </h2>
          </div>

         </div>

      </div>

    </div>
  )
}

export default About
