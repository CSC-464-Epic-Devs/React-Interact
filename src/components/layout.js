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

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  }
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
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
              <a href="https://github.com/CSC-464-Regular-Devs">Regular Devs</a>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
