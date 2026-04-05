import { create } from 'storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'StandardAI Design System',
  brandUrl: 'https://github.com/elm-inc/standardai-cc-design-system',

  colorPrimary: '#277DB7',
  colorSecondary: '#1677FF',

  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#F0F0F0',
  appBorderRadius: 4,

  fontBase: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontCode: "'JetBrains Mono', 'Fira Code', Consolas, monospace",

  textColor: '#262626',
  textMutedColor: '#8C8C8C',

  barTextColor: '#595959',
  barSelectedColor: '#1677FF',
  barBg: '#FFFFFF',
});
