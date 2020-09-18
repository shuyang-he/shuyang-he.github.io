import React from "react";
import data from "./AboutLinksData";

const aboutLinks = () => {
  return (
    <ul className={`about-links`}>
      {data.map((item) => {
        return (
          <li>
            <a href={item.link} className={`about-links__link`}>
              <img src={item.img} className={`about-links__img`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default aboutLinks;
