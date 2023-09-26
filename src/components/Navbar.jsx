import React,{useState} from 'react'
import Logo from '../assets/Mrinal.png'
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
    const  [nav,setNav] = useState(false)

    const handleClick =() => setNav(!nav) 


  return (
    <div className='fixed  w-full h-[80px] flex justify-between items-center px-4 bg-[#080808] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style= {{width:'150px'}} />
        </div>


        {/* Menue */}

            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


        {/* Hamburger  */}

        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ?  <FaBars size={30} /> : <FaTimes size={30} /> }
        </div>

        {/* Mobile Menu */}

        <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#080808] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}

        <div className='lg:flex fixed flex-col top-[35%] left-0 hidden '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 '
                    href="/">
                        LinkedIn<FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 bg-[#33333]'
                    href="/">
                        GitHub<FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#004f9f]'>
                    <a 
                    className='flex justify-between items-center w-full text-black-300 '
                    href="/">
                        Email<HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 '
                    href="/">
                        Resume<BsPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
