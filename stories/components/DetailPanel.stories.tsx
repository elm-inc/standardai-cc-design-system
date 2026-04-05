import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { DetailPanel } from '../../src/components/DetailPanel';

const meta: Meta<typeof DetailPanel> = {
  title: 'Components/DetailPanel',
  component: DetailPanel,
  parameters: {
    docs: {
      description: {
        component:
          'Right-side detail panel showing inquiry content, customer info form, notes, and response content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailPanel>;

export const Default: Story = {
  args: {
    inquiryContent: '',
    customer: {
      nameKanji: '山田 太郎',
      nameKana: 'ヤマダ タロウ',
      phone: '090-1234-5678',
      postalCode: '105-0012',
      address: '東京都港区芝大門',
    },
    notes: '',
    responseContent: '問い合わせ\n■SMS送信希望 ←不要であれば削除してください。',
  },
};

export const Empty: Story = {
  name: 'Empty State',
  args: {
    inquiryContent: '',
    customer: {},
    notes: '',
    responseContent: '',
  },
};
