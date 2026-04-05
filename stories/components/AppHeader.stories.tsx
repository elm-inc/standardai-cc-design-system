import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AppHeader } from '../../src/components/AppHeader';

const meta: Meta<typeof AppHeader> = {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Application header with logo, main navigation, and user info.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    currentKey: 'home',
    userName: 'CS 田中 太郎',
  },
};

export const HistorySelected: Story = {
  args: {
    currentKey: 'history',
    userName: 'CS 田中 太郎',
  },
};

export const UsersSelected: Story = {
  args: {
    currentKey: 'users',
    userName: 'CS 田中 太郎',
  },
};
