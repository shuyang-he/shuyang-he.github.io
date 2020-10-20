import React from "react";
import { connect } from "react-redux";
import { handleTopDropDisplay } from "../../actions/TopDropDisplay";
import data from "./NavData";
import Container from "../Container/Container";
import Row from "../Row/Row";
import NavLink from "./Link/Link";
import NavDrop from "./Drop/Drop";
import "./Nav.scss";

const topNav = ({ topDropDisplay, handleTopDropDisplay }) => {
  return (
    <div className={`top-nav`}>
      <div className={`top-nav__main`}>
        <Container>
          <Row className={`top-nav__content`}>
            <div className={`top-nav__img`}></div>
            <NavLink links={data.links} />
            <button
              className={`top-nav__button ${
                topDropDisplay ? "top-nav__button--active" : ""
              }`}
              onClick={() => {
                handleTopDropDisplay(topDropDisplay);
              }}
            >
              <span className={`top-nav__button-shape`}></span>
              <span className={`top-nav__button-shape`}></span>
              <span className={`top-nav__button-shape`}></span>
            </button>
          </Row>
        </Container>
      </div>
      <div className={`top-nav__sub`}>
        <Container>
          <NavDrop links={data.links} />
        </Container>
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(topNav);
