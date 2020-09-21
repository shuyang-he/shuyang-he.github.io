import React from "react";
import "./SectionTitle.scss";

const sectionTitle = ({ children, title }) => {
  return (
    <div className={`section-title`}>
      <h2 className={`section-title__title`}>{title}</h2>
      {children}
    </div>
  );
};

export default sectionTitle;
