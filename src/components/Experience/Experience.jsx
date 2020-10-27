import React from "react";
import data from "./ExperienceData";
import "./Experience.scss";

const experience = () => {
  return (
    <ul className={`experience-con`}>
      {data.content.map((item, index) => {
        return (
          <li key={index} className={`experience`}>
            <div className={`experience__icon-con`}>
              <img src={item.icon} className={`experience__icon`} />
            </div>
            <div className={`experience__content-con`}>
              <h3 className={`experience__title`}>{item.title}</h3>
              <h4 className={`experience__duty`}>{item.duty}</h4>
              <ul className={`experience__content`}>
                {item.content.map((item, index) => {
                  return (
                    <li key={index} className={`experience__item`}>
                      <h5>{item}</h5>
                    </li>
                  );
                })}
              </ul>
              <h5 className={`experience__duration`}>{item.duration}</h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default experience;
