import React from "react";
import firstimg from '../../Asset/About-us/Image1.jpg'
import secondimg from '../../Asset/About-us/Image2.jpg'
import threeimg from '../../Asset/About-us/Image3.jpg'
import fourimg from '../../Asset/About-us/Image4.jpg'
import founder from '../../Asset/About-us/founder.png';
import officer from '../../Asset/About-us/officer.png';
import tech from '../../Asset/About-us/tech.png';
import creative from '../../Asset/About-us/creative.png';

const Wearehere = () =>{
    return(

<div>
{/*-----We are here to help  section start-----------*/}

        <div className="px-[10%] md:py-36 pt-10 pb-10 md:flex md:justify-between md:gap-28">

<div>
    <p className="poppins md:text-4xl text-2xl text-[#161C2D] md:font-bold font-semibold ml-5 pb-10 ">We are here to help the customers to get their success.</p>
</div>
<div>
    <p className="poppins text-xl text-[#161C2D] font-semibold pb-12 md:w-3/5">We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>
    <p className="poppins text-xl text-[#161C2D] font-semibold md:w-3/5">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.</p>
</div>
        </div>

        {/*-----We are here to help  section end-----------*/}

        {/*-----High skilled coders  section start-----------*/}

        <div className="md:flex md:gap-40">
<div className=" flex ">
    <div className="block">
    <img src={firstimg} alt=""  className="pb-3 pr-3"/>
    <img src={secondimg} alt="" />
    </div>

    <div className="block">
    <img src={threeimg} alt="" className="pt-6 pb-6"/>
    <img src={fourimg} alt="" />

    </div>
</div>
<div className="md:w-2/6 pt-10 px-[10%] md:px-0">
    <h2 className="poppins md:text-5xl md:leading-[60px] text-3xl text-[#161C2D] font-bold pb-14">High skilled coders
    from worldwide.</h2>
    <p className="poppins md:text-xl text-xs text-[#161C2D] font-semibold mb-12 w-full">We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>

    <span className="poppins text-xl text-xs text-[#161C2D] font-semibold md:pb-12 w-2/3">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.</span>
</div>
            
        </div>

         {/*-----High skilled coders  section end-----------*/}


         {/*-Meet our team section start----*/}
<div className="px-[10%] md:pt-40 pt-10">
    <div>
        <div className="text-center">
        <h2 className="poppins md:text-5xl text-3xl md:leading-[60px] text-[#161C2D] md:font-bold font-semibold md:pb-14 pb-5">Meet our team</h2>
        <p className="poppins md:text-xl text-xs md:leading-7 text-[#161C2D] opacity-70 font-bold pb-14">With lots of unique blocks, you can easily build a page without<br></br> coding. Build your next consultancy website within few minutes.</p>

        </div>
        <div className="md:flex md:justify-between md:gap-7">
            <div className="md:p-0 pb-5">
                <img src={founder} alt=""  className="pb-5"/>
                <h3 className="poppins text-xl text-[#161C2D] font-bold ">Joe Bridges</h3>
                <span className="poppins text-[16px] text-[#161C2D] opacity-70 font-bold pb-5">Founder</span>
            </div>
            <div className="md:p-0 pb-5">
                <img src={officer} alt=""  className=" pb-5"/>
                <h3 className="poppins text-xl text-[#161C2D] font-bold ">Jeffrey Walters</h3>
                <span className="poppins text-[16px] text-[#161C2D] opacity-70 font-bold pb-5">Cheif Executive Officer</span>
            </div>
            <div className="md:p-0 pb-5">
                <img src={tech} alt=""  className="pb-5"/>
                <h3 className="poppins text-xl text-[#161C2D] font-bold ">Jason Reed</h3>
                <span className="poppins text-[16px] text-[#161C2D] opacity-70 font-bold pb-5">Chief Technology Officer</span>
            </div>
            <div className="md:p-0 pb-5">
                <img src={creative} alt=""  className="pb-5"/>
                <h3 className="poppins text-xl text-[#161C2D] font-bold ">Nellie Padilla</h3>
                <span className="poppins text-[16px] text-[#161C2D] opacity-70 font-bold pb-5">Creative Director</span>
            </div>
        </div>
    </div>

</div>
         {/*-Meet our team section end----*/}

        </div>

    )
}
export default Wearehere;