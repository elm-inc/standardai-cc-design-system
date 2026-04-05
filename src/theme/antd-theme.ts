import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    // Brand
    colorPrimary: '#1677FF',
    colorSuccess: '#73D13D',
    colorWarning: '#FFA940',
    colorError: '#FF4D4F',
    colorInfo: '#1677FF',

    // Typography
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    fontSizeHeading1: 30,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 18,
    fontSizeHeading5: 16,
    fontSizeSM: 12,
    fontSizeLG: 16,
    fontSizeXL: 20,

    // Shape
    borderRadius: 4,
    borderRadiusSM: 2,
    borderRadiusLG: 6,
    borderRadiusXS: 2,

    // Spacing
    padding: 16,
    paddingSM: 8,
    paddingLG: 24,
    paddingXS: 4,
    margin: 16,
    marginSM: 8,
    marginLG: 24,
    marginXS: 4,

    // Neutral
    colorBgContainer: '#FFFFFF',
    colorBgLayout: '#F5F5F5',
    colorBgElevated: '#FFFFFF',
    colorBorder: '#F0F0F0',
    colorBorderSecondary: '#D9D9D9',
    colorText: '#262626',
    colorTextSecondary: '#595959',
    colorTextTertiary: '#8C8C8C',
    colorTextQuaternary: '#BFBFBF',
  },
};
