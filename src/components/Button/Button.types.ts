import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AriaAttributes {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  ariaLabel?: string;
  label: string;
  onClick?: () => void;
}

export { ButtonProps };
