// @ts-nocheck
import React from "react";
import Title from "../layouts/title.js";
import ProjectCard from "./ProjectCard.js";
import { projectOne, projectTwo, projectThree } from "../../assets/index.js";
const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center ">
        <Title
          title="VISIT MY PORTFOLIO ANDE KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectOne}
        />
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectTwo}
        />
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectThree}
        />
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectTwo}
        />
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectOne}
        />
        <ProjectCard
          title="VISIT MY"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Project;
