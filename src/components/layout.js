/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./styles/layout.css";

import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const primary = "#004d84";
const secondary = "#05a68e";

import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: {
      main: secondary
    },
    text: {
      primary: "#fff",
      secondary: "#000000"
    }
  },
  spacing: 2
});

/* eslint-disable */
const useStyles = makeStyles(theme => ({
  paper: { background: "rgb(72,72,72)" }
}));

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const classes = useStyles(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <Paper className={classes.paper}>{children}</Paper>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
