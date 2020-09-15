import React from "react";
import style from "./Row.scss";

const row = ({ children }) => {
  return <div className={style.row}>{children}</div>;
};

export default row;
