import React from 'react';
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};
