import React from 'react';
import styled from '@emotion/styled';
import { text, number } from '@storybook/addon-knobs';
import { LoadingSpinner } from 'src/shared-components';
import { COLORS } from 'src/constants';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';

const SpinnerContainer = styled.div`
  position: relative;
  height: 100px;
`;

export const Default = () => (
  <SpinnerContainer>
    <LoadingSpinner />
  </SpinnerContainer>
);

Default.parameters = {
  chromatic: { disable: false },
};

export const WithTranslateX = () => (
  <SpinnerContainer>
    <LoadingSpinner translateX="50px" />
  </SpinnerContainer>
);

export const WithDuration = () => (
  <SpinnerContainer>
    <LoadingSpinner duration={4} />
  </SpinnerContainer>
);

export const WithControls = () => (
  <SpinnerContainer>
    <LoadingSpinner
      bgColor={text('bgColor', COLORS.background)}
      color={text('color', COLORS.primary)}
      translateX={text('translateX', '100px')}
      duration={number('duration', 2)}
      size={text('size', '14px')}
    />
  </SpinnerContainer>
);

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    chromatic: { disable: true },
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { LoadingSpinner } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;