import React from "react";

const makeStyle = (size = 0) => {
  let basis = "auto";
  if (size > 0) {
    basis = `${(size / 12) * 100}%`;
  }
  return {
    display: "flex",
    flexBasis: basis,
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
