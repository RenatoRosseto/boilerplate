import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    { primary, size, backgroundColor, ariaLabel, label, onClick, ...props },
    ref,
  ) => {
    return (
      <CustomButton
        type="button"
        primary={primary}
        size={size}
        backgroundColor={backgroundColor}
        aria-label={ariaLabel}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {label}
      </CustomButton>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ariaLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
