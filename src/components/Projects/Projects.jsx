import React from "react";
import data from "./ProjectsData";
import "./Projects.scss";
import Icon from "../../assets/img/toolbox.svg";

const projects = () => {
  return (
    <ul className={`projects-con`}>
      {data.content.map((item, index) => {
        return (
          <li key={index} className={`projects`}>
            <div className={`projects__icon-con`}>
              <Icon className={`projects__icon`} />
            </div>
            <div className={`projects__content-con`}>
              <h3 className={`projects__title`}>{item.title}</h3>
              <ul className={`projects__content`}>
                {item.content.map((item, index) => {
                  return (
                    <li key={index} className={`projects__item`}>
                      <h5>{item}</h5>
                    </li>
                  );
                })}
              </ul>
              <h5 className={`projects__duration`}>{item.duration}</h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default projects;
