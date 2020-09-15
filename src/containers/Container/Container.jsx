import React from "react";
import style from "./Container.css";

const container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default container;
