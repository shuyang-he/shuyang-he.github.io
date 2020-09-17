import React from "react";
import { connect } from "react-redux";
import "./TopDrop.scss";

const topDrop = ({ links, topDropDisplay }) => {
  return (
    <ul className={`top-drop ${topDropDisplay ? "top-drop--active" : ""}`}>
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

const mapStateToProps = (state) => {
  return {
    topDropDisplay: state.topDropDisplay,
  };
};

export default connect(mapStateToProps)(topDrop);
