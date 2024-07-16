import React from "react";
import aboutbg from "../../Asset/about/about-bg.png";
import abone from '../../Asset/Homepage/about1.png';
import abtwo from '../../Asset/Homepage/about2.png';
import abthree from '../../Asset/Homepage/about3.png';
import { Link } from "react-router-dom";
import { AiTwotoneEye } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const AboutHome = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-[10%] py-[80px] m-auto max-w-[100%]">
          <div className="text-center">
            <p className="paragraph pb-5">About us</p>
            <h3 className="font-semibold text-4xl text-black md:pb-20 pb-14">Why we are best</h3>
          </div>

          <div className="md:flex md:justify-between md:gap-5 block" >

            <div className="flex justify-between pb-10 gap-5">

              <div >
<img src={abone} alt="" className="w-full mb-[10px] md:mb-[17px]"></img>
<img src={abtwo} alt="" className="w-full"></img>
</div>
<div>
<img src={abthree} alt="" className="w-full"></img>

</div>
            </div>
            <div className="md:w-[50%]">

              <p className="inter md:text-xl text-[15px] font-normal text-black pb-8">Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing. Bibendum cras fringilla amet suspendisse. Duis mattis hac urna fames in ante.</p>
              <div className="flex items-center pt-8 ">

            <div className=" w-[80px] h-[80px]">
              <AiTwotoneEye  className=" text-[#FF002A] md:text-8xl text-7xl md:pr-5"/>

              </div>

              <div>
                <h3 className="font-semibold md:text-[32px] text-2xl text-black  pt-12">Our Vision</h3>
                <p className="inter md:text-xl text-[15px] font-normal text-black pb-8 pt-5">Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
                </div>
                </div>



                <div className="flex items-center pt-8">
                <div className="w-[80px] h-[80px]"><GoGoal className=" text-[#FF002A] md:text-[80px] text-7xl  pr-[15px]"/></div>
                  <div>
                  <h3 className="font-semibold md:text-[32px] text-2xl text-black pt-12">Our Mission</h3>
                  <p className="inter md:text-xl text-[15px] font-normal text-black pb-8 pt-5">Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse fusce pharetra.</p>

                  </div>
                </div>
                <div className='md:w-[325px] md:h-[80px] w-[200px] h-[50px] bg-[#FF002A] flex items-center rounded-xl mt-[45px]'>
            <Link to='./About' className='m-auto pl-6 font-normal text-xl'>Read more</Link>
            <GoArrowRight className='md:mr-[90px] mr-10 text-2xl cursor-pointer pl-2'/>

        </div>

            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
