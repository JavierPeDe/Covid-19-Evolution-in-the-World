import React, { useState } from 'react';
import { Home } from './components/Home';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper, Switch, Typography } from "@material-ui/core";
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
          <Switch checked={dark} className={styles.darkMode} onChange={() => setDark(!dark)} />
          <Typography className={styles.mainTitle} variant="h1">Covid 19</Typography>
          <Home />
        </Paper>
      </ThemeProvider>
    </div>
  );
};