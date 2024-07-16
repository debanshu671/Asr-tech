import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ecomimg from '../Asset/portpolio/Ecommerce.png';
import button from '../Asset/portpolio/button.png';
import fsticon from '../Asset/portpolio/fst-icon.png';
import sndicon from '../Asset/portpolio/snd-icon.png';
import thirdicon from '../Asset/portpolio/third-icon.png';
import fouricon from '../Asset/portpolio/fourth-icon.png';
import greenbtn from '../Asset/portpolio/greenbutton.png';
import greenimg from '../Asset/portpolio/Landing-page.png';
import vltbtn from  '../Asset/portpolio/violetbtn.png';
import mobilefood from  '../Asset/portpolio/mobile-food.png';
import carasol from  '../Asset/portpolio/carusol.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';



const Portfolios = () => {
  return (
    <div >
      <Header />
<div className='px-[10%] py-10 m-auto max-w-[100%]'>
      <div className='text-center poppins md:text-6xl text-3xl font-semibold text-[#161C2D] pb-10'>Our Previous Works</div>
{/*--first section start--*/}


      <div className='md:flex md:justify-between shadow shadow-blue-100 shadow-2xl'>
<div className='md:w-[33%] md:pl-20'>

  <h3 className='fairplay font-bold md:text-4xl text-2xl text-[#1B2025] md:pt-24 pt-12'>An Ecommerse App</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] md:py-6 py-2'>App Design,Prototype,IIlustration</p>
  <button style={{
    backgroundImage:`url(${button})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='md:w-56 md:h-14 w-30 h-7 md:pb-12 pb-10 monstret font-bold text-xs text-white md:tracking-[2px] px-4 py-4'>View Project</button>
</div>


{/*---*/}
<div className='md:w-[33%]'><img src={ecomimg} alt='' className='w-full'/></div>

{/*---*/}
<div className='md:w-[33%] relative md:block hidden'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute -bottom-7 right-10'><img src={fouricon} alt='' className='w-full'/></div>


</div>


      </div>


      {/*--first section end---*/}

      {/*--second section start---*/}
      <div className='md:flex md:justify-between shadow shadow-blue-100 shadow-2xl pt-12'>

      <div className='w-[25%] relative md:block hidden'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>



</div>

{/*--*/}
<div className='md:w-[33%]'><img src={greenimg} alt=''/></div>

{/*---*/}

<div className='md:w-[33%] md:pl-20'>

  <h3 className='fairplay font-bold md:text-4xl text-2xl text-[#1B2025] md:pt-24 pt-12'>Beautiful
Landing Page
for real estate</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] md:py-6 py-2'> Web Design</p>
  <button style={{
    backgroundImage:`url(${greenbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='md:w-56 md:h-14 w-30 h-7 md:pb-12 pb-10 monstret font-bold text-xs text-white md:tracking-[2px] px-4 py-4'>View Project</button>
</div>

{/*---*/}
</div>

      {/*--second section end---*/}

       {/*--Third section start---*/}

       <div className='md:flex md:justify-between shadow shadow-blue-100 shadow-2xl pt-12'>
<div className='md:w-[33%] md:pl-20'>

  <h3 className='fairplay font-bold md:text-4xl text-2xl text-[#1B2025] md:pt-24 pt-12'>Mobile food app sign up flow</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] md:py-6 py-2'>Illustration, App Design</p>
  <button style={{
    backgroundImage:`url(${vltbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='md:w-56 md:h-14 w-30 h-7 md:pb-12 pb-10 monstret font-bold text-xs text-white md:tracking-[2px] px-4 py-4'>View Project</button>
</div>


{/*---*/}
<div className='md:w-[33%]'><img src={mobilefood} alt=''/></div>

{/*---*/}
<div className='w-[33%] relative md:block hidden'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>



</div>


      </div>

        {/*--third section end---*/}


           {/*--fourth section start---*/}

           <div className='md:flex md:justify-between shadow shadow-blue-100 shadow-2xl pt-12'>
{/*----- */}
           <div className='md:w-[33%] relative md:block hidden'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute -bottom-7 right-10'><img src={fouricon} alt='' className='w-full'/></div>


</div>

{/*------*/}


<div className='md:w-[33%] md:pl-20'>

  <h3 className='fairplay font-bold md:text-4xl text-2xl text-[#1B2025] md:pt-24 pt-12'>Carousel user interface design</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] md:py-6 py-2'>App Design,Prototype,IIlustration</p>
  <button style={{
    backgroundImage:`url(${vltbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='md:w-56 md:h-14 w-30 h-7 md:pb-12 pb-10 monstret font-bold text-xs text-white md:tracking-[2px] px-4 py-4'>View Project</button>
</div>


{/*---*/}
<div className='md:w-[33%]'><img src={carasol} alt=''/></div>

{/*---*/}



      </div>

              {/*--fourth section end---*/}

              {/*--button section start---*/}

              <div className='w-[200px] h-[50px] bg-[#FF002A] flex items-center rounded-xl m-auto md:my-16 mt-20'>
            <Link to='./Portfolios' className='m-auto pl-6 font-normal text-xl'>View more</Link>
            <GoArrowRight className='mr-[20px] text-2xl cursor-pointer'/>

        </div>

              {/*--button section end---*/}





      {/*---*/}
      </div>

      {/*----*/}
      <Footer />
    </div>
  )
}

export default Portfolios