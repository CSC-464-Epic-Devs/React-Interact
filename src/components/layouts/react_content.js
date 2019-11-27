import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CodeBlock from 'components/Editors/CodeBlock';
import { MDXProvider } from '@mdx-js/react';

const primary = '#3f51b5';
const secondary = '#76ff03';

/* eslint-disable */
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};
/* eslint-enable */

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: {
      main: secondary
    },
    text: {
      primary: '#fff',
      secondary: '#000000'
    }
  },
  spacing: 2
});

/* eslint-disable */
const useStyles = makeStyles(theme => ({
  paper: { background: "rgb(72,72,72)" }
}));

export default function ContentBanner(props) {
  return (
    <MDXProvider components={components}>
      <>
        <ThemeProvider theme={theme}>
          <Box p={16} {...props}>
            {props.children}
            <span style={{ clear: "both", display: "block" }}></span>
          </Box>
        </ThemeProvider>
      </>
    </MDXProvider>
  );
}
