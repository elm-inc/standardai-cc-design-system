import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ActionBar } from '../../src/components/ActionBar';

const meta: Meta<typeof ActionBar> = {
  title: 'Components/ActionBar',
  component: ActionBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Call handling action bar with mode switcher (要件/QA/後処理), category selects, and end-call button.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionBar>;

export const YoukenMode: Story = {
  name: '要件すいすいモード',
  args: {
    activeMode: 'youken',
  },
};

export const QAMode: Story = {
  name: 'QAすいすいモード',
  args: {
    activeMode: 'qa',
  },
};

export const AfterMode: Story = {
  name: '後処理すいすいモード',
  args: {
    activeMode: 'after',
  },
};
