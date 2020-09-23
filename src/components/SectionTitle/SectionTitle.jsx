import React from "react";
import "./SectionTitle.scss";

const sectionTitle = ({ children, id, title }) => {
  return (
    <div className={`section-title`} id={`${id === undefined ? "" : id}`}>
      <h2 className={`section-title__title`}>{title}</h2>
      {children}
    </div>
  );
};

export default sectionTitle;
