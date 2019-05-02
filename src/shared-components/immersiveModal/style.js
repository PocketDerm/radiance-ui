import styled from '@emotion/styled';

import Typography from '../typography';
import {
  BREAKPOINTS,
  COLORS,
  MEDIA_QUERIES,
  SPACING,
  Z_SCALE,
} from '../../constants';

export const Overlay = styled.div`
  background-color: ${COLORS.overlay};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  background-color: ${COLORS.white};
  height: 100vh;
  margin: 0 auto;
  max-width: ${BREAKPOINTS.sm}px;
  overflow-y: auto;
  position: relative;
  width: 100%;

  ${MEDIA_QUERIES.mdUp} {
    height: auto;
    max-width: ${({ maxWidth }) =>
      maxWidth === 'medium' ? `776px` : `${BREAKPOINTS.sm}px`};
    margin-bottom: ${SPACING.base};
    margin-top: ${SPACING.base};
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  right: ${SPACING.small};
  top: ${SPACING.small};
  z-index: ${Z_SCALE.e2000};
`;

export const CopyContainer = styled.div`
  padding: ${SPACING.medium} ${SPACING.base};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACING.large} ${SPACING.medium};
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: ${SPACING.small};
  text-align: left;
`;

export const Body = styled.div`
  color: ${COLORS.purple85};
  text-align: left;

  &:not(:last-child) {
    margin-bottom: ${SPACING.base};
  }

  p > a {
    text-transform: none;
  }
`;

export const Footer = styled.div`
  margin-bottom: ${SPACING.xsmall};
`;
