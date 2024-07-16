import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GoPeople } from "react-icons/go";

const Servise = () => {
  return (
    <div>

      <Header />

      <div className='px-[10%] max-w-[100%] m-auto'>
{/*-Our values section start--**/}
      <div className='text-center'>
        <sapn className='inter text-[16px] font-normal text-[#FF002A]'>Our values</sapn>
        <h2 className='inter md:text-4xl text-3xl font-semibold text-[#101828] py-6'>What we provide in UI/UX</h2>
        <p className='inter md:text-xl text-[16px] font-normal text-[#667085]'>Our shared values keep us connected and guide us as one team.</p>
      </div>


      {/*-Our values section end--**/}


      {/*-group section  section start--**/}

      <div className='pt-20 md:flex md:justify-between  md:flex-wrap md:gap-8 '>

{/*--*/}
        <div className='w-96  pb-10 flex  flex-col items-center'>
        <GoPeople  className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>

        {/*--*/}
        <div className='w-96 flex  flex-col items-center pb-10'>
        <GoPeople className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>

        {/*--*/}
        <div className='w-96 flex  flex-col items-center pb-10'>
        <GoPeople className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>

          {/*--*/}
        <div className='w-96 flex  flex-col items-center pb-10'>
        <GoPeople className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>

          {/*--*/}
        <div className='w-96 flex  flex-col items-center pb-10'>
        <GoPeople className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>

          {/*--*/}
        <div className='w-96 flex  flex-col items-center pb-10'>
        <GoPeople  className='text-5xl text-[#FB0029] pb-5'/>
          <h2 className='inter text-xl font-normal text-[#101828] pb-5'>Care about our Customer</h2>
          <p className='inter text-[16px] font-normal text-[#667085]'>Understand what matters to our customer. Give them what they need to do their best work.</p>
        </div>
          {/*--*/}

      </div>

         {/*-group section  section end--**/}
      <Footer />
    </div>

    </div>
  )
}

export default Servise