import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { handleSectionDisplay } from "../../actions/SectionDisplay";
import Container from "../Container/Container";
import "./Section.scss";
import useIntersect from "../../helpers/useIntersect";

const section = ({ children, id, handleSectionDisplay }) => {
  const ref = useRef();
  const entry = useIntersect(ref, {
    rootMargin: "0px 0px -99% 0px",
    threshold: 0,
  });

  useEffect(() => {
    handleSectionDisplay({ id: id, isIntersecting: entry.isIntersecting });
  });

  return (
    <div className={`section`} id={`${id === undefined ? "" : id}`} ref={ref}>
      <Container className={`section__container`}>{children}</Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSectionDisplay: ({ id, isIntersecting }) => {
      dispatch(handleSectionDisplay({ id, isIntersecting }));
    },
  };
};

export default connect(null, mapDispatchToProps)(section);
