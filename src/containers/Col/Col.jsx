import React from "react";
import style from "./Col.css";

const col = ({ children }) => {
  return <div className={style.col}>{children}</div>;
};

export default col;
