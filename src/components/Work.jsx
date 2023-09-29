import React from 'react'
import WorkImg from '../assets/work.jpg'
import Mgym from '../assets/work/Mgym.png'
import MrinalTube from '../assets/work/MrinalTube.png'
import LandingPage from '../assets/work/LandingPage.png'
import MyNetflix from '../assets/work/Netflix.png'
import Mverse from '../assets/work/Mverse.png'
import Mcrypto from '../assets/work/Mcrypto.png'
import WorkImg2 from '../assets/work2.jpg'


const Work = () => {
  return (
    <div name="work" className='bg-[#080808] w-full md:h-screen text-gray-300 '>
      {/* Container  */}


      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent works</p>

            {/* Portfolio  */}
        </div>

        <div
        
        
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* card item */}
          <div
            style={{backgroundImage:`url(${Mgym})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-widest'>
                  MGym 
                </span>
                <div>
                  <a href="https://transcendent-semolina-a8a371.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/gym_exercises">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${MrinalTube})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Mrinal Tube

                </span>

                <div>
                  <a href="https://main--remarkable-choux-7fefb8.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/Mrinal_Tube">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${LandingPage})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Landing Page

                </span>

                <div>
                  <a href="https://64b768cd68eede43a7ccdbfa--voluble-sopapillas-b0df76.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/restraunt_Landingpage">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${MyNetflix})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Netflix Clone

                </span>

                <div>
                  <a href="https://mrinalnetflixclone.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/myProject">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${Mverse})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center '>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Mrinals Metaverse

                </span>

                <div>
                  <a href="https://64d907c3aee17330c78eff62--peppy-chimera-b2544c.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/MrinalsMetaverse">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${Mcrypto})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                 Crypto Displayer
                </span>

                <div>
                  <a href="https://thriving-biscochitos-83f4df.netlify.app/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="https://github.com/Mrinal-xx-Singha/Crypto_Currency_Display">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Work
