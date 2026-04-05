import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button, Space, Divider, Flex } from 'antd';
import { SearchOutlined, DownloadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Ant Design Button with StandardAI theme applied. Primary (#1677FF), Success (#73D13D), Warning (#FFA940), Danger (#FF4D4F).',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'middle',
  },
};

export const Types: Story = {
  name: 'All Types',
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <div>
        <Divider orientation="left" plain style={{ fontSize: 12, color: '#8C8C8C' }}>Standard</Divider>
        <Space wrap>
          <Button type="primary">Primary</Button>
          <Button type="default">Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">Link</Button>
        </Space>
      </div>
      <div>
        <Divider orientation="left" plain style={{ fontSize: 12, color: '#8C8C8C' }}>Danger</Divider>
        <Space wrap>
          <Button type="primary" danger>Primary</Button>
          <Button type="default" danger>Default</Button>
          <Button type="dashed" danger>Dashed</Button>
          <Button type="text" danger>Text</Button>
          <Button type="link" danger>Link</Button>
        </Space>
      </div>
      <div>
        <Divider orientation="left" plain style={{ fontSize: 12, color: '#8C8C8C' }}>Disabled</Divider>
        <Space wrap>
          <Button type="primary" disabled>Primary</Button>
          <Button type="default" disabled>Default</Button>
          <Button type="dashed" disabled>Dashed</Button>
          <Button type="text" disabled>Text</Button>
          <Button type="link" disabled>Link</Button>
        </Space>
      </div>
    </Space>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Space align="center" wrap>
      <Button type="primary" size="small">Small</Button>
      <Button type="primary" size="middle">Middle</Button>
      <Button type="primary" size="large">Large</Button>
    </Space>
  ),
};

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <Space wrap>
      <Button type="primary" icon={<PlusOutlined />}>New</Button>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Button icon={<DownloadOutlined />}>Export</Button>
      <Button type="primary" danger icon={<DeleteOutlined />}>Delete</Button>
      <Button type="primary" shape="circle" icon={<PlusOutlined />} />
      <Button type="default" shape="circle" icon={<SearchOutlined />} />
    </Space>
  ),
};

export const Loading: Story = {
  name: 'Loading States',
  render: () => (
    <Space wrap>
      <Button type="primary" loading>Saving...</Button>
      <Button loading>Processing...</Button>
      <Button type="primary" loading shape="circle" />
    </Space>
  ),
};

export const ColorVariants: Story = {
  name: 'Color Variants',
  render: () => (
    <Space direction="vertical" size="middle">
      <Flex gap={8}>
        <Button type="primary">Primary Action</Button>
        <Button type="primary" color="default" variant="solid">Default Solid</Button>
      </Flex>
      <Flex gap={8}>
        <Button color="green" variant="solid">Success</Button>
        <Button color="green" variant="outlined">Success Outlined</Button>
        <Button color="green" variant="text">Success Text</Button>
      </Flex>
      <Flex gap={8}>
        <Button color="orange" variant="solid">Warning</Button>
        <Button color="orange" variant="outlined">Warning Outlined</Button>
        <Button color="orange" variant="text">Warning Text</Button>
      </Flex>
      <Flex gap={8}>
        <Button color="red" variant="solid">Danger</Button>
        <Button color="red" variant="outlined">Danger Outlined</Button>
        <Button color="red" variant="text">Danger Text</Button>
      </Flex>
    </Space>
  ),
};

export const UsageGuideline: Story = {
  name: 'Usage Guideline',
  render: () => (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)', maxWidth: 600 }}>
      <h3 style={{ font: 'var(--saiHeadingMd)', marginBottom: 16 }}>Usage Guideline</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--saiColorBorderSecondary)' }}>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>Variant</th>
            <th style={{ textAlign: 'left', padding: '8px 12px' }}>When to use</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Primary', 'Main CTA per section (Save, Submit, Create)'],
            ['Default', 'Secondary actions (Cancel, Back, Edit)'],
            ['Dashed', 'Add item to a list or collection'],
            ['Text', 'Inline / low-emphasis actions (Filter, Sort)'],
            ['Link', 'Navigation to another page'],
            ['Danger', 'Destructive actions (Delete, Remove, Revoke)'],
          ].map(([variant, usage]) => (
            <tr key={variant} style={{ borderBottom: '1px solid var(--saiColorBorderPrimary)' }}>
              <td style={{ padding: '8px 12px', fontWeight: 500 }}>{variant}</td>
              <td style={{ padding: '8px 12px', color: 'var(--saiColorTextSecondary)' }}>{usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
