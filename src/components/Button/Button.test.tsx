import each from 'jest-each';
import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import Button from './';

describe('<Button />', () => {
  it('should render the button component', () => {
    render(<Button>Botão</Button>);

    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a green button when mobile mode', () => {
    render(<Button>Botão</Button>);

    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color',
      'green',
      {
        media: '(max-width: 768px)',
      },
    );
  });

  it('should render button component disabled', () => {
    const { container } = render(
      <Button disabled ariaLabel={'botão desabilidado'}>
        Botão
      </Button>,
    );

    // expect(screen.getByText(/Botão/i)).toHaveStyleRule('cursor', 'not-allowed');
    const button = container.querySelector('button');
    expect(button).toHaveStyleRule('cursor', 'not-allowed');

    expect(screen.getByLabelText(/botão desabilidado/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /botão/i })).toHaveStyleRule(
      'opacity',
      '0.3',
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render the button and test the click event', () => {
    render(<Button>Botão</Button>);

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
        const { container } = render(
          <Button primary={primary} size={size}>
            Botão
          </Button>,
        );

        const button = container.querySelector('button');
        expect(button).toHaveStyleRule('color', color);

        expect(button).toHaveStyleRule('background-color', backgroundColor);

        expect(button).toHaveStyleRule('font-size', fontSize);

        expect(button).toHaveStyleRule('padding', padding);

        // expect(screen.getByText(/Botão/i)).toHaveStyleRule('color', color);

        // expect(screen.getByText(/Botão/i)).toHaveStyleRule(
        //   'background-color',
        //   backgroundColor,
        // );

        // expect(screen.getByText(/Botão/i)).toHaveStyleRule(
        //   'font-size',
        //   fontSize,
        // );

        // expect(screen.getByText(/Botão/i)).toHaveStyleRule('padding', padding);
      },
    );
  });
});
