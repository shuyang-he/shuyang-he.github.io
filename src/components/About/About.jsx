import React from "react";
import data from "./AboutData";
import AboutLinks from "../AboutLinks/AboutLinks";
import "./About.scss";

const about = () => {
  return (
    <div className={`about`}>
      <div className={`about__title`}>
        <h1 className={`about__name`}>{data.name}</h1>
        <p className={`about__contact`}>{data.contact}</p>
      </div>
      <p className={`about__content`}>{data.content}</p>
      <AboutLinks />
    </div>
  );
};

export default about;
