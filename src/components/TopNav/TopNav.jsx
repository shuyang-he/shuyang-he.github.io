import React from "react";
import data from "./TopNavData";
import Container from "../../containers/Container/Container";
import Row from "../../containers/Row/Row";
import TopLink from "../TopLink/TopLink";
import TopDrop from "../TopDrop/TopDrop";
import "./TopNav.scss";

const topNav = () => {
  return (
    <div className={`top-nav`}>
      <div className={`top-nav__main`}>
        <Container>
          <Row className={`top-nav__content`}>
            <div>
              <img className={`top-nav__img`} src={data.img} />
            </div>
            <TopLink links={data.links} />
            <button className={`top-nav__button`}>
              <span className={`top-nav__button-shape`}></span>
              <span className={`top-nav__button-shape`}></span>
              <span className={`top-nav__button-shape`}></span>
            </button>
          </Row>
        </Container>
      </div>
      <div className={`top-nav__sub`}>
        <Container>
          <Row>
            <TopDrop links={data.links} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default topNav;
