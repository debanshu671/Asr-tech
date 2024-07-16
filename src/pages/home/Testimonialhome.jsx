import React from "react";
import testbg from '../../Asset/Homepage/testimonial_bg.png'
import quot from '../../Asset/Homepage/Quotes.png';
import starRed from '../../Asset/Homepage/red-star.png';
import manpic from '../../Asset/Homepage/Ellipse.png';
import starWhite from '../../Asset/Homepage/white-star.png'
import womenpic from '../../Asset/Homepage/Emili.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonialhome =()=>{
    return(
<>
<div className="px-[10%] md:py-[20px] ">

    <div className="text-center">
        <p className="inter font-normal text-[16px] text-black pb-5">Testimonial</p>
        <h3 className="inter font-semibold text-4xl text-black pb-[80px]">What our clients say</h3>
    </div>

    <div className="md:flex md:justify-between md:gap-8 pb-5">
{/*------first section start----*/}
   
    <div style={{ backgroundImage: `url(${testbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"}}
          
          className="rounded-3xl text-center p-[30px] mb-5">


            <div  className="text-center">
                <img src={quot} alt="" className="m-auto pb-[35px]"/>
                <p className="font-normal text-white text-[16px] pb-[20px]">Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.</p>
                <div className="flex  w-[270px] m-auto gap-5 items-center">
                    <div ><img src={manpic} alt="" /></div>
                    <div><p className="font-normal text-white text-[16px] inter pb-[5px]">Michael Wong</p>
                    <div className="flex w-[125px] gap-[5px] pl-[5px] ">
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>

                    </div>
                    </div>
                </div>
            </div>

            
      
    </div>

    

    {/*------second section start----*/}
   

    <div style={{ backgroundImage: `url(${testbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"}}
          
          className="rounded-3xl text-center p-[30px] mb-5">


            <div  className="text-center">
                <img src={quot} alt="" className="m-auto pb-[35px]"/>
                <p className="font-normal text-white text-[16px] pb-[20px]">Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.</p>
                <div className="flex  w-[270px] m-auto gap-5 items-center">
                    <div ><img src={womenpic} alt="" /></div>
                    <div><p className="font-normal text-white text-[16px] inter pb-[5px]">Michael Wong</p>
                    <div className="flex w-[125px] gap-[5px] pl-[5px] ">
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starRed} alt=""/>
<img src={starWhite} alt=""/>

                    </div>
                    </div>
                </div>
            </div>

            
      
    </div>

     {/*------second section end----*/}
    

    </div>

    
</div>

</>
    )
}
export default Testimonialhome;