import React, { useEffect } from 'react';
import UserCard from '../user-card';
import { Spinner } from '@alfalab/core-components/spinner';
import { useSelector } from 'react-redux';
import { UserProps } from '../../store/reducers/types';
import { fetchData } from '../../store/actions/thunks/app';
import {
  getAllUsers,
  getFilteredStatus,
  getLoadingStatus,
} from '../../store/selectors/app';
import styles from './style.module.css';
import { useAppDispatch } from '../../store/store';
import classNames from 'classnames';

const UsersList = () => {
  const dispatch = useAppDispatch();

  const users = useSelector(getAllUsers);
  const isLoading = useSelector(getLoadingStatus);
  const isFiltered = useSelector(getFilteredStatus);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const cardsContainerClass = classNames(styles.container, {
    [styles.loader]: isLoading,
  });

  if (isLoading) {
    return <Spinner visible={true} size="m" data-test-id="loader" />;
  }

  return (
    <div className={cardsContainerClass} data-test-id="users-list">
      {users
        .filter((user: UserProps) => (isFiltered ? user.favorite : user))
        .map(
          ({
            login,
            name,
            picture,
            email,
            dob,
            location,
            phone,
          }: UserProps) => (
            <UserCard
              key={login.uuid}
              id={login.uuid}
              firstName={name.first}
              lastName={name.last}
              email={email}
              avatar={picture.large}
              age={dob.age}
              city={location.city}
              phoneNumber={phone}
              username={login.username}
            />
          )
        )}
    </div>
  );
};

export default UsersList;
