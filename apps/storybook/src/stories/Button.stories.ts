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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};

export const Neo: Story = {
  args: {
    variant: 'neo',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    color: 'primary',
    children: 'Submit',
    size: 'medium'
  },
};
