import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../';
import { ButtonProps } from '../Button.types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};
