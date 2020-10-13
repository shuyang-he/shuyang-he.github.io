import React from "react";
import { connect } from "react-redux";
import "./TopLink.scss";

const topLink = ({ links, sectionDisplay }) => {
  return (
    <ul className={`top-link`}>
      {links.map((item, index) => {
        return (
          <li key={index}>
            <h5>
              <a
                href={item.content}
                className={`top-link__link ${
                  sectionDisplay[item.title.toLowerCase()]
                    ? "top-link__link--active"
                    : ""
                }`}
              >
                {item.title}
              </a>
            </h5>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    sectionDisplay: state.sectionDisplay,
  };
};

export default connect(mapStateToProps)(topLink);
