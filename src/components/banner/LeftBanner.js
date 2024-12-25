/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col  gap-5">
        <h4 className="text-lg font-normal">WELLCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">sojib Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorColor="#ff014f"
            cursorBlinking={false}
            cursorStyle="|"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            fIND ME IN
          </h2>
          <div className="flex gap-4">
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

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            fIND ME IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcom">
              <FaReact />
            </span>

            <span className="bannerIcom">
              <RiNextjsFill />
            </span>

            <span className="bannerIcom">
              <RiTailwindCssFill />
            </span>

            <span className="bannerIcom">
              <IoLogoFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
