import React from 'react';
import { Card, Typography, Tag, Button } from 'antd';
import { CheckCircleFilled, CopyOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

export interface ScriptItem {
  title: string;
  content: string;
  highlighted?: { text: string; color?: string }[];
}

export interface ScriptPanelProps {
  title?: string;
  items: ScriptItem[];
  nextItems?: string;
}

export const ScriptPanel: React.FC<ScriptPanelProps> = ({
  title = '既読項目',
  items,
  nextItems,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text strong style={{ fontSize: 14 }}>{title}</Text>
        <CopyOutlined style={{ color: '#8C8C8C' }} />
      </div>

      {items.map((item, index) => (
        <Card
          key={index}
          size="small"
          style={{
            borderLeft: '4px solid var(--saiColorActionPrimaryDefault)',
            fontSize: 13,
          }}
          styles={{ body: { padding: '12px 16px' } }}
        >
          <Paragraph style={{ whiteSpace: 'pre-wrap', marginBottom: item.highlighted?.length ? 8 : 0, fontSize: 13, lineHeight: 1.8 }}>
            {item.content}
          </Paragraph>
          {item.highlighted?.map((h, i) => (
            <Tag key={i} color={h.color || 'red'} style={{ fontSize: 12 }}>
              {h.text}
            </Tag>
          ))}
        </Card>
      ))}

      {nextItems && (
        <div style={{ marginTop: 8 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            <CheckCircleFilled style={{ color: '#52C41A', marginRight: 4 }} />
            {nextItems}
          </Text>
        </div>
      )}
    </div>
  );
};
