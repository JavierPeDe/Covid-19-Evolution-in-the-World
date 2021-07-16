import React, { useState } from 'react';
import { Home } from './components/Home';
import { Info } from './components/Info';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Paper,
  Switch,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch as SwitchRouter,
  Route,
  Link,
} from 'react-router-dom';
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
            <Drawer
              style={{ width: ' 70px' }}
              variant="persistent"
              anchor="top"
              open={true}
              classes={{ paper: theme.MuiDrawer }}
            >
              <List
                style={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  
                }}
              >
                <div style={{display: 'flex',flexFlow: 'row wrap', minWidth:'20%'}}>
                <Link to="/" className={styles.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <AssessmentOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                  </ListItem>
                </Link>
                <Link to="/about" className={styles.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <InfoOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'About'} />
                  </ListItem>
                </Link>
                <ListItem
                  button
                  component="a"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/JavierPeDe/Covid-19-Evolution-in-the-World"
                  style={{width: '30%'}}
                >
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Github'} />
                </ListItem>
                </div>
                <div>
                <ListItem>
                  <h3 style={{ margin: '0' }}>Evolution of Covid-19</h3>
                </ListItem>
                </div>
                <div style={{width:'20%', textAlign:'right'}}>
                <ListItem>
                  <Switch
                    checked={dark}
                    className={styles.darkMode}
                    onChange={() => setDark(!dark)}
                  />
                </ListItem>
                </div>
              </List>
            </Drawer>

            {/* <Typography className={styles.mainTitle} variant="h1">
              Covid 19
            </Typography> */}
            <Route exact path="/">
              <div className={styles.homeContaine}> </div>
              <Home />
            </Route>
            <Route exact path="/about">
              <div className={styles.homeContaine}> </div>
              <Info />
            </Route>
          </Paper>
        </ThemeProvider>
      </div>
    </Router>
  );
};
