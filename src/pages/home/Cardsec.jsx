import React from "react";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { PiDeviceMobileLight } from "react-icons/pi";
import { PiCreditCardLight } from "react-icons/pi";
import cardbg from "../../Asset/Homepage/Frame 48095527@2x.png";

const Cardsec = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cardbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="md:py-20 py-10"
    >
      <div className="px-[10%] m-auto py-[30px]">
        <div className="text-center">
          <p className="font-normal md:text-2xl text-xl text-black p-1">Our services</p>
          <h2 className="font-semibold md:text-4xl text-2xl text-black p-4">Growth based services</h2>
        </div>

       

        <div className="md:flex md:justify-between text-center pt-20  text-center">
     {/*first section start-----*/}

          <div className="w-[320px] h-[377px] bg-[#ffffff]  m-auto">

          <div className="md:mt-[25px]">
            <PiPaintBrushDuotone className="text-[#FF002A] w-[100px] h-[100px] m-auto pt-10" />
            <h3 className="font-semibold text-black text-2xl inter pt-[25px] pb-5">Branding and UI/UX</h3>
            <p className="m-auto text-[16px] font-normal px-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus
              vivamus metus
            </p>
            <div className="flex gap-1 items-center inline w-[128px] m-auto">

            <button className="text-[#FF002A] text-[16px] font-normal">
              View details 
            </button>
            <MdKeyboardArrowRight className="text-[#FF002A] text-2xl pt-[3px]" />

            </div>
            
</div>
          </div>

           {/*first section end-----*/}


           {/*second section start-----*/}

          <div className="w-[320px] h-[377px] bg-[#000000] text-white m-auto">
              <div className="md:mt-[25px] mt-10">

            <PiGlobeHemisphereWestLight className="text-[#FF002A] w-[100px] h-[100px] m-auto pt-10" />
            <h3 className="font-semibold text-white text-2xl inter pt-[25px] pb-5">Web Development</h3>
            <p className="m-auto text-[16px] font-normal px-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus
              vivamus metus
            </p>
            <div className="flex gap-1 items-center inline w-[128px] m-auto">
            <button className="text-[#FF002A] text-[16px] font-normal">
              View details 
            </button>
            <MdKeyboardArrowRight className="text-[#FF002A] text-2xl pt-[3px]" />
            </div>

            </div>
          </div>

          {/*second section end-----*/}


          {/*third  section start-----*/}
          <div className="w-[320px] h-[377px] bg-[#fff] m-auto">
          <div className="md:mt-[25px] mt-10">

            <PiDeviceMobileLight className="text-[#FF002A] w-[100px] h-[100px] m-auto pt-10" />
            <h3 className="font-semibold text-black text-2xl inter pt-[25px] pb-5">Mobile Development</h3>
            <p className="m-auto text-[16px] font-normal px-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus
              vivamus metus
            </p>
            <div className="flex gap-1 items-center inline w-[128px] m-auto">
            <button className="text-[#FF002A]">
              View details 
            </button>
            <MdKeyboardArrowRight className="text-[#FF002A] text-2xl pt-[3px]" />
            </div>

</div>
          </div>

          {/*third section end-----*/}


          {/*fourth section start-----*/}
          <div className="w-[320px] h-[377px] bg-[#000000] text-white m-auto ">

          <div className="md:mt-[25px] mt-10">

            <PiCreditCardLight className="text-[#FF002A] w-[100px] h-[100px] m-auto pt-10" />
            <h3 className="font-semibold text-white text-2xl inter pt-[25px] pb-5">Graphics Design</h3>
            <p className="m-auto text-[16px] font-normal px-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus
              vivamus metus
            </p>
            <div className="flex gap-1 items-center inline w-[128px] m-auto">
            <button>
              View details 
            </button>
            <MdKeyboardArrowRight className="text-[#FF002A] text-2xl pt-[3px]" />
            </div>
</div>

          </div>

          {/*fourth section end-----*/}
        </div>
      </div>
    </div>
  );
};

export default Cardsec;
