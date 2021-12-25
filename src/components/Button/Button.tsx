import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      primary,
      size,
      backgroundColor,
      fullWidth,
      ariaLabel,
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <CustomButton
        primary={primary}
        fullWidth={fullWidth}
        size={size}
        backgroundColor={backgroundColor}
        aria-label={ariaLabel}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {!!children && <span>{children}</span>}
      </CustomButton>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  primary: true,
  fullWidth: false,
  size: 'medium',
};

export default Button;
