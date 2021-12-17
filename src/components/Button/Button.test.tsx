import each from 'jest-each';
import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Button from './';

const renderButton = (props) => render(<Button {...props} />);

describe('<Button />', () => {
  it('should render the button component', () => {
    renderButton({
      label: 'Botão',
    });

    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render button component disabled', () => {
    renderButton({
      label: 'Botão',
      disabled: true,
      ariaLabel: 'botão desabilidado',
    });

    expect(screen.getByLabelText(/botão desabilidado/i)).toBeInTheDocument();

    expect(screen.getByText(/Botão/i)).toHaveStyleRule('cursor', 'not-allowed');
    expect(screen.getByRole('button')).toHaveStyleRule('opacity', '0.3');

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render the button and test the click event', () => {
    renderButton({
      label: 'Botão',
    });

    fireEvent.click(screen.getByText(/Botão/i));
  });

  describe('styles', () => {
    each`
    primary  | color      | backgroundColor  | size        | fontSize  | padding
    ${true}  | ${'white'} | ${'#1ea7fd'}     | ${'small'}  | ${'12px'} | ${'10px 16px'}
    ${false} | ${'#333'}  | ${'transparent'} | ${'medium'} | ${'14px'} | ${'11px 20px'}
    ${false} | ${'#333'}  | ${'transparent'} | ${'large'}  | ${'16px'} | ${'12px 24px'}
  `.it(
      'must render the styles correctly primary = $primary | size = $size | fontSize = $fontSize | padding = $padding | backgroundColor = $backgroundColor',
      ({ primary, color, backgroundColor, size, fontSize, padding }) => {
        renderButton({
          primary,
          size,
          label: 'Botão',
        });

        expect(screen.getByText(/Botão/i)).toHaveStyleRule('color', color);

        expect(screen.getByText(/Botão/i)).toHaveStyleRule(
          'background-color',
          backgroundColor,
        );
        expect(screen.getByText(/Botão/i)).toHaveStyleRule(
          'font-size',
          fontSize,
        );
        expect(screen.getByText(/Botão/i)).toHaveStyleRule('padding', padding);
      },
    );
  });
});
