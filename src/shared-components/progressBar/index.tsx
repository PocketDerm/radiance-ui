import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, PROGRESS_BAR_STATUS } from '../../constants';
import { OuterContainer, InnerBar } from './style';

export type ProgressBarStatusType =
  | typeof PROGRESS_BAR_STATUS.error
  | typeof PROGRESS_BAR_STATUS.loading
  | typeof PROGRESS_BAR_STATUS.success;

type ProgressBarProps = {
  backgroundColor?: string;
  barColor?: string;
  height?: number;
  loadingTime?: string;
  status: ProgressBarStatusType;
  // ...rest type
  [key: string]: any;
};

const ProgressBar = ({
  backgroundColor = COLORS.background,
  barColor = COLORS.primary,
  height = 4,
  loadingTime = '20s',
  status,
  ...rest
}: ProgressBarProps) => (
  <OuterContainer
    status={status}
    height={height}
    backgroundColor={backgroundColor}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <InnerBar
      status={status}
      height={height}
      barColor={barColor}
      loadingTime={loadingTime}
    />
  </OuterContainer>
);

ProgressBar.defaultProps = {
  backgroundColor: COLORS.background,
  barColor: COLORS.primary,
  height: 4,
  loadingTime: '20s',
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  barColor: PropTypes.string,
  height: PropTypes.number,
  loadingTime: PropTypes.string,
  status: PropTypes.oneOf([
    PROGRESS_BAR_STATUS.loading,
    PROGRESS_BAR_STATUS.success,
    PROGRESS_BAR_STATUS.error,
  ]).isRequired,
};

export default ProgressBar;