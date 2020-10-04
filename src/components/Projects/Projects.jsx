import React from "react";
import data from "./ProjectsData";
import "./Projects.scss";

const projects = () => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={index} className={`projects`}>
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
          </li>
        );
      })}
    </ul>
  );
};

export default projects;
