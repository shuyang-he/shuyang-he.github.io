import React from "react";
import data from "./EducationData";
import "./Education.scss";
import Icon from "../../assets/img/education.svg";

const education = () => {
  return (
    <ul>
      {data.content.map((item, index) => {
        return (
          <li key={index} className={`education`}>
            <div className={`education__icon-con`}>
              <Icon className={`education__icon`} />
            </div>
            <div className={`education__content-con`}>
              <h3 className={`education__title`}>{item.title}</h3>
              <h4 className={`education__degree`}>{item.degree}</h4>
              <h5 className={`education__major`}>{item.major}</h5>
              <h5 className={`education__duration`}>{item.duration}</h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default education;
