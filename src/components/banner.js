import React from "react";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

function ContentBanner(props) {
  return (
    <Box color="primary" {...props}>
      {props.children}
      <span style={{ clear: "both", display: "block" }}></span>
    </Box>
  );
}

const StyledBackgroundSection = styled(ContentBanner)`
  padding: 2em;
`;

export default StyledBackgroundSection;
