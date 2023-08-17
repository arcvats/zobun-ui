import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@zobun/atoms';

const meta = {
  title: 'Zobun UI/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text', 'neo', 'glass', 'circular'],
      control: { type: 'select' },
      description: 'The variant to use.',
      defaultValue: 'contained',
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Submit'
  },
};

export const Secondary: Story = {
  args: {
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
