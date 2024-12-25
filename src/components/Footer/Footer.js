import React from "react";
import { logo } from "../../assets";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid lgl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4 ">
          <span className="bannerIcom">
            <FaFacebook />
          </span>

          <span className="bannerIcom">
            <FaTwitter />
          </span>

          <span className="bannerIcom">
            <FaLinkedin />
          </span>
        </div>
      </div>

      <div className="w-full h-full ">
        <div>
          <h3 className="text-xl uppercase text-designColor tracking-wide">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full ">
        <div>
          <h3 className="text-xl uppercase text-designColor tracking-wide">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full ">
        <div>
          <h3 className="text-xl uppercase text-designColor tracking-wide">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>

            <li className="">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
