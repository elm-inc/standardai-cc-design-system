import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { FileCard } from '../../src/components/FileCard';
import { Tag, Space } from 'antd';

const meta: Meta<typeof FileCard> = {
  title: 'Components/FileCard',
  component: FileCard,
  parameters: {
    docs: {
      description: {
        component:
          'File management card for data management screen. Shows current file with download and next update file with upload/delete.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileCard>;

export const WithCurrentFile: Story = {
  name: 'With Current File',
  args: {
    title: 'トークスクリプト',
    currentFile: '050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x',
  },
};

export const WithNextFile: Story = {
  name: 'With Pending Update',
  args: {
    title: 'トークログ',
    currentFile: '050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x',
    nextFile: '050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x',
    nextFileStatus: 'ready',
  },
};

export const EmptyState: Story = {
  name: 'No Files',
  args: {
    title: 'CRMカテゴリ',
  },
};

export const DataManagementGrid: Story = {
  name: 'Data Management Screen',
  render: () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>業務カテゴリ</div>
          <Space>
            <Tag color="blue" style={{ cursor: 'pointer', padding: '4px 12px' }}>CS</Tag>
            <Tag style={{ cursor: 'pointer', padding: '4px 12px' }}>法人</Tag>
          </Space>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FileCard
          title="トークスクリプト"
          currentFile="050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x"
        />
        <FileCard
          title="トークログ"
          currentFile="050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x"
          nextFile="050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x"
          nextFileStatus="ready"
        />
        <FileCard
          title="CRMカテゴリ"
          currentFile="050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x"
        />
        <FileCard
          title="FAQ"
          currentFile="050-マスター_応対テンプレート_トークスクリプト-CS-20250914-adjusted.x"
        />
      </div>
    </div>
  ),
};
