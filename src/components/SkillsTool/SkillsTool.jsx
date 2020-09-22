import React from "react";
import data from "./SkillsToolData";
import "./SkillsTool.scss";

const skillsTool = () => {
  return (
    <ul className={`skills-tool`}>
      {data.map((item, index) => {
        return (
          <li key={index} className={`skills-tool__item`}>
            <img src={item} className={`skills-tool__img`} />
          </li>
        );
      })}
    </ul>
  );
};

export default skillsTool;
