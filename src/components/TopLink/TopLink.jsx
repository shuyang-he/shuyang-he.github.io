import React from "react";
import "./Toplink.scss";

const topLink = ({ links }) => {
  return (
    <ul className={`top-link`}>
      {links.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.content} className={`top-link__link`}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default topLink;
