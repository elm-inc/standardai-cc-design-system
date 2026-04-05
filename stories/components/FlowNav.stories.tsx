import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { FlowNav } from '../../src/components/FlowNav';

const meta: Meta<typeof FlowNav> = {
  title: 'Components/FlowNav',
  component: FlowNav,
  parameters: {
    docs: {
      description: {
        component:
          'Arrow-shaped step navigation for call flow. Active step is highlighted in blue.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FlowNav>;

const sampleSteps = [
  { key: 'ring', label: 'リング' },
  { key: 'delivery-info', label: '配送先案内' },
  { key: 'delivery-time', label: '配送時間確認' },
  { key: 'disposal', label: '破棄案内', hasMenu: true },
  { key: 'care', label: 'お手入れ案内' },
  { key: 'line', label: 'LINE案内' },
  { key: 'greeting', label: '名乗り・御礼', hasMenu: true },
];

export const Default: Story = {
  args: {
    steps: sampleSteps,
    activeKey: 'disposal',
  },
};

export const FirstStep: Story = {
  args: {
    steps: sampleSteps,
    activeKey: 'ring',
  },
};

export const LastStep: Story = {
  args: {
    steps: sampleSteps,
    activeKey: 'greeting',
  },
};

export const WithSubItems: Story = {
  name: 'Expanded with Sub Items',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <FlowNav
        steps={[
          { key: 'unclear', label: '不明点確認', hasMenu: true },
          { key: 'greeting', label: '名乗り・御礼' },
        ]}
        activeKey="unclear"
      />
      <div style={{ display: 'flex', gap: 8, paddingLeft: 16 }}>
        {['商品AAAA', '商品BBBB', '商品CCCC'].map((label) => (
          <div
            key={label}
            style={{
              padding: '4px 12px',
              border: '1px solid var(--saiColorBorderSecondary)',
              borderRadius: 'var(--saiBorderRadiusMd)',
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  ),
};
