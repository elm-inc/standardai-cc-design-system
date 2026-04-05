import React from 'react';
import { Card, Button, Typography, Space, Tag } from 'antd';
import { UploadOutlined, DownloadOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

export interface FileCardProps {
  title: string;
  currentFile?: string;
  nextFile?: string;
  nextFileStatus?: 'pending' | 'ready';
  onUpload?: () => void;
  onDownload?: () => void;
  onDelete?: () => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  title,
  currentFile,
  nextFile,
  nextFileStatus = 'pending',
  onUpload,
  onDownload,
  onDelete,
}) => {
  return (
    <Card
      size="small"
      title={
        <span>
          {title} <QuestionCircleOutlined style={{ color: '#8C8C8C', fontSize: 12 }} />
        </span>
      }
      style={{ minWidth: 360 }}
    >
      <div style={{ marginBottom: 16 }}>
        <Text type="secondary" style={{ fontSize: 12, display: 'block', marginBottom: 4 }}>
          現在のファイル
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 13 }} ellipsis>
            {currentFile || 'ファイルがありません'}
          </Text>
          {currentFile && (
            <Link style={{ fontSize: 13, whiteSpace: 'nowrap' }} onClick={onDownload}>
              ダウンロード
            </Link>
          )}
        </div>
      </div>

      <div>
        <Text type="secondary" style={{ fontSize: 12, display: 'block', marginBottom: 4 }}>
          次回更新ファイル
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {nextFile ? (
            <>
              <Text
                style={{
                  fontSize: 13,
                  color: nextFileStatus === 'ready' ? '#52C41A' : undefined,
                }}
                ellipsis
              >
                {nextFile}
              </Text>
              <Button
                size="small"
                danger
                icon={<DeleteOutlined />}
                onClick={onDelete}
              >
                削除
              </Button>
            </>
          ) : (
            <>
              <Text type="secondary" style={{ fontSize: 13 }}>ファイルがありません</Text>
              <Button
                size="small"
                type="primary"
                icon={<UploadOutlined />}
                onClick={onUpload}
              >
                アップロード
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};
