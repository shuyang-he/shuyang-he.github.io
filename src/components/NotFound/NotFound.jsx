import React from "react";
import { useLocation } from "react-router-dom";
import "./NotFound.scss";

const notFound = () => {
  const location = useLocation();
  return (
    <div className={`not-found`}>
      <h1 className={`not-found__content`}>
        {`The requested URL ${location.pathname} was not found on this server.`}
      </h1>
    </div>
  );
};

export default notFound;
