import React from 'react';
import { IoMdCall } from "react-icons/io";
import banner from '../../Asset/Homepage/hero_img.png'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import CountUp from 'react-countup';


const Herosec = () => {
  return (


        
    <div className='px-[10%]  py-[30px]'>
<div className='md:flex md:justify-between  pb-[65px] m-auto'>
        <div className='md:pb-[30px] pb-20'>
<h1 className='md:font-extrabold  font-semibold md:text-[60px] text-4xl md:leading-[70px] pt-[60px] pb-[20px] inter'>“Your vision,Our
<ReactTyped
      strings={[
     'digital canvas”'
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
    
        </h1>


<p className='font-normal md:text-xl text-[12px] pb-10 pt-5 inter text-black'>Revolutionize your global digital strategy with the ASR Tech solution ,<br></br> pioneering innovative solutions for unparalleled success.</p>
<div className='md:w-[320px] md:h-[80px] w-40 h-10 rounded-2xl bg-[#FF002A] md:text-2xl text-xl text-[#000000] text-center md:pt-[30px] pt-2 md:mt-8'>

<Link ><IoMdCall  className='inline md:mr-6  mr-3 curser-pointer flex-col items-center'/>Book a call</Link>

</div>
{/*-counter section start---*/}


<div className='flex justify-between md:py-20 py-10 md:w-[700px] text-center'>
<div>
        <h1 className='md:text-5xl text-xl inter font-medium text-black md:pb-3'><CountUp start={0} end={70} duration={5} delay={0} /><span>+</span></h1>
        <p className='md:text-xl text-xs inter font-normal text-black pb-3 opacity-[64%]'>Project Completed</p>

</div>
<div>
        <h1 className='md:text-5xl text-xl inter font-medium text-black md:pb-3'><CountUp start={0} end={10} duration={5} delay={0} /><span>+</span></h1>
        <p className='md:text-xl text-xs inter font-normal text-black pb-3 opacity-[64%]'>Years of Experience</p>

</div>
<div>
        <h1 className='md:text-5xl text-xl inter font-medium text-black md:pb-3'><CountUp start={0} end={100} duration={5} delay={0} /><span>+</span></h1>
        <p className='md:text-xl text-xs inter font-normal text-black pb-3 opacity-[64%]'>Clients Worldwide</p>

</div>
</div>
{/*-counter section end---*/}
        </div>
        <div className='md:w-[60%] mr-5'>      

<img src={banner} alt='' className='w-full'/>
        </div>
        </div>
    </div>
  )
}

export default Herosec