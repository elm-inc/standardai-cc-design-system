import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Table, Button, Tag, Space, Input, Select, ConfigProvider } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const tableTheme = {
  components: {
    Table: {
      headerBg: 'transparent',
      headerColor: '#262626',
      headerSplitColor: 'transparent',
      borderColor: '#F0F0F0',
      cellPaddingBlock: 14,
      cellPaddingInline: 16,
      fontSize: 13,
      headerFontSize: 13,
      headerFontWeight: 600,
    },
  },
};

const meta: Meta = {
  title: 'Components/DataTable',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Table patterns used across admin screens: call history, user management, and group management.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider theme={tableTheme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default meta;

export const CallHistory: StoryObj = {
  name: 'コール履歴',
  render: () => {
    const columns = [
      { title: '応対日時', dataIndex: 'datetime', key: 'datetime', width: 180 },
      { title: '問い合わせ内容', dataIndex: 'content', key: 'content' },
      { title: '電話番号', dataIndex: 'phone', key: 'phone', width: 140 },
      {
        title: 'CS・法人',
        dataIndex: 'type',
        key: 'type',
        width: 120,
        render: (type: string) => (
          <Tag color={type === 'CS' ? 'blue' : 'red'} style={{ fontSize: 12 }}>{type}</Tag>
        ),
      },
    ];

    const data = Array.from({ length: 10 }, (_, i) => ({
      key: i,
      datetime: '2026/01/25  10:25',
      content: 'テキストテキストテキストテキストテキストテキストテキストテキスト',
      phone: '0312345678',
      type: i % 3 === 0 ? '法人' : 'CS',
    }));

    return (
      <div style={{ padding: '24px 32px' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>期間 (from)</div>
            <Input type="date" style={{ width: 150 }} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>期間 (to)</div>
            <Input type="date" style={{ width: 150 }} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>電話番号</div>
            <Input style={{ width: 150 }} />
          </div>
          <Tag color="blue" style={{ cursor: 'pointer', padding: '4px 12px', fontSize: 13 }}>CS</Tag>
          <Tag color="red" style={{ cursor: 'pointer', padding: '4px 12px', fontSize: 13 }}>法人</Tag>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
            size: 'default',
            style: { justifyContent: 'center' },
          }}
          showHeader
          bordered={false}
        />
      </div>
    );
  },
};

export const UserManagement: StoryObj = {
  name: 'ユーザー管理',
  render: () => {
    const columns = [
      { title: 'ユーザー名', dataIndex: 'name', key: 'name' },
      { title: 'グループ', dataIndex: 'group', key: 'group' },
      {
        title: 'CS・法人',
        dataIndex: 'type',
        key: 'type',
        width: 100,
        render: (type: string) => (
          <Tag color={type === 'CS' ? 'blue' : 'red'} style={{ fontSize: 12 }}>{type}</Tag>
        ),
      },
      { title: '権限', dataIndex: 'role', key: 'role', width: 100 },
      {
        title: '',
        key: 'actions',
        width: 180,
        render: () => (
          <Space size={8}>
            <Button size="small" type="link" style={{ fontSize: 13 }}>会話履歴</Button>
            <Button size="small" danger icon={<DeleteOutlined />} style={{ fontSize: 13 }}>削除</Button>
          </Space>
        ),
      },
    ];

    const data = [
      { key: 1, name: '佐藤浩介', group: '静岡センター', type: 'CS', role: '管理者' },
      { key: 2, name: '井上 司', group: '静岡センター', type: 'CS', role: '管理者' },
      { key: 3, name: '池田桃子', group: '高知センター', type: '法人', role: '管理者' },
      { key: 4, name: 'xxxxxxxxx', group: '高知センター', type: '法人', role: '管理者' },
      { key: 5, name: 'xxxxxxxxx', group: '高知センター', type: 'CS', role: '一般' },
      { key: 6, name: 'xxxxxxxxxx', group: '倉敷センター', type: '法人', role: '一般' },
      { key: 7, name: 'xxxxxxxx', group: '倉敷センター', type: '法人', role: '一般' },
      { key: 8, name: 'xxxxxxxx', group: '筑紫センター', type: '法人', role: '一般' },
      { key: 9, name: 'xxxxxxx', group: '中国センター', type: '法人', role: '一般' },
      { key: 10, name: 'xxxxxxx', group: '中国センター', type: '法人', role: '一般' },
    ];

    return (
      <div style={{ padding: '24px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
          <Space size={16} align="end">
            <div>
              <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>ユーザー名</div>
              <Input style={{ width: 150 }} />
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>グループ</div>
              <Select placeholder="選択してください" style={{ width: 180 }} />
            </div>
            <Tag color="blue" style={{ cursor: 'pointer', padding: '4px 12px', fontSize: 13 }}>CS</Tag>
            <Tag color="red" style={{ cursor: 'pointer', padding: '4px 12px', fontSize: 13 }}>法人</Tag>
          </Space>
          <Button type="primary" icon={<PlusOutlined />} style={{ height: 36 }}>新規登録</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
            size: 'default',
            style: { justifyContent: 'center' },
          }}
          bordered={false}
        />
      </div>
    );
  },
};

export const GroupManagement: StoryObj = {
  name: 'グループ管理',
  render: () => {
    const columns = [
      { title: 'グループ', dataIndex: 'name', key: 'name', width: 220 },
      { title: '備考', dataIndex: 'note', key: 'note' },
      {
        title: '',
        key: 'actions',
        width: 100,
        render: () => (
          <Button size="small" danger icon={<DeleteOutlined />} style={{ fontSize: 13 }}>削除</Button>
        ),
      },
    ];

    const data = Array.from({ length: 10 }, (_, i) => ({
      key: i,
      name: ['静岡センター', '静岡センター', '高知センター', '高知センター', '高知センター', '倉敷センター', '倉敷センター', '倉敷センター', '中国センター', '中国センター'][i],
      note: 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    }));

    return (
      <div style={{ padding: '24px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 12, color: '#8C8C8C', marginBottom: 4 }}>グループ</div>
            <Select placeholder="選択してください" style={{ width: 200 }} />
          </div>
          <Button type="primary" icon={<PlusOutlined />} style={{ height: 36 }}>新規登録</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
            size: 'default',
            style: { justifyContent: 'center' },
          }}
          bordered={false}
        />
      </div>
    );
  },
};
