import React from "react";
import data from "./TopNavData";
import Container from "../../containers/Container/Container";
import Row from "../../containers/Row/Row";
import TopLink from "../TopLink/TopLink";
import TopDrop from "../TopDrop/TopDrop";

const topNav = () => {
  return (
    <div>
      <Container>
        <Row>
          <div>
            <img src={data.img} />
          </div>
          <div>
            <TopLink links={data.links} />
          </div>
          <button>
            <span></span>
          </button>
        </Row>
        <Row>
          <TopDrop links={data.links} />
        </Row>
      </Container>
    </div>
  );
};

export default topNav;
