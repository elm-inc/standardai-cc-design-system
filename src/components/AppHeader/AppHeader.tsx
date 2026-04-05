import React from 'react';
import { Menu, Avatar, Space, Typography } from 'antd';
import {
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
  TeamOutlined,
  DatabaseOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import logoSrc from './logo.png';

export interface AppHeaderProps {
  currentKey?: string;
  userName?: string;
  onMenuClick?: (key: string) => void;
}

const menuItems: MenuProps['items'] = [
  { key: 'home', icon: <HomeOutlined />, label: 'Home' },
  { key: 'history', icon: <PhoneOutlined />, label: 'コール履歴' },
  { key: 'users', icon: <TeamOutlined />, label: 'ユーザー管理' },
  { key: 'groups', icon: <DatabaseOutlined />, label: 'グループ管理' },
  { key: 'data', icon: <MessageOutlined />, label: 'データ管理' },
];

export const AppHeader: React.FC<AppHeaderProps> = ({
  currentKey = 'home',
  userName = 'CS 田中 太郎',
  onMenuClick,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 56,
        padding: '0 16px',
        background: '#fff',
        borderBottom: '1px solid var(--saiColorBorderPrimary)',
        gap: 8,
      }}
    >
      <img src={logoSrc} alt="オペすいすい" style={{ height: 32, marginRight: 8 }} />

      <Menu
        mode="horizontal"
        selectedKeys={[currentKey]}
        items={menuItems}
        onClick={({ key }) => onMenuClick?.(key)}
        style={{ flex: 1, border: 'none', lineHeight: '54px' }}
      />

      <Space size={8}>
        <Avatar icon={<UserOutlined />} style={{ backgroundColor: 'var(--saiColorActionPrimaryDefault)' }} />
        <Typography.Text style={{ whiteSpace: 'nowrap' }}>{userName}</Typography.Text>
      </Space>
    </div>
  );
};
