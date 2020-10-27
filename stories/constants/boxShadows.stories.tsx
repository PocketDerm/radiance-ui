import React from 'react';
import { css } from '@emotion/core';
import styled from 'src/utils/theming/styled';
import { SPACER } from 'src/constants';
import * as BOX_SHADOWS from 'src/constants/boxShadows';
import { Container, Typography } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
`;

const BoxesContainer = styled.div`
  margin: ${SPACER.xlarge} 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const { default: defaultExport, ...VALID_BOX_SHADOWS } = BOX_SHADOWS;

export const BoxShadows = () => (
  <MainContainer>
    {Object.keys(VALID_BOX_SHADOWS).map((category) => {
      const categoryBoxShadows = BOX_SHADOWS[category];

      return (
        <React.Fragment key={category}>
          <Typography.Title>{category}:</Typography.Title>
          <BoxesContainer>
            {Object.keys(categoryBoxShadows).map((shadow) => {
              const boxShadowValue = categoryBoxShadows[shadow];

              const styles = css`
                width: 350px;
                margin: ${SPACER.large};
                box-shadow: ${boxShadowValue};
              `;

              return (
                <Container key={shadow} css={styles}>
                  <Container.Section>
                    <strong>Key:</strong> {shadow}
                    <br />
                    <br />
                    <strong>Value:</strong> {boxShadowValue}
                  </Container.Section>
                </Container>
              );
            })}
          </BoxesContainer>
        </React.Fragment>
      );
    })}
  </MainContainer>
);

BoxShadows.storyName = 'BOX_SHADOWS';
