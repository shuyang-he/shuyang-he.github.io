import React from "react";
import style from "./Row.css";

const row = ({ children }) => {
  return <div className={style.row}>{children}</div>;
};

export default row;
