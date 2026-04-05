import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const typeStyles = [
  { token: '--saiHeadingXl', name: 'Heading XL', sample: 'The quick brown fox' },
  { token: '--saiHeadingLg', name: 'Heading LG', sample: 'The quick brown fox' },
  { token: '--saiHeadingMd', name: 'Heading MD', sample: 'The quick brown fox' },
  { token: '--saiHeadingSm', name: 'Heading SM', sample: 'The quick brown fox' },
  { token: '--saiBodyLg', name: 'Body LG', sample: 'The quick brown fox jumps over the lazy dog.' },
  { token: '--saiBodyMd', name: 'Body MD', sample: 'The quick brown fox jumps over the lazy dog.' },
  { token: '--saiBodySm', name: 'Body SM', sample: 'The quick brown fox jumps over the lazy dog.' },
  { token: '--saiLabelLg', name: 'Label LG', sample: 'Form Label' },
  { token: '--saiLabelMd', name: 'Label MD', sample: 'Form Label' },
  { token: '--saiLabelSm', name: 'Label SM', sample: 'OVERLINE TEXT' },
  { token: '--saiCodeMd', name: 'Code MD', sample: 'const x = 42;' },
  { token: '--saiCaption', name: 'Caption', sample: 'Updated 3 minutes ago' },
];

const fontSizes = [
  { token: '--saiFontSize2xs', name: '2XS', value: '10px' },
  { token: '--saiFontSizeXs', name: 'XS', value: '11px' },
  { token: '--saiFontSizeSm', name: 'SM', value: '12px' },
  { token: '--saiFontSizeMd', name: 'MD (base)', value: '14px' },
  { token: '--saiFontSizeLg', name: 'LG', value: '16px' },
  { token: '--saiFontSizeXl', name: 'XL', value: '18px' },
  { token: '--saiFontSize2xl', name: '2XL', value: '20px' },
  { token: '--saiFontSize3xl', name: '3XL', value: '24px' },
  { token: '--saiFontSize4xl', name: '4XL', value: '30px' },
];

function TypeStyles() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Type Styles</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        Composite typography tokens combining font family, size, weight, and line-height.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--saiColorBorderSecondary)' }}>
            <th style={{ textAlign: 'left', padding: '8px 16px 8px 0', font: 'var(--saiLabelMd)', color: 'var(--saiColorTextSecondary)' }}>Token</th>
            <th style={{ textAlign: 'left', padding: '8px 16px', font: 'var(--saiLabelMd)', color: 'var(--saiColorTextSecondary)' }}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {typeStyles.map(({ token, name, sample }) => (
            <tr key={token} style={{ borderBottom: '1px solid var(--saiColorBorderPrimary)' }}>
              <td style={{ padding: '12px 16px 12px 0', verticalAlign: 'middle' }}>
                <code style={{ font: 'var(--saiCodeMd)', color: 'var(--saiColorTextSecondary)' }}>{name}</code>
              </td>
              <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                <span style={{ font: `var(${token})` }}>{sample}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FontScale() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Font Size Scale</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        Base size is 14px, optimized for B2B information density.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {fontSizes.map(({ token, name, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ width: 100, font: 'var(--saiLabelMd)', color: 'var(--saiColorTextSecondary)' }}>
              {name}
            </span>
            <span style={{ width: 48, font: 'var(--saiCodeMd)', color: 'var(--saiColorTextTertiary)' }}>
              {value}
            </span>
            <span style={{ fontSize: `var(${token})`, fontFamily: 'var(--saiFontFamilySans)' }}>
              The quick brown fox
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Typography',
};

export default meta;

export const Styles: StoryObj = {
  render: () => <TypeStyles />,
};

export const Scale: StoryObj = {
  render: () => <FontScale />,
};
