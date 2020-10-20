import React from "react";
import data from "./LinksData";
import "./Links.scss";

const aboutLinks = () => {
  return (
    <ul className={`about-links`}>
      {data.map((item, index) => {
        return (
          <li key={index} className={`about-links__item`}>
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
