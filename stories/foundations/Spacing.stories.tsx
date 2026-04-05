import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const spacingTokens = [
  { token: '--saiSpacing05', name: '0.5', value: '2px' },
  { token: '--saiSpacing1', name: '1', value: '4px' },
  { token: '--saiSpacing15', name: '1.5', value: '6px' },
  { token: '--saiSpacing2', name: '2', value: '8px' },
  { token: '--saiSpacing3', name: '3', value: '12px' },
  { token: '--saiSpacing4', name: '4', value: '16px' },
  { token: '--saiSpacing5', name: '5', value: '20px' },
  { token: '--saiSpacing6', name: '6', value: '24px' },
  { token: '--saiSpacing8', name: '8', value: '32px' },
  { token: '--saiSpacing10', name: '10', value: '40px' },
  { token: '--saiSpacing12', name: '12', value: '48px' },
  { token: '--saiSpacing16', name: '16', value: '64px' },
  { token: '--saiSpacing20', name: '20', value: '80px' },
  { token: '--saiSpacing24', name: '24', value: '96px' },
];

const radiusTokens = [
  { token: '--saiBorderRadiusNone', name: 'none', value: '0px' },
  { token: '--saiBorderRadiusSm', name: 'sm', value: '2px' },
  { token: '--saiBorderRadiusMd', name: 'md', value: '4px' },
  { token: '--saiBorderRadiusLg', name: 'lg', value: '6px' },
  { token: '--saiBorderRadiusXl', name: 'xl', value: '8px' },
  { token: '--saiBorderRadius2xl', name: '2xl', value: '12px' },
  { token: '--saiBorderRadiusFull', name: 'full', value: '9999px' },
];

function SpacingScale() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Spacing Scale</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        4px base unit. Used for padding, margin, and gap.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {spacingTokens.map(({ token, name, value }) => (
          <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 40, font: 'var(--saiLabelMd)', color: 'var(--saiColorTextSecondary)', textAlign: 'right' }}>
              {name}
            </span>
            <span style={{ width: 48, font: 'var(--saiCodeMd)', color: 'var(--saiColorTextTertiary)' }}>
              {value}
            </span>
            <div
              style={{
                width: `var(${token})`,
                height: 24,
                backgroundColor: 'var(--saiColorActionPrimaryDefault)',
                borderRadius: 2,
                minWidth: 2,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function BorderRadius() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Border Radius</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        Default is 4px (md) for a professional B2B look.
      </p>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {radiusTokens.map(({ token, name, value }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: 'var(--saiColorActionPrimaryDefault)',
                borderRadius: `var(${token})`,
              }}
            />
            <span style={{ font: 'var(--saiLabelMd)', color: 'var(--saiColorTextPrimary)' }}>{name}</span>
            <span style={{ font: 'var(--saiCodeMd)', color: 'var(--saiColorTextTertiary)' }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Spacing',
};

export default meta;

export const Scale: StoryObj = {
  render: () => <SpacingScale />,
};

export const Radius: StoryObj = {
  render: () => <BorderRadius />,
};
