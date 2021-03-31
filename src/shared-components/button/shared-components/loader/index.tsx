import React from 'react';

import ButtonLoader from './style';
import type { ThemeColors } from '../../../../constants';
import type { ButtonTypeWithAction } from '../../types';

export interface LoaderProps {
  buttonColor: ThemeColors;
  buttonType: ButtonTypeWithAction;
  className?: string;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading: boolean;
  textColor?: ThemeColors;
}

const Loader = ({
  buttonColor,
  buttonType,
  className = '',
  disabled,
  isFullWidth = false,
  isLoading,
  textColor,
}: LoaderProps) => (
  <ButtonLoader
    buttonColor={buttonColor}
    buttonType={buttonType}
    className={className}
    disabled={disabled}
    isFullWidth={!!isFullWidth}
    isLoading={isLoading}
    textColor={textColor}
  >
    <div>
      <span />
      <span />
      <span />
    </div>
  </ButtonLoader>
);

export default Loader;
