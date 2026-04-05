import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ScriptPanel } from '../../src/components/ScriptPanel';

const meta: Meta<typeof ScriptPanel> = {
  title: 'Components/ScriptPanel',
  component: ScriptPanel,
  parameters: {
    docs: {
      description: {
        component:
          'Script display panel for call center operators. Shows read items with highlighted tags and reference information.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScriptPanel>;

export const Default: Story = {
  args: {
    title: '既読項目',
    items: [
      {
        title: 'アクア浄化フィルター案内',
        content: `アクア浄化フィルターが割れてしまった

■アクア浄化フィルターが割れた場合のご案内

1.購入から5年以内

①お手入れ中に割れた場合（お客様認識だが特別対応）
・1回目
・無償再送対応
・3回目以降→有償再送対応

②自然に割れた・正しい使用中に破損した場合
・無償再送対応（1回のみ）

2.購入から5年超（延長保証なし）`,
        highlighted: [
          { text: '有償', color: 'red' },
          { text: '1回のみ', color: 'blue' },
        ],
      },
    ],
    nextItems: '本日はトゥーコネクトカスタマーセンター担当の○○がご案内いたしました。お電話ありがとうございました。',
  },
};

export const MultipleItems: Story = {
  name: 'Multiple Script Items',
  args: {
    title: '既読項目',
    items: [
      {
        title: '配送先案内',
        content: '配送先の住所を確認いたします。\nお届け先は登録されている住所でよろしいでしょうか？',
        highlighted: [],
      },
      {
        title: '配送時間確認',
        content: '配送時間帯をお選びください。\n午前中 / 12-14時 / 14-16時 / 16-18時 / 18-20時',
        highlighted: [{ text: '時間指定不可エリアあり', color: 'orange' }],
      },
    ],
  },
};
