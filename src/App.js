import React from 'react';
import Cards from "./components/Cards/Cards";
import { CountryPicker } from "./components/CountryPicker";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.main}>
      <h1>Covid 19</h1>
      <div className={styles.container}>
        <CountryPicker />
        <Cards />
      </div>
    </div>
  );
};
