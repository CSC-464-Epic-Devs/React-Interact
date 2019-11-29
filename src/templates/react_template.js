import React from 'react';

import Header from '../components/header';
import '../components/styles/layout.css';

import { makeStyles } from '@material-ui/core/styles';

import { graphql } from 'gatsby';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CodeBlock from 'components/Editors/CodeBlock';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Paper from '@material-ui/core/Paper';

const primary = '#190c43';
const secondary = '#430c36';

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
  paper: { background: secondary }
}));

/* eslint-disable */
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
};
/* eslint-enable */

const ReactTemplate = ({ data }) => {
  const post = data.mdx;
  const classes = useStyles(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <div>
            <Paper className={classes.paper}>
              <MDXProvider components={components}>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </Paper>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`;

export default ReactTemplate;
