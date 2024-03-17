import React,{useState} from 'react'
import Logo from '../assets/Mrinal.png'
import {FaBars, FaTimes,FaGithub,FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonLinesFill} from 'react-icons/bs'
import {Link }from 'react-scroll'


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
                
                <li>
                    <Link  to="home"  smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                <Link  to="about"  smooth={true} duration={500}>About</Link>
                </li>
                <li>
                <Link  to="skills"  smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                <Link  to="work"  smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                <Link  to="contact"  smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>


        {/* Hamburger  */}

        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ?  <FaBars size={30} /> : <FaTimes size={30} /> }
        </div>

        {/* Mobile Menu */}

        <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#080808] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="home"  smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick}  to="about"  smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'>   <Link onClick={handleClick}  to="skills"  smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick}  to="work"   smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link  onClick={handleClick} to="contact"  smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social Icons */}

        <div className='lg:flex fixed flex-col top-[35%] left-0 hidden '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 '
                    href="https://www.linkedin.com/in/mrinal-singha-754b57249/">
                        LinkedIn<FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 bg-[#33333]'
                    href="https://github.com/Mrinal-xx-Singha">
                        GitHub<FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#004f9f]'>
                    <a 
                    className='flex justify-between items-center w-full text-black-300 '
                    href="mailto:mrinalsingha17@gmail.com">
                        Email<HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a 
                    className='flex justify-between items-center w-full text-gray-300 '
                    href="https://drive.google.com/file/d/1q4a-ngnHKHdyOaCvnwuHpbJGJTUxtkaR/view?usp=drive_link" >
                        Resume<BsPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
