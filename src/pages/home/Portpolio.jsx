import React from 'react';
import firstpic from '../../Asset/portpolio/pic-1.png';
import secpic from '../../Asset/portpolio/pic-2.png';
import thirdpic from '../../Asset/portpolio/pic-3.png';
import fourpic from '../../Asset/portpolio/pic-4.png';
import fivepic from '../../Asset/portpolio/pic-5.png';
import sixpic from '../../Asset/portpolio/pic-6.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Portfolios from '../../pages/Portfolios';

const Portpolio = () => {
  return (
    <>
    <div className='px-[10%] m-auto py-16'>
        <div className='text-center'>
            <p className='md:text-2xl text-xl font-normal text-black pb-3'>Portfolio</p>
            <h3 className='font-semibold md:text-4xl text-2xl pb-[60px]'>Our previous works</h3>
        </div>

        <div className='pb-10 pl-5'>
           <ul className='flex flex-wrap gap-10 justify-center'>
           <li className='portimgSize'><img src={firstpic} className='w-full' /></li>
           <li className='portimgSize'><img src={secpic} className='w-full'/></li>
           <li className='portimgSize'><img src={thirdpic} className='w-full'/></li>
           <li className='portimgSize'><img src={fourpic} className='w-full'/></li>
           <li className='portimgSize'><img src={fivepic} className='w-full'/></li>
           <li className='portimgSize'><img src={sixpic} className='w-full'/></li>
           </ul>
        </div>
        <div className='w-[200px] h-[50px] bg-[#FF002A] flex items-center rounded-xl m-auto'>
            <Link to='./Portfolios' className='m-auto pl-6 font-normal text-xl'>View more</Link>
            <GoArrowRight className='mr-[20px] text-2xl cursor-pointer'/>

        </div>
    </div>
    </>
  )
}

export default Portpolio