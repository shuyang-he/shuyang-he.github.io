import React from "react";
import { connect } from "react-redux";
import { handleTopDropDisplay } from "../../actions/TopDropDisplay";
import "./TopDrop.scss";

const topDrop = ({
  links,
  topDropDisplay,
  sectionDisplay,
  handleTopDropDisplay,
}) => {
  return (
    <ul className={`top-drop ${topDropDisplay ? "top-drop--active" : ""}`}>
      {links.map((item, index) => {
        return (
          <li key={index} className={`top-drop__item`}>
            <h5>
              <a
                href={item.content}
                className={`top-drop__link ${
                  sectionDisplay[item.title.toLowerCase()]
                    ? "top-drop__link--active"
                    : ""
                }`}
                onClick={() => {
                  handleTopDropDisplay(topDropDisplay);
                }}
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
    topDropDisplay: state.topDropDisplay,
    sectionDisplay: state.sectionDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTopDropDisplay: (topDropDisplay) => {
      dispatch(handleTopDropDisplay(topDropDisplay));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(topDrop);
