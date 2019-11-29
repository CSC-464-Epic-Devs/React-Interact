import { Link } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core/';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            justify="space-between" // Add it here :)
            container
          >
            <Grid item>
              <Typography variant="h3" edge="start" aria-label="menu">
                React Interact
              </Typography>
            </Grid>
            <Grid item style={{ margin: 'auto 0' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.menuButton}
                >
                  Home
                </Button>
              </Link>
              <Link to="/tutorials" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.menuButton}
                >
                  Tutorials
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
