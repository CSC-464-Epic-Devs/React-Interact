import React from "react";
import "./styles/highLightLink.css";
import { Link } from "gatsby";

function HighLightLink(props) {
  return (
    <a className="highLightLink" {...props}>
      {props.children}
    </a>
  );
}

export default HighLightLink;
