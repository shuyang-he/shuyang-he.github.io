import React from "react";
import data from "./AboutData";
import AboutLinks from "../AboutLinks/AboutLinks";
import "./About.scss";

const about = () => {
  return (
    <div className={`about`}>
      <div className={`about__title`}>
        <h1 className={`about__name`}>{data.name}</h1>
        <h5 className={`about__contact`}>{data.contact}</h5>
      </div>
      <h4 className={`about__content`}>{data.content}</h4>
      <AboutLinks />
    </div>
  );
};

export default about;
