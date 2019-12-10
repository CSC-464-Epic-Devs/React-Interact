import React from "react";
import "./styles/highLightLink.css";

function HighLightLink(props) {
  return (
    <a className="highLightLink" {...props}>
      {props.children}
    </a>
  );
}

export default HighLightLink;
