// @ts-nocheck
import React, { useState } from "react";
import Title from "../layouts/title.js";
import Education from "./Education.js";
import Skils from "./Skils.js";
import Experience from "./Experience.js";
import Achievements from "./Achievements.js";

const Resume = () => {
  const [educationData, setEductationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experenceData, setExperenceData] = useState(false);
  const [AchievementsData, setAchievementsData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center ">
        <Title title="2+ years experence" des="My Resume" />
      </div>

      <div>
        <ul className=" w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEductationData(true) &
              setSkillsData(false) &
              setExperenceData(false) &
              setAchievementsData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEductationData(false) &
              setSkillsData(true) &
              setExperenceData(false) &
              setAchievementsData(false)
            }
            className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEductationData(false) &
              setSkillsData(false) &
              setExperenceData(true) &
              setAchievementsData(false)
            }
            className={`${
              experenceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEductationData(false) &
              setSkillsData(false) &
              setExperenceData(false) &
              setAchievementsData(true)
            }
            className={`${
              AchievementsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skils />}
      {AchievementsData && <Achievements />}
      {experenceData && <Experience />}
    </section>
  );
};

export default Resume;
