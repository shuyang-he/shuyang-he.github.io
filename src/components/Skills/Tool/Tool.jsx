import React from "react";
import data from "./ToolData";
import "./Tool.scss";
import Row from "../../Row/Row";
import Col from "../../Col/Col";

const skillsTool = () => {
  return (
    <Row className={`skills-tool`}>
      {data.map((item, index) => {
        return (
          <Col key={index} className={`skills-tool__item`}>
            <img src={item} className={`skills-tool__img`} />
          </Col>
        );
      })}
    </Row>
  );
};

export default skillsTool;
