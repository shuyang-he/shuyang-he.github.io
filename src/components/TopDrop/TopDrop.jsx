import React from "react";

const topDrop = ({ links }) => {
  return (
    <ul>
      {links.map((item, index) => {
        <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default topDrop;
