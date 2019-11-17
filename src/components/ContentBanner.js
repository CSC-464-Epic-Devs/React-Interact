import React from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

function ContentBanner(props) {
  return (
    <Box p={6} {...props}>
      {props.children}
      <span style={{ clear: "both", display: "block" }}></span>
    </Box>
  );
}

export default ContentBanner;
