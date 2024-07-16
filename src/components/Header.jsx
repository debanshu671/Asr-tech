import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import logo from "../Asset/logo/image 4.png";
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <header className='py-5 px-[10%] m-auto'>
        
<div className='flex justify-between items-center'>

    <div className='w-[200px]'>
        <img src={logo} alt='' className='w-full'></img>
       
    </div>
    {
        toggle?
        <IoMdClose onClick={()=> setToggle(!toggle)} className='text-black text-2xl block md:hidden pr-0'/>
        :
        <IoIosMenu onClick={()=> setToggle(!toggle)}  className='text-black text-2xl block md:hidden pr-0'/>

    }

   
    

    <div className='md:block hidden'>

    <div className='flex justify-between'>
        

    <div>
   

        <nav className='md:w-[700px]'>
            <ul className='md:flex md:justify-between md:px-[50px] '>
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/Servise" >Services</Link></li>
                <li><Link to='/Portfolios'>Portfolios</Link></li>
                <li><Link to='/Internship'>Internship</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Testimonial'>Testimonial</Link></li>

            </ul>
        </nav>
    </div>

    {/*-------*/}
    <div className='flex items-center mr-[100px] cursor-pointer '>
    <CiSearch />
    </div>


    {/*-------*/}
    <div className='px-4 py-2 border border-black rounded-md mr-7 '>
        <Link><IoMdCall  className='inline mr-1'/>Talk to us</Link>
    </div>


    </div>
    </div>


   

   {/*-----responsive section start---*/}

   <ul className={`duration-300 md:hidden  block fixed  top-[90px] bg-black text-white w-full 
    ${toggle?
        'left-[0]':
        'left-[-100%]'}
    }
    `}>
                <li className='p-5'><Link to="/">Home</Link></li>
                <li className='p-5'><Link to="/Servise" >Services</Link></li>
                <li className='p-5'><Link to='/Portfolios'>Portfolios</Link></li>
                <li className='p-5'><Link to='/Internship'>Internship</Link></li>
                <li className='p-5'><Link to='/About'>About us</Link></li>
                <li className='p-5'><Link to='/Testimonial'>Testimonial</Link></li>

            </ul>

              {/*-----responsive section end---*/}
</div>

        
    </header>
  )
}

export default Header