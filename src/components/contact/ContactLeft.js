import React from "react";
import { contactImg } from "../../assets/index.js";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const ContactLeft = () => {
  return (
    <div className=" space-y-5 w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne ">
      <img
        className="w-full h-64 object-cover rounded-lg "
        src={contactImg}
        alt="contactImg"
      />
      <div className="space-y-5">
        <h3 className="text-3xl font-bold text-white">Md Sojib Ali</h3>
        <p className="text-lg text-gray-400 tracking-wide">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">01743191397</span>
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">alisojib295@gamil.com</span>
        </p>

        <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default ContactLeft;
