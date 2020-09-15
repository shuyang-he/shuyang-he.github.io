import React from "react";

const style = (size) => {
  return {
    display: "flex",
    flexBasis: `${(size / 12) * 100}%`,
  };
};

const col = ({ children, size }) => {
  return <div style={() => style(size)}>{children}</div>;
};

export default col;
