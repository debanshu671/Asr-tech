import React from "react";
import logo from "../Asset/logo/image 4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className="border-solid border-black border-[1px] mt-20"></div>

      <div className="px-[10%] py-[80px] flex justify-between ">
        {/*left section-start---------*/}
        <div className="w-[260px]">
          <img src={logo} alt="" className="w-full pb-[40px] pr-5" />
          <h2 className="poppins text-xl font-normal text-black">
            hello@navytech.com
          </h2>
          <h3 className="poppins text-xl font-normal text-black">
            Phone : +01 23456789
          </h3>
          <div className="flex justify-between pt-[50px] w-[245px] pr-12">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/*left section end--------*/}

        {/*left middle section-start---------*/}
        <div>
          <h2 className="inter font-semibold text-[24px] text-black pb-[30px]">
            Quick Links
          </h2>
          <ul>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link to="./">Home</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link to="./Servise">Services</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link to="./Portfolios">Portfolio</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link to="./About">About us</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link to="./Testimonial">Testimonial</Link>
            </li>
          </ul>
        </div>

        {/*left middle section-end---------*/}

        {/*right middle section-start---------*/}

        <div>
          <h2 className="inter font-semibold text-[24px] text-black  pb-[30px]">
            Resources
          </h2>
          <ul>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link>Support</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link>Privacy Policy</Link>
            </li>
            <li className="inter font-normal text-[16px] text-black pb-2">
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        {/*right middle section-end---------*/}

        {/*right  section-start---------*/}
        <div>
          <h2 className="inter font-semibold text-[24px] text-black  pb-[30px]">
            Newsletter
          </h2>
          <div className="relative ">
            <div className="flex items-center  bg-[#E7E7E7] rounded-2xl pl-7 ">
              <CiMail className="text-[30px] font-bold" />
              <input
                type="email"
                placeholder="send mail"
                className="w-[400px] h-[70px]  bg-transparent pl-7 border border-none"
              />
            </div>
            <button className="bg-[#FF002A] py-[18px] px-[65px] rounded-xl absolute top-[5px] right-[8px]">
              Send
            </button>
          </div>
        </div>
        {/*right  section-end---------*/}
      </div>
    </>
  );
};
export default Footer;
