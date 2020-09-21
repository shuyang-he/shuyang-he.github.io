import React from "react";
import "./Toplink.scss";

const topLink = ({ links }) => {
  return (
    <ul className={`top-link`}>
      {links.map((item, index) => {
        return (
          <li key={index}>
            <h5>
              <a href={item.content} className={`top-link__link`}>
                {item.title}
              </a>
            </h5>
          </li>
        );
      })}
    </ul>
  );
};

export default topLink;
