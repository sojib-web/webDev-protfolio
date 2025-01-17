/* eslint-disable no-undef */
// @ts-nocheck
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { logo } from "../../assets";
import { navLinksdata } from "../../constants";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-500">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className=" hidden mdl:inline-flex items-center lgl:gap-10 gap-6">
          {navLinksdata.map(({ _id, title, link }) => {
            return (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <IoMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img src={logo} alt="logo" className="w-32" />
                <p className="text-sm text-gray-400 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has beentext ever since the
                  1500
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer"
                    >
                      {" "}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <IoClose />
              </span>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
