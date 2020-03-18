import React from "react";
import "./styles/highLightLink.css";
import { Link } from "gatsby";

function HighlightLink(props) {
  if (props.href === null) {
    return <></>;
  }

  /* If it is an internal link: use gatsby Link */
  if (props.href.charAt(0) == "/") {
    return (
      <Link to={props.href} className="highLightLink" {...props}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <a href={props.href} className="highLightLink" {...props}>
        {props.children}
      </a>
    );
  }
}

export default HighlightLink;
