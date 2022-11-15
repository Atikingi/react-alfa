import { Switch } from '@alfalab/core-components/switch';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import React, { useState } from 'react';
import { filteredData } from '../../store/actions/creators/app';
import { fetchData } from '../../store/actions/thunks/app';
import styles from './style.module.css';
import { useAppDispatch } from '../../store/store';

const Filter = () => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    dispatch(filteredData());
  };

  const showMoreUsers = () => {
    dispatch(fetchData());
  };

  return (
    <div className={styles.wrapper}>
      <Button view="primary" onClick={showMoreUsers}>
        Refresh
      </Button>
      <Switch
        checked={checked}
        onChange={handleChange}
        reversed={true}
        label={
          <Typography.Title tag="div" view="xsmall" color="accent">
            {checked ? 'Show all' : 'Show favorite'}
          </Typography.Title>
        }
      />
    </div>
  );
};

export default Filter;
