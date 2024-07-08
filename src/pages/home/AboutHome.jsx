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
        <div className="fix_wrap py-[80px]">
          <div className="text-center">
            <p className="paragraph pb-5">About us</p>
            <h3 className="font-semibold text-4xl text-black pb-[80px]">Why we are best</h3>
          </div>

          <div className="flex justify-between gap-5">

            <div className="flex justify-between w-[620px]">

              <div >
<img src={abone} alt="" className="w-full mb-[17px]"></img>
<img src={abtwo} alt="" className="w-full"></img>
</div>
<div>
<img src={abthree} alt="" className="w-full"></img>

</div>
            </div>
            <div className="w-[500px]">

              <p className="paragraph pb-8">Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing. Bibendum cras fringilla amet suspendisse. Duis mattis hac urna fames in ante.</p>
              <div className="flex items-center ">

<div className="w-[80px] h-[80px]">
              <AiTwotoneEye  className=" text-[#FF002A] text-[80px] pr-[15px]"/>

              </div>

              <div>
                <h3 className="font-semibold text-[32px] text-black pb-3">Our Vision</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
                </div>
                </div>



                <div className="flex items-center pt-8">
                <div className="w-[80px] h-[80px]"><GoGoal className=" text-[#FF002A] text-[80px] pr-[15px]"/></div>
                  <div>
                  <h3 className="font-semibold text-[32px] text-black pb-3">Our Mission</h3>
                  <p className="font-thin">Lorem ipsum dolor sit amet consectetur. Quam arcu habitasse fusce pharetra.</p>

                  </div>
                </div>
                <div className='w-[325px] h-[80px] bg-[#FF002A] flex items-center rounded-xl mt-[45px]'>
            <Link to='./About' className='m-auto pl-6 font-normal text-xl'>Read more</Link>
            <GoArrowRight className='mr-[90px] text-2xl cursor-pointer'/>

        </div>

            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
