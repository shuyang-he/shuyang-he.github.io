import React from "react";
import Container from "../../containers/Container/Container";
import "./Section.scss";

const section = ({ children }) => {
  return (
    <div className={`section`}>
      <Container className={`section__container`}>{children}</Container>
    </div>
  );
};

export default section;
