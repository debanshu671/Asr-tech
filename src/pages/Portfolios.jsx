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
<div className='px-[10%] py-10'>
      <div className='text-center poppins text-6xl font-semibold text-[#161C2D] pb-10'>Our Previous Works</div>
{/*--first section start--*/}


      <div className='flex justify-between shadow shadow-blue-100 shadow-2xl'>
<div className='w-[33%] pl-20'>

  <h3 className='fairplay font-bold text-4xl text-[#1B2025] pt-24'>An Ecommerse App</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] py-6'>App Design,Prototype,IIlustration</p>
  <button style={{
    backgroundImage:`url(${button})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='w-56 h-14 pb-5 monstret font-bold text-xs text-white tracking-[2px]'>View Project</button>
</div>


{/*---*/}
<div className='w-[33%]'><img src={ecomimg} alt=''/></div>

{/*---*/}
<div className='w-[33%] relative'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute -bottom-7 right-10'><img src={fouricon} alt='' className='w-full'/></div>


</div>


      </div>


      {/*--first section end---*/}

      {/*--second section start---*/}
      <div className='flex justify-between shadow shadow-blue-100 shadow-2xl pt-12'>

      <div className='w-[25%] relative'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>



</div>

{/*--*/}
<div className='w-[33%]'><img src={greenimg} alt=''/></div>

{/*---*/}

<div className='w-[33%] pl-20'>

  <h3 className='fairplay font-bold text-4xl text-[#1B2025] pt-24'>Beautiful<br/>
Landing Page<br/>
for real estate</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] py-6'> Web Design</p>
  <button style={{
    backgroundImage:`url(${greenbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='w-56 h-14 pb-5 monstret font-bold text-xs text-white tracking-[2px]'>View Project</button>
</div>

{/*---*/}
</div>

      {/*--second section end---*/}

       {/*--Third section start---*/}

       <div className='flex justify-between shadow shadow-blue-100 shadow-2xl pt-12'>
<div className='w-[33%] pl-20'>

  <h3 className='fairplay font-bold text-4xl text-[#1B2025] pt-24'>Mobile food <br/>app sign up <br/>flow</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] py-6'>Illustration, App Design</p>
  <button style={{
    backgroundImage:`url(${vltbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='w-56 h-14 pb-5 monstret font-bold text-xs text-white tracking-[2px]'>View Project</button>
</div>


{/*---*/}
<div className='w-[33%]'><img src={mobilefood} alt=''/></div>

{/*---*/}
<div className='w-[33%] relative'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>



</div>


      </div>

        {/*--third section end---*/}


           {/*--fourth section start---*/}

           <div className='flex justify-between shadow shadow-blue-100 shadow-2xl pt-12'>
{/*----- */}
           <div className='w-[33%] relative'>


<div className='w-32 h-32 absolute top-8 left-8'><img src={fsticon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute bottom-12 left-8'><img src={sndicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute top-28 right-8'><img src={thirdicon} alt='' className='w-full' /></div>
<div className='w-32 h-32 absolute -bottom-7 right-10'><img src={fouricon} alt='' className='w-full'/></div>


</div>

{/*------*/}


<div className='w-[33%] pl-20'>

  <h3 className='fairplay font-bold text-4xl text-[#1B2025] pt-24'>Carousel user<br /> interface <br/>design</h3>
  <p className='monstret font-medium text-xs text-[#8C93BD] py-6'>App Design,Prototype,IIlustration</p>
  <button style={{
    backgroundImage:`url(${vltbtn})`,
    backgroundSize:'cover',
    backgroundPosition:'center'

  }} className='w-56 h-14 pb-5 monstret font-bold text-xs text-white tracking-[2px]'>View Project</button>
</div>


{/*---*/}
<div className='w-[33%]'><img src={carasol} alt=''/></div>

{/*---*/}



      </div>

              {/*--fourth section end---*/}

              {/*--button section start---*/}

              <div className='w-[200px] h-[50px] bg-[#FF002A] flex items-center rounded-xl m-auto my-16'>
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