import React from 'react'
import WorkImg from '../assets/work.jpg'
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
            style={{backgroundImage:`url(${WorkImg})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${WorkImg2})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${WorkImg})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${WorkImg2})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${WorkImg})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
            </div>


          </div>
          <div
            style={{backgroundImage:`url(${WorkImg2})`}}
          
            className='shadow-lg  shadow-[rgb(219,39,119)]  group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover Effect */}

            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application

                </span>

                <div>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>

                  <a href="/">
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
