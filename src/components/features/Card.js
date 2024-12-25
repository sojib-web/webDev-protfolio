import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full  py-10 px-10 rounded-lg shadow-shadowOne flex  flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className=" h-90 overflow-y-hidden">
        <div className="flex flex-col gap-8 h-full translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            {/* <span className="text-5xl text-designColor">{icon}</span> */}
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="md:text-2xl text-xl  font-titleFont font-b text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <FaArrowAltCircleRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
