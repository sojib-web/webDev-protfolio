import React from "react";

import { Link } from "react-scroll";

import { logo } from "../../assets";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-500">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className=" flex items-center gap-10">
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
      </div>
    </div>
  );
};

export default Navbar;
