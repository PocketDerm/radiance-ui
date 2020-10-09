import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { COLORS } from 'src/constants';
import CameraIcon from 'src/svgs/icons/camera-icon.svg';

export const WithControls = () => (
  <CameraIcon
    width={number('width', 16)}
    height={number('height', 16)}
    fill={text('Icon fill color', COLORS.primary)}
    inline={boolean('inline display option', false)}
    rotate={number('Rotation degrees', 0)}
    className={text('additional css class names', '')}
  />
);