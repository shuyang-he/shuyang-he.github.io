import React from "react";

const makeStyle = (size = 1) => {
  return {
    display: "flex",
    flexBasis: `${(size / 12) * 100}%`,
  };
};

const col = ({ children, className, size }) => {
  return (
    <div style={makeStyle(size)} className={className}>
      {children}
    </div>
  );
};

export default col;
