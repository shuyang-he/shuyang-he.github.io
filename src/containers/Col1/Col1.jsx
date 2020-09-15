import React from "react";
import style from "./Col1.css";

const col1 = ({ children }) => {
  return <div className={style.col1}>{children}</div>;
};

export default col1;
