import React, { ReactNode } from 'react';
import { Tooltip } from '@alfalab/core-components/tooltip';
import { Typography } from '@alfalab/core-components/typography';
import { Circle } from '@alfalab/core-components/icon-view/components';
import { Position } from '@alfalab/core-components/popover';
import styles from './style.module.css';

type Props = {
  tooltipPosition: Position;
  text: string;
  description: string;
  children: ReactNode;
};

const UserInfo = ({ tooltipPosition, text, description, children }: Props) => {
  return (
    <Tooltip
      position={tooltipPosition}
      trigger="hover"
      content={
        <div className={styles.tooltipContent}>
          <Typography.Title tag="h5" view="xsmall" color="primary">
            {text}
          </Typography.Title>
          <Typography.Text tag="p" view="primary-small" color="primary">
            {description}
          </Typography.Text>
        </div>
      }
      fallbackPlacements={['top', 'right']}
    >
      <Circle
        className={styles.circle}
        size={80}
        border={true}
        backgroundColor="#ef3124"
      >
        {children}
      </Circle>
    </Tooltip>
  );
};

export default UserInfo;
