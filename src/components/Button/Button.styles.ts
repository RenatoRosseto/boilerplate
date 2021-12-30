import styled from 'styled-components';
import media from 'styled-media-query';

import { ButtonProps } from './Button.types';

type BtnProps = Pick<
  ButtonProps,
  'primary' | 'size' | 'backgroundColor' | 'fullWidth'
>;

const storybookButtonPrimary = `
  color: white;
  background-color: #1ea7fd;
`;

const storybookButtonSecondary = `
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const storybookButtonSmall = `
  font-size: 12px;
  padding: 10px 16px;
`;

const storybookButtonMedium = `
  font-size: 14px;
  padding: 11px 20px;
`;

const storybookButtonLarge = `
  font-size: 16px;
  padding: 12px 24px;
`;

const storybookButtonFullWidth = `
  width: 100%;
`;

const storybookButtonDisabled = `
  cursor: not-allowed;
  opacity: 0.3;
`;

const CustomButton = styled.button<BtnProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ primary }) =>
    primary
      ? `
      ${storybookButtonPrimary}
  `
      : `
      ${storybookButtonSecondary}
  `}

  ${({ size }) =>
    size === 'small'
      ? `
      ${storybookButtonSmall}
  `
      : size === 'medium'
      ? `
      ${storybookButtonMedium}
  `
      : `
  ${storybookButtonLarge}
`}

  ${({ disabled }) =>
    disabled &&
    `
      ${storybookButtonDisabled}
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      ${storybookButtonFullWidth}
  `}

  background-color: ${({ backgroundColor }) => backgroundColor};

  ${media.lessThan('medium')`
    background-color: green;
  `}
`;

export default CustomButton;
