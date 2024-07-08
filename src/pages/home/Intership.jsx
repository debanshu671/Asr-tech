import React from 'react'
import inter from '../../Asset/Homepage/intenship.png';
import { Link } from 'react-router-dom';

const Intership = () => {
  return (
    <>

    <div className='bg-[#f2f4f7]'>
    <div className='fix_wrap flex justify-between gap-1 py-[80px]'>
<div><img src={inter}alt=''></img></div>
<div className='w-[700px]'>
    
    <h2 className='poppins font-semibold text-[60px] text-black'>Wanna Do <span className='poppins font-semibold text-[60px] text-[#FF002A]'>Intership</span></h2>
    <p className='pt-[50px] poppins font-normal text-[20px] text-[#667085]'>We offer certificates upon completion and provide paid internships for practical experience. Our program ensures both academic recognition and professional growth opportunities.</p>

    <div className='py-[50px] flex justify-between items-center'>

        <div>
            <h3 className='poppins font-medium text-[36px] text-black'>certificate</h3>
            <p className='poppins font-normal text-[20px] text-[#667085]'>After Completed Internship</p>
        </div>
        <div>
            <h3 className='poppins font-medium text-[36px] text-black'>Paid</h3>
            <p className='poppins font-normal text-[20px] text-[#667085]'>After Complete Project</p>
        </div>
    </div>
    <div className='mt-[50px]'><Link className='py-[30px] px-[60px] border-solid border-2 border-black rounded-3xl poppins font-medium text-[32px] text-black inline'>Contact us</Link></div>


</div>

    </div>

    </div>
    </>
  )
}

export default Intership