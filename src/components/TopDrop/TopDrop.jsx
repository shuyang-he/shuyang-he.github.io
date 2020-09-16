import React from "react";
import "./TopDrop.scss";

const topDrop = ({ links }) => {
  return (
    <ul className={`top-drop`}>
      {links.map((item, index) => {
        return (
          <li key={index} className={`top-drop__item`}>
            <a href={item.content} className={`top-drop__link`}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default topDrop;
