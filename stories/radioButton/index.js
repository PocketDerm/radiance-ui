import React from 'react';
import {storiesOf} from '@storybook/react';
import {withDocs} from 'storybook-readme';
import {withKnobs, text, boolean, select, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {css} from '@emotion/core';

import RadioButtonReadme from 'docs/radioButton.md';
import { RadioButton, Typography } from 'src/shared-components';
import {SPACING} from 'src/constants';
import { ThumbsUpIcon } from "src/svgs/icons";

const stories = storiesOf('RadioButton', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(RadioButtonReadme, () => (
    <React.Fragment>
      <RadioButton type='primary' checked>
        This is a primary radio button
      </RadioButton>
      <RadioButton type='secondary' checked>
        This is a secondary radio button
      </RadioButton>
      <Typography.Heading css={css`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <RadioButton
        checked={boolean('checked', false)}
        type={select('type', ['primary', 'secondary'], 'primary')}
        onClick={action('radio button clicked')}
        Icon={boolean('icon', false) ? ThumbsUpIcon : null}
        iconWidth={number('iconWidth', 11)}
        iconHeight={number('iconHeight', 11)}
      >
        {text('children', 'Render radio label here')}
      </RadioButton>
    </React.Fragment>
  )),
);

