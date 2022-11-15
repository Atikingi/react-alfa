import React from 'react';
import { Typography } from '@alfalab/core-components/typography';
import styles from './style.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography.Title tag="h1" color="secondary" className={styles.title}>
        Test project for Alfa-bank
      </Typography.Title>
      <a href="/react-alfa">
        <img
          src="/react-alfa/img/alfa-logo.png"
          width="200"
          height="130"
          alt="Alfa-bank"
          className={styles.logo}
        />
      </a>
    </header>
  );
};

export default Header;
