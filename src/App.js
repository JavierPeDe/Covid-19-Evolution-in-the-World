import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import { Info } from "./components/Info";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import styles from './App.module.css';

export const App = () => {
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  })

  return (
    <div className={styles.main}>
      <ThemeProvider theme={theme}>
        <Paper>
          <BrowserRouter>
            <Switch checked={dark} className={styles.darkMode} onChange={() => setDark(!dark)} />
            <Switch>
              <Route exact path="/">
                <Info />
              </Route>
              <Route path="/home">
                <Typography className={styles.mainTitle} variant="h1">Covid 19</Typography>
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </div>
  );
};