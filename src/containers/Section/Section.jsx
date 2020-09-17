import React from "react";
import Container from "../../containers/Container/Container";
import "./Section.scss";

const section = ({ children }) => {
  return (
    <div className={`section`}>
      <Container>{children}</Container>
    </div>
  );
};

export default section;
