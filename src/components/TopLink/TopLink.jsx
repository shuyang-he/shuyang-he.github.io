import React from "react";

const topLink = ({ links }) => {
  return (
    <ul>
      {links.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default topLink;
