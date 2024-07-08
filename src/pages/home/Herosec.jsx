import React from 'react';
import { IoMdCall } from "react-icons/io";
import banner from '../../Asset/Homepage/hero_img.png'
import { Link } from 'react-router-dom';


const Herosec = () => {
  return (
    <div className='max-w-[1200px] m-auto py-[30px]'>
<div className='flex gap-[150px] pb-[65px]'>
        <div className='pb-[30px]'>
<h1 className='font-extrabold text-[60px] leading-[70px] pt-[60px] pb-[20px] inter'>“Your vision, our <br></br>
digital canvas”</h1>
<p className='font-normal text-[16px] pb-10 pt-5 inter'>Revolutionize your global digital strategy with the ASR Tech solution ,<br></br> pioneering innovative solutions for unparalleled success.</p>
<div className='w-[320px] h-[80px] rounded-2xl bg-[#FF002A] text-2xl text-[#000000] text-center pt-[30px] '>

<Link ><IoMdCall  className='inline mr-6 curser-pointer'/>Book a call</Link>

</div>
        </div>
        <div className=''>

<img src={banner} alt='' />
        </div>
        </div>
    </div>
  )
}

export default Herosec