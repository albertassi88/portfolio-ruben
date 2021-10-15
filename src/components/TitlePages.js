import React from "react";
import PropTypes from "prop-types";
import "../styles/TitlePages.css";

function TitlePages (props) {
  const { title } = props;
  return (
    <div className="container-title">
      <h1>{title}</h1>
      <h2>{title}</h2>
    </div>
  );
} 

TitlePages.propTypes = {
  title: PropTypes.string,
};

export default TitlePages;