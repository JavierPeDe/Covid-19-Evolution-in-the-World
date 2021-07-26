import React, { useState } from 'react';
import { Home } from './components/Home';
import { Info } from './components/Info';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Paper,
  Switch,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './App.module.css';

export const App = () => {
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  });

  return (
    <Router>
      <div className={styles.main}>
        <ThemeProvider theme={theme}>
          <Paper>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <List className={styles.navbarList}>
                  <div className={styles.iconList}>
                    <Link to="/" className={styles.link}>
                      <ListItem button>
                        <ListItemIcon>
                          <AssessmentOutlinedIcon />
                        </ListItemIcon>

                        <Hidden smDown>
                          <ListItemText primary={'Home'} />
                        </Hidden>
                      </ListItem>
                    </Link>
                    <Link to="/about" className={styles.link}>
                      <ListItem button>
                        <ListItemIcon>
                          <InfoOutlinedIcon />
                        </ListItemIcon>
                        <Hidden smDown>
                          <ListItemText primary={'About'} />
                        </Hidden>
                      </ListItem>
                    </Link>
                    <ListItem
                      button
                      component="a"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/JavierPeDe/Covid-19-Evolution-in-the-World"
                      style={{ width: '30%' }}
                    >
                      <ListItemIcon>
                        <GitHubIcon />
                      </ListItemIcon>
                      <Hidden smDown>
                        <ListItemText primary={'Github'} />
                      </Hidden>
                    </ListItem>
                  </div>
                  <div>
                    <Switch
                      className={styles.darkMode}
                      checked={dark}
                      color="info"
                      onChange={() => setDark(!dark)}
                    />
                  </div>
                </List>
              </Toolbar>
            </AppBar>

            <Route exact path="/">
              <div className={styles.homeContainer}> </div>
              <Home />
            </Route>
            <Route exact path="/about">
              <Info />
            </Route>
          </Paper>
        </ThemeProvider>
      </div>
    </Router>
  );
};
