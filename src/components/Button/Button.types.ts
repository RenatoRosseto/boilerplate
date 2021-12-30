import React from 'react';

// export type ButtonProps = {
//   primary?: boolean;
//   size?: 'small' | 'medium' | 'large';
//   fullWidth?: boolean;
//   id?: string;
// };
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AriaAttributes {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}
