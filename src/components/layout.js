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
import blueGrey from "@material-ui/core/colors/blueGrey";
import Container from "@material-ui/core/Container";

import secondary from "@material-ui/core/colors/lightGreen";
import primary from "@material-ui/core/colors/blue";
import PaperPrimary from "@material-ui/core/colors/blueGrey";

import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    text: {
      primary: "#F5F5F5",
      secondary: "#000000"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  spacing: 8
});

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
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <Paper className={classes.paper}>{children}</Paper>
            <footer>
              <div
                style={{
                  float: "left",
                  fontSize: "15px"
                }}
              >
                Copyright © {new Date().getFullYear()},{` `}
                React Interact
              </div>
              <div
                style={{
                  textAlign: "end",
                  fontSize: "15px"
                }}
              >
                All rights reserved by &nbsp;
                <a href="https://github.com/CSC-464-Regular-Devs">
                  Regular Devs
                </a>
              </div>
            </footer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
