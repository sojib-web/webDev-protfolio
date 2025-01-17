import React from "react";
import ResumeCard from "./ResumeCard.js";
import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      // @ts-ignore
      className="w-full flex flex-col lg:flex-row gap-10 lgl:gap-20"
    >
      {" "}
      {/* part one*/}
      <div>
        <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-6">
          <p className="text-sm text-designColor  tracking-[4px]">
            1998 - 2010
          </p>
          <h2 className="text-3xl  md:text-4xl font-bold">
            {" "}
            Education Quality
          </h2>
        </div>

        <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Daffodil International University | DIU"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Secondary School Education"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>
      {/* part two*/}
      <div>
        <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-6">
          <p className="text-sm text-designColor  tracking-[4px]">
            1998 - 2010
          </p>
          <h2 className="text-3xl  md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Sr. Software Engineer"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Google Out Tech - (2017 - Present)

"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="3.00/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
