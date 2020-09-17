import React from "react";
import { connect } from "react-redux";
import { handleTopDropDisplay } from "../../actions/TopDropDisplay";
import "./NavBanner.scss";

const navBanner = ({ topDropDisplay, handleTopDropDisplay }) => {
  return topDropDisplay ? (
    <div
      className={`nav-banner`}
      onClick={() => {
        handleTopDropDisplay(topDropDisplay);
      }}
    ></div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    topDropDisplay: state.topDropDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTopDropDisplay: (topDropDisplay) => {
      dispatch(handleTopDropDisplay(topDropDisplay));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navBanner);
