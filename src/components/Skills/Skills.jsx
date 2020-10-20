import React from "react";
import data from "./SkillsData";
import "./Skills.scss";
import SkillsTool from "./Tool/Tool";
import SkillsWorkflow from "./Workflow/Workflow";

const skills = () => {
  return (
    <div className={`skills`}>
      <div className={`skills__tool`}>
        <h3 className={`skills__tool-title`}>{data.tool}</h3>
        <SkillsTool />
      </div>
      <div className={`skills__workflow`}>
        <h3 className={`skills__workflow-title`}>{data.workflow}</h3>
        <SkillsWorkflow />
      </div>
    </div>
  );
};

export default skills;
