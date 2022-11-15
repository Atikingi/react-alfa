import React from 'react';
import UsersList from '../users-list';
import styles from './style.module.css';

const UsersListContainer = () => {
  return (
    <section className={styles.container} data-test-id="users-container">
      <UsersList />
    </section>
  );
};

export default UsersListContainer;
