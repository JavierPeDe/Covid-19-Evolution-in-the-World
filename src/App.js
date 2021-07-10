import React from 'react';
import { Home } from './components/Home';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.main}>
      <h1>Covid 19</h1>
      <div className={styles.container}>
        <Home />
      </div>
    </div>
  );
};
