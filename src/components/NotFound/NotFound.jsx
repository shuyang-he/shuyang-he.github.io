import React from "react";
import { useLocation } from "react-router-dom";
import "./NotFound.scss";

const notFound = () => {
  let location = useLocation();
  return (
    <div className={`not-found`}>
      <h1 className={`not-found__content`}>
        The requested URL {location} was not found on this server.
      </h1>
    </div>
  );
};

export default notFound;
