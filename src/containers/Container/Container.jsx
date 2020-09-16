import React from "react";
import "./Container.scss";

const container = ({ children, className }) => {
  return (
    <div className={`container ${className === undefined ? "" : className}`}>
      {children}
    </div>
  );
};

export default container;
