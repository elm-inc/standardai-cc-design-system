import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ConfigProvider, App } from 'antd'
import { antdTheme } from '../src/theme/antd-theme'
import '../src/styles/global.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider theme={antdTheme}>
        <App>
          <Story />
        </App>
      </ConfigProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Elevation'],
          'Components',
          'Patterns',
        ],
      },
    },
  },
};

export default preview;
