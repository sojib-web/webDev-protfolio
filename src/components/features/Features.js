// @ts-nocheck
import React from "react";
import Title from "../layouts/title";
import Card from "./Card";
import { FaTwitter, FaBars } from "react-icons/fa6";

function Features() {
  return (
    <section
      id="features"
      className="w-full py-20  border-b-[1px] border-b-black "
    >
      <Title title="Features" des="what I do" />
      <div className="grid grid-cols-3 gap-12">
        <Card
          title="Business Stratagy"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentext ever since the 1500s"
          icon={<FaBars />}
        />
        <Card
          title=" Web Design "
          des="Craft visually stunning and highly functional websites with strategies tailored to captivate your audience ."
          icon={<FaTwitter />}
        />

        <Card
          title=" Design Strategies"
          des="Craft visually stunning and highly functional websites with strategies tailored to captivate your audience ."
          icon={<FaTwitter />}
        />
        <Card
          title=" Web Strategies"
          des="Craft visually stunning and highly functional websites with strategies tailored to captivate your audience and ."
          icon={<FaTwitter />}
        />
        <Card
          title="Edge Web Design"
          des="Craft visually stunning and highly functional websites with strategies tailored to captivate your audience and "
          icon={<FaTwitter />}
        />

        <Card
          title="Edge Web Design"
          des="Craft visually stunning and highly functional websites with strategies tailored to captivate your audience and "
          icon={<FaTwitter />}
        />
      </div>
    </section>
  );
}

export default Features;
