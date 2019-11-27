/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../header";

import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const primary = "#FFD700";
const secondary = "#76ff03";

import Paper from "@material-ui/core/Paper";

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: { main: primary },
      secondary: {
        main: secondary
      },
      text: {
        primary: "#212121",
        secondary: "#ffffff"
      }
    },
    spacing: 2
  }
});

/* eslint-disable */
const useStyles = makeStyles(theme => ({
  paper: { background: "#424242" }
}));

export default function react_layout({ children }) {
  const classes = useStyles(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <div>
            <h1>hi</h1>
            <Paper className={classes.paper}>{children}</Paper>
            <footer>
              <div
                style={{
                  float: "left",
                  fontSize: "15px"
                }}
              >
                React Interact
              </div>
              <div
                style={{
                  textAlign: "end",
                  fontSize: "15px"
                }}
              >
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
