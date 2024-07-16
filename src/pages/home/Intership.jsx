import React from 'react'
import inter from '../../Asset/Homepage/intenship.png';
import { Link } from 'react-router-dom';

const Intership = () => {
  return (
    <>

    <div className='bg-[#f2f4f7]'>
<div className='px-[10%] m-auto max-w-[100%]'>
        
    <div className='md:flex md:justify-between md:gap-1 py-[80px]'>
<div><img src={inter}alt=''></img></div>
<div className='md:w-[700px] pt-10'>
    
    <h2 className='poppins font-semibold md:text-[60px] text-4xl text-black pr-1'>Wanna Do <span className='poppins font-semibold md:text-[60px] text-4xl text-[#FF002A]'>Intership</span></h2>
    <p className='md:pt-[50px] pt-8 poppins font-normal md:text-xl text-[16px] text-[#667085]'>We offer certificates upon completion and provide paid internships for practical experience. Our program ensures both academic recognition and professional growth opportunities.</p>

    <div className='py-[50px] flex justify-between items-center'>

        <div>
            <h3 className='poppins font-medium md:text-4xl text-3xl text-black pb-5'>certificate</h3>
            <p className='poppins font-normal md:text-xl text-[16px] text-[#667085]'>After Completed Internship</p>
        </div>
        <div>
            <h3 className='poppins font-medium md:text-4xl text-3xl text-black pb-5'>Paid</h3>
            <p className='poppins font-normal md:text-xl text-[16px] text-[#667085]'>After Complete Project</p>
        </div>
    </div>
    <div className='md:mt-[50px] mt-7 '><Link className='md:py-[30px] md:px-[60px] py-4 px-10  border-solid border-2 border-black rounded-3xl poppins font-medium md:text-[32px] text-2xl text-black inline'>Contact us</Link></div>


</div>

    </div>
    </div>




    </div>
    </>
  )
}

export default Intership