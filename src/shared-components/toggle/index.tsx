import PropTypes from 'prop-types';
import React from 'react';
// @ts-ignore
import ToggleButton from 'react-toggle-button';

import { COLORS } from '../../constants';
import {
  Container,
  Label,
  ReactToggleButtonContainer,
  trackStyle,
  thumbStyle,
} from './style';

const propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

type ToggleProps = {
  checked?: boolean;
  label?: string;
  onChange: () => void;
};

/**
 * react-toggle-button in-lines all of its styling.
 * toggleInputStyles overrides the defaults.
 */
const toggleInputStyles = {
  margin: '0',
  height: '24px',
  width: '40px',
  position: 'absolute',
};

const Toggle = ({ checked = false, label = '', onChange }: ToggleProps) => (
  <Container>
    {label && <Label onClick={onChange}>{label}</Label>}
    <ReactToggleButtonContainer>
      <ToggleButton
        value={checked || false}
        onToggle={onChange}
        inactiveLabel=""
        activeLabel=""
        thumbStyle={thumbStyle}
        trackStyle={trackStyle}
        thumbAnimateRange={[1, 17]}
        icons={false}
        colors={{
          active: {
            base: COLORS.secondary,
          },
          inactive: {
            base: COLORS.purple15,
          },
          activeThumb: {
            base: COLORS.white,
          },
          inactiveThumb: {
            base: COLORS.white,
          },
        }}
        passThroughInputProps={{ style: toggleInputStyles }}
      />
    </ReactToggleButtonContainer>
  </Container>
);

Toggle.propTypes = propTypes;

export default Toggle;
