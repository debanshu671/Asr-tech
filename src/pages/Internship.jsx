import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import interbg from '../Asset/Internship/Background.png'
import hand from '../Asset/Internship/Sign-of-the-Horns.png';
import { Link } from 'react-router-dom';
import sidehand from '../Asset/Internship/Icon.png';
import manhead from '../Asset/Internship/head.png'
import { BsDot } from "react-icons/bs";
import mobileicon from'../Asset/Internship/mobile.png';
import webicon from '../Asset/Internship/ux-ui.png'
import startegyicon from '../Asset/Internship/strtategy.png'

const Internship = () => {
  return (
    <div>
      <Header />
{/*----top section start---*/}

      <div style={{
        backgroundImage:`url(${interbg})`,
        backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
        <div className='px-[10%] text-center relative'>
          
          <h1 className='text-[#242F65] font-semibold text-[100px] fraunces'>Do <span className='text-[#FF002A] fraunces'>Internship</span><br></br> With Us</h1> 

          <img src={hand} alt='' className='absolute top-[135px] right-[375px]' />

        
        </div>


      </div>

      {/*----top section end---*/}

      {/*---- second top section start---*/}

<div className=' px-[10%]'> <p className='fraunces text-4xl font-normal text-[#2A2C32]'>We offer <span className='fraunces text-4xl font-normal text-[#AE99FF] underline'>certificates </span>upon completion and provide<span className='fraunces text-4xl font-normal text-[#AE99FF] underline'> paid internships</span> for practical experience. Our program ensures both academic recognition and professional growth opportunities.   <span className='fraunces text-4xl font-normal text-[#AE99FF] border-none'>👉 design,</span> <span className='fraunces text-4xl font-normal text-[#AE99FF] '>technology & creativity</span></p></div>


      {/*---- second top section end---*/}

      {/*---- what you get  section start---*/}
      <div className='px-[10%] m-auto'>

        <div className='text-center py-16'>
        <h2 className='mulish text-xl text-[#242F65] font-bold'>what you get</h2>
        </div>
        <div className='flex justify-between gap-20'>

          {/*-//-*/}
        <div className='flex gap-6'>
         
          <div className='w-24 h-24'>  
            <img src={mobileicon} alt='' className='w-full'/>
          </div>
          <div >
          <h2 className='text-[#2A2C32] fraunces font-semibold text-3xl pb-5'>1 Mobile App & <br></br>1 Website Development</h2>
          
          <p className='mulish text-[#525665 font-medium text-xl pb-8'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
          <ul>
            <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Web and Mobile App </li>
            <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Front-end Development</li>
            <li className='mulish text-xl font-semibold text-[#2A2C32]'><BsDot className='inline text-4xl text-[#7390F9]'/>Back-end Development</li>
          </ul>

          </div>
        </div>

        {/*-//-*/}

        <div className='flex gap-6'>
         
         <div className='w-24 h-24'>  
           <img src={webicon} alt='' className='w-full'/>
         </div>
         <div >
         <h2 className='text-[#2A2C32] fraunces font-semibold text-3xl pb-5'>UX/UI design</h2>
         
         <p className='mulish text-[#525665 font-medium text-xl pb-8'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
         <ul>
           <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Web and Mobile App </li>
           <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Front-end Development</li>
          
         </ul>

         </div>
       </div>

        {/*-//-*/}


        


        </div>

        <div className=' w-[560px] m-auto pt-20'>
          <div className='flex gap-6'>
         
         <div className='w-24 h-24'>  
           <img src={startegyicon} alt='' className='w-full'/>
         </div>
         <div >
         <h2 className='text-[#2A2C32] fraunces font-semibold text-3xl pb-5'>Strategy & Direction</h2>
         
         <p className='mulish text-[#525665 font-medium text-xl pb-8'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
         <ul>
           <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Web and Mobile App </li>
           <li className='mulish text-xl font-semibold text-[#2A2C32] pb-2'><BsDot className='inline text-4xl text-[#7390F9]'/>Front-end Development</li>
          
         </ul>

         </div>
       </div></div>



      
        
      </div>

       {/*---- what you get  section end---*/}


      <Footer />
    </div>
  )
}

export default Internship