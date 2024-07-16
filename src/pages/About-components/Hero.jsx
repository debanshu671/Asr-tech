import React from "react";
import aboutimg from '../../Asset/About-us/IMG.png'

const Hero = ()=>{
    return(
<div className="px-[10%] py-[5%]">

    <div className="text-center">
   <h2 className="pb-10 font-semibold md:text-6xl text-4xl text-[#161C2D] poppins">About us</h2>
   <p className="font-normal md:text-xl text-xs text-[#161C2D] pr-5 pb-14">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
   </div>
   <div className="w-full">
    <img src={aboutimg} alt="" className="block w-[100%]"></img>
   </div>

</div>
    )
}

export default Hero;