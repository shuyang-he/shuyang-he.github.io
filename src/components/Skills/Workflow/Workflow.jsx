import React from "react";
import data from "./WorkflowData";
import "./Workflow.scss";

const skillsWorkflow = () => {
  return (
    <ul className={`skills-workflow`}>
      {data.map((item, index) => {
        return (
          <li key={index} className={`skills-workflow__item`}>
            <h4 className={`skills-workflow__title`}>{item}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default skillsWorkflow;
