import React from 'react';
import { Button, Select, Space, Tooltip } from 'antd';
import {
  CreditCardOutlined,
  SearchOutlined,
  ToolOutlined,
  ScissorOutlined,
} from '@ant-design/icons';

export interface ActionBarProps {
  onModeChange?: (mode: string) => void;
  onEndCall?: () => void;
  activeMode?: 'youken' | 'qa' | 'after';
}

export const ActionBar: React.FC<ActionBarProps> = ({
  onModeChange,
  onEndCall,
  activeMode = 'youken',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 16px',
        background: '#fff',
        borderBottom: '1px solid var(--saiColorBorderPrimary)',
        borderRadius: 'var(--saiBorderRadiusLg)',
        boxShadow: 'var(--saiElevationRaised)',
      }}
    >
      <Space size={8}>
        <Button
          type="primary"
          icon={<CreditCardOutlined />}
          style={{
            height: 44,
            padding: '0 20px',
            borderRadius: 6,
            fontSize: 14,
            ...(activeMode !== 'youken' ? { opacity: 0.7 } : {}),
          }}
          onClick={() => onModeChange?.('youken')}
        >
          要件すいすい
        </Button>
        <Button
          icon={<SearchOutlined />}
          style={{
            height: 44,
            padding: '0 20px',
            borderRadius: 6,
            fontSize: 14,
            backgroundColor: activeMode === 'qa' ? '#73D13D' : undefined,
            borderColor: '#73D13D',
            color: activeMode === 'qa' ? '#fff' : '#73D13D',
          }}
          onClick={() => onModeChange?.('qa')}
        >
          QAすいすい
        </Button>
        <Button
          icon={<ToolOutlined />}
          style={{
            height: 44,
            padding: '0 20px',
            borderRadius: 6,
            fontSize: 14,
            backgroundColor: activeMode === 'after' ? '#FFA940' : undefined,
            borderColor: '#FFA940',
            color: activeMode === 'after' ? '#fff' : '#FFA940',
          }}
          onClick={() => onModeChange?.('after')}
        >
          後処理すいすい
        </Button>
      </Space>

      <div style={{ display: 'flex', gap: 12, flex: 1 }}>
        <div style={{ flex: 1 }}>
          <Tooltip title="要件">
            <Select
              placeholder="お客様の要件を選択"
              style={{ width: '100%' }}
              options={[
                { value: 'inquiry', label: '問い合わせ' },
                { value: 'order', label: '注文' },
                { value: 'complaint', label: 'クレーム' },
              ]}
            />
          </Tooltip>
        </div>
        <div style={{ flex: 1 }}>
          <Select
            placeholder="分類選択"
            style={{ width: '100%' }}
            options={[
              { value: 'product', label: '商品関連' },
              { value: 'delivery', label: '配送関連' },
            ]}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Select
            placeholder="商品選択"
            style={{ width: '100%' }}
            options={[
              { value: 'a', label: '商品AAAA' },
              { value: 'b', label: '商品BBBB' },
            ]}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Select
            placeholder="理由"
            style={{ width: '100%' }}
            options={[
              { value: 'broken', label: '破損' },
              { value: 'defect', label: '不良品' },
            ]}
          />
        </div>
      </div>

      <Button
        type="primary"
        danger
        icon={<ScissorOutlined />}
        onClick={onEndCall}
        style={{
          height: 44,
          padding: '0 24px',
          borderRadius: 6,
          fontSize: 14,
        }}
      >
        応答終了
      </Button>
    </div>
  );
};
