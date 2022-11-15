import React from 'react';
import UserListContainer from './components/users-list-container';
import Header from './components/header';
import Filter from './components/user-filter';
import Footer from './components/footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.line} />
      <Filter />
      <UserListContainer />
      <div className={styles.line} />
      <Footer />
    </div>
  );
}

export default App;
