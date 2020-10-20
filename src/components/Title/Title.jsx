import React from "react";
import "./Title.scss";

const title = ({ title }) => {
  return (
    <div className={`title`}>
      <h2 className={`title__content`}>{title}</h2>
    </div>
  );
};

export default title;
