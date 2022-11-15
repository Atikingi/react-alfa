import classnames from 'classnames';
import { Loader } from '@alfalab/core-components/loader';
import React, { useState } from 'react';
import styles from './style.module.css';

type Props = {
  avatar: string;
  firstName: string;
  lastName: string;
};

const UserAvatar = ({ avatar, firstName, lastName }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageWrapperClass = classnames(styles.imageWrapper, {
    [styles.imageShow]: imageLoaded,
  });
  const loaderWrapperClass = classnames(styles.loaderWrapper, {
    [styles.loaderHidden]: imageLoaded,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.avatarWrapper}>
      <div className={loaderWrapperClass}>
        <Loader />
      </div>
      <div className={imageWrapperClass}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`${firstName} ${lastName}`}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
