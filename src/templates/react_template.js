import React from 'react';

import Header from '../components/header';
import '../components/styles/layout.css';

import { makeStyles } from '@material-ui/core/styles';

import { graphql } from 'gatsby';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import CodeBlock from 'components/Editors/CodeBlock';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Paper from '@material-ui/core/Paper';

const primary = '#202020';
const secondary = '#00ff99';

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
    spacing: 5
});

/* eslint-disable */
const useStyles = makeStyles(theme => ({
  paper: { background: '#303030' }
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
                    <Header />
                    <div>
                        <Paper className={classes.paper}>
                            <MDXProvider components={components}>
                                <MDXRenderer>{post.body}</MDXRenderer>
                            </MDXProvider>
                        </Paper>
                    </div>
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
