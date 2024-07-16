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
        <div className='px-[10%] m-auto max-w-[100%] text-center relative pb-10'>
          
          <h1 className='text-[#242F65] font-semibold 
          md:text-[100px] text-5xl fraunces md:leading-[120px]'>Do <span className='text-[#FF002A] fraunces'>Internship</span><br></br> With Us</h1> 

          <img src={hand} alt='' className='md:absolute md:top-[100px] md:right-[375px] md:block hidden' />

        
        </div>


      </div>

      {/*----top section end---*/}

      {/*---- second top section start---*/}

<div className=' px-[10%]'> <p className='fraunces md:text-4xl text-xl font-normal text-[#2A2C32]'>We offer <span className='fraunces md:text-4xl text-xl font-normal text-[#AE99FF] underline'>certificates </span>upon completion and provide<span className='fraunces md:text-4xl text-xl font-normal text-[#AE99FF] underline'> paid internships</span> for practical experience. Our program ensures both academic recognition and professional growth opportunities.   <span className='fraunces md:text-4xl text-xl font-normal text-[#AE99FF] border-none'>👉 design,</span> <span className='fraunces md:text-4xl text-xl font-normal text-[#AE99FF] '>technology & creativity</span></p></div>


      {/*---- second top section end---*/}

      {/*---- what you get  section start---*/}
      <div className='px-[10%] m-auto '>

        <div className='text-center py-16'>
        <h2 className='mulish text-xl text-[#242F65] font-bold'>what you get</h2>
        </div>
        <div className='md:flex md:justify-between md:gap-20 '>

          {/*-//-*/}
        <div className='flex gap-6 pb-5'>
         
          <div className='w-24 h-24'>  
            <img src={mobileicon} alt='' className='w-full'/>
          </div>
          <div > 
          <h2 className='text-[#2A2C32] fraunces font-semibold md:text-3xl text-xl pb-5'>1 Mobile App & <br></br>1 Website Development</h2>
          
          <p className='mulish text-[#525665 font-medium md:text-xl text-xs md:pb-8 pb-4'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
          <ul>
            <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32]  md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Web and Mobile App </li>
            <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32] md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Front-end Development</li>
            <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32]'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Back-end Development</li>
          </ul>

          </div>
        </div>

        {/*-//-*/}

        <div className='flex gap-6 pb-5'>
         
         <div className='w-24 h-24'>  
           <img src={webicon} alt='' className='w-full'/>
         </div>
         <div >
         <h2 className='text-[#2A2C32] fraunces font-semibold md:text-3xl text-xl pb-5'>UX/UI design</h2>
         
         <p className='mulish text-[#525665 font-medium md:text-xl text-xs md:pb-8 pb-4'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
         <ul>
           <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32] md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Web and Mobile App </li>
           <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32] md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Front-end Development</li>
          
         </ul>

         </div>
       </div>

        {/*-//-*/}


        


        </div>

        <div className=' md:w-[560px] m-auto md:pt-20'>
          <div className='flex gap-6'>
         
         <div className='w-24 h-24'>  
           <img src={startegyicon} alt='' className='w-full'/>
         </div>
         <div >
         <h2 className='text-[#2A2C32] fraunces font-semibold md:text-3xl text-xl pb-5'>Strategy & Direction</h2>
         
         <p className='mulish text-[#525665 font-medium md:text-xl text-xs md:pb-8 pb-4'>During the internship, participants will learn both frontend and backend development. This includes hands-on experience with mobile app and website projects.</p>
         <ul>
           <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32] md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Web and Mobile App </li>
           <li className='mulish md:text-xl text-xs font-semibold text-[#2A2C32] md:pb-2'><BsDot className='inline md:text-4xl text-2xl text-[#7390F9]'/>Front-end Development</li>
          
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