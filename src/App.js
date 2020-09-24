import React from 'react';
import styles from './App.module.css';
import SearchMovie from './searchMovie'

function App() {
  return (
    <div className={styles.App}>
      <h1>Cinephile.</h1>
      <SearchMovie />
      <p className={styles.fotext}>© Copyright 2020</p>
    </div>
    
  );
}

export default App;
