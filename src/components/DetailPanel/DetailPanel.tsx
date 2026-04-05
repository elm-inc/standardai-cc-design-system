import React from 'react';
import { Card, Form, Input, Switch, Typography, Divider } from 'antd';
import { CopyOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Text } = Typography;

export interface CustomerInfo {
  nameKanji?: string;
  nameKana?: string;
  phone?: string;
  postalCode?: string;
  address?: string;
}

export interface DetailPanelProps {
  inquiryContent?: string;
  customer?: CustomerInfo;
  notes?: string;
  responseContent?: string;
  showDeliveryToggle?: boolean;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  inquiryContent = '',
  customer = {},
  notes = '',
  responseContent = '',
  showDeliveryToggle = true,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <Card
        size="small"
        title={
          <span>
            お問い合わせ内容 <QuestionCircleOutlined style={{ color: '#8C8C8C', fontSize: 12 }} />
          </span>
        }
        extra={<CopyOutlined style={{ color: '#8C8C8C' }} />}
      >
        <TextArea
          rows={4}
          value={inquiryContent}
          placeholder="お問い合わせ内容を入力"
          style={{ fontSize: 13 }}
        />
      </Card>

      <Card
        size="small"
        title={
          <span>
            お客様情報 <QuestionCircleOutlined style={{ color: '#8C8C8C', fontSize: 12 }} />
          </span>
        }
        extra={
          showDeliveryToggle ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Switch size="small" />
              <Text style={{ fontSize: 13 }}>配送先住所</Text>
              <CopyOutlined style={{ color: '#8C8C8C' }} />
            </span>
          ) : (
            <CopyOutlined style={{ color: '#8C8C8C' }} />
          )
        }
      >
        <Form layout="horizontal" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} size="small" style={{ fontSize: 13 }}>
          <Form.Item label="氏名（漢字）" style={{ marginBottom: 12 }}>
            <Input value={customer.nameKanji} placeholder="山田 太郎" />
          </Form.Item>
          <Form.Item label="氏名（カナ）" style={{ marginBottom: 12 }}>
            <Input value={customer.nameKana} placeholder="ヤマダ タロウ" />
          </Form.Item>
          <Form.Item label="電話番号" style={{ marginBottom: 12 }}>
            <Input value={customer.phone} placeholder="090-1234-5678" />
          </Form.Item>
          <Form.Item label="住所" style={{ marginBottom: 0 }}>
            <TextArea
              rows={3}
              value={customer.postalCode && customer.address ? `〒${customer.postalCode}\n${customer.address}` : ''}
              placeholder="〒105-0012&#10;東京都港区芝大門"
            />
          </Form.Item>
        </Form>
      </Card>

      <Card
        size="small"
        title={
          <span>
            備考 <QuestionCircleOutlined style={{ color: '#8C8C8C', fontSize: 12 }} />
          </span>
        }
        extra={<CopyOutlined style={{ color: '#8C8C8C' }} />}
      >
        <TextArea rows={3} value={notes} placeholder="備考を入力" style={{ fontSize: 13 }} />
      </Card>

      <Card
        size="small"
        title={
          <span>
            対応内容 (1) <QuestionCircleOutlined style={{ color: '#8C8C8C', fontSize: 12 }} />
          </span>
        }
        extra={<CopyOutlined style={{ color: '#8C8C8C' }} />}
      >
        <div style={{ fontSize: 13, color: '#434343', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
          {responseContent || '問い合わせ\n■SMS送信希望 ←不要であれば削除してください。'}
        </div>
      </Card>
    </div>
  );
};
