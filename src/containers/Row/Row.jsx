import React from "react";
import "./Row.scss";

const row = ({ children, className }) => {
  return (
    <div className={`row ${className === undefined ? "" : className}`}>
      {children}
    </div>
  );
};

export default row;
