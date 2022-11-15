import React from 'react';
import { Typography } from '@alfalab/core-components/typography';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Typography.Title className={styles.text} tag="div">
        Created by Igumentsev Nikita
      </Typography.Title>
      <Typography.Title className={styles.text} tag="div">
        Powered by Alfa-bank core-components
      </Typography.Title>
    </footer>
  );
};

export default Footer;
