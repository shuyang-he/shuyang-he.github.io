import React from "react";
import data from "./EducationData";
import "./Education.scss";

const education = () => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={index} className={`education`}>
            <h3 className={`education__title`}>{item.title}</h3>
            <h4 className={`education__degree`}>{item.degree}</h4>
            <h5 className={`education__major`}>{item.major}</h5>
            <h5 className={`education__duration`}>{item.duration}</h5>
          </li>
        );
      })}
    </ul>
  );
};

export default education;
