import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import logo from "../Asset/logo/image 4.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-5'>
        <div className='px-[10%] mx-auto'>
<div className='flex justify-between items-center'>

    <div className='w-[200px]'>
        <img src={logo} alt='' className='w-full'></img>
    </div>

    <div >
        <nav className='w-[700px]'>
            <ul className='flex justify-between px-[50px]'>
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/Servise" >Services</Link></li>
                <li><a href='/Portfolios'>Portfolios</a></li>
                <li><a href='/Internship'>Internship</a></li>
                <li><a href='/About'>About us</a></li>
                <li><a href='/Testimonial'>Testimonial</a></li>

            </ul>
        </nav>
    </div>
    <div className='flex items-center mr-[100px] cursor-pointer'>
    <CiSearch />
    </div>
    <div className='px-4 py-2 border border-black rounded-md mr-7'>
        <Link><IoMdCall  className='inline mr-1'/>Talk to us</Link>
    </div>
</div>

        </div>
    </header>
  )
}

export default Header