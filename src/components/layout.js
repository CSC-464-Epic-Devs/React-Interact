/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './styles/layout.css';

import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const primary = '#202020';
const secondary = '#00ff99';

import Paper from '@material-ui/core/Paper';

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
  paper: { background: "#303030" }
}));

export default function Layout({ children }) {
  const classes = useStyles(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
          <Header />
          <div>
            <Paper className={classes.paper}>{children}</Paper>
          </div>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
