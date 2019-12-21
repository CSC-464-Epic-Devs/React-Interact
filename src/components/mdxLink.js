import React from "react";
import "./styles/highLightLink.css";

function mdxLink(props) {
    return (
        <a href={props.href} className="highLightLink" {...props}>
            {props.children}
        </a>
    );
}

export default mdxLink;
