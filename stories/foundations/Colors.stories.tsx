import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const colorScales: Record<string, { label: string; steps: string[] }> = {
  brand: {
    label: 'Brand (#277DB7)',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
  blue: {
    label: 'Blue (#1677FF)',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
  green: {
    label: 'Green (#73D13D)',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
  gold: {
    label: 'Gold (#FFA940)',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
  red: {
    label: 'Red (#FF4D4F)',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
  neutral: {
    label: 'Neutral',
    steps: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  },
};

const semanticColors: Record<string, Record<string, string>> = {
  Text: {
    'text-primary': 'var(--saiColorTextPrimary)',
    'text-secondary': 'var(--saiColorTextSecondary)',
    'text-tertiary': 'var(--saiColorTextTertiary)',
    'text-disabled': 'var(--saiColorTextDisabled)',
    'text-inverse': 'var(--saiColorTextInverse)',
    'text-link': 'var(--saiColorTextLink)',
  },
  Background: {
    'bg-primary': 'var(--saiColorBgPrimary)',
    'bg-secondary': 'var(--saiColorBgSecondary)',
    'bg-tertiary': 'var(--saiColorBgTertiary)',
    'bg-inverse': 'var(--saiColorBgInverse)',
  },
  Border: {
    'border-primary': 'var(--saiColorBorderPrimary)',
    'border-secondary': 'var(--saiColorBorderSecondary)',
    'border-focus': 'var(--saiColorBorderFocus)',
  },
  'Action Primary': {
    'action-default': 'var(--saiColorActionPrimaryDefault)',
    'action-hover': 'var(--saiColorActionPrimaryHover)',
    'action-active': 'var(--saiColorActionPrimaryActive)',
    'action-disabled': 'var(--saiColorActionPrimaryDisabled)',
  },
  'Status Success': {
    default: 'var(--saiColorStatusSuccessDefault)',
    bg: 'var(--saiColorStatusSuccessBg)',
    border: 'var(--saiColorStatusSuccessBorder)',
    text: 'var(--saiColorStatusSuccessText)',
  },
  'Status Warning': {
    default: 'var(--saiColorStatusWarningDefault)',
    bg: 'var(--saiColorStatusWarningBg)',
    border: 'var(--saiColorStatusWarningBorder)',
    text: 'var(--saiColorStatusWarningText)',
  },
  'Status Danger': {
    default: 'var(--saiColorStatusDangerDefault)',
    bg: 'var(--saiColorStatusDangerBg)',
    border: 'var(--saiColorStatusDangerBorder)',
    text: 'var(--saiColorStatusDangerText)',
  },
  'Status Info': {
    default: 'var(--saiColorStatusInfoDefault)',
    bg: 'var(--saiColorStatusInfoBg)',
    border: 'var(--saiColorStatusInfoBorder)',
    text: 'var(--saiColorStatusInfoText)',
  },
};

function Swatch({ color, label, size = 48 }: { color: string; label: string; size?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: 4,
          border: '1px solid var(--saiColorBorderPrimary)',
        }}
      />
      <span style={{ fontSize: 10, color: 'var(--saiColorTextSecondary)', textAlign: 'center' }}>
        {label}
      </span>
    </div>
  );
}

function ColorScale({ name, config }: { name: string; config: { label: string; steps: string[] } }) {
  const varPrefix = name === 'neutral' ? 'saiColorNeutral' : `saiColor${name.charAt(0).toUpperCase() + name.slice(1)}`;
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ font: 'var(--saiHeadingSm)', marginBottom: 12 }}>{config.label}</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {config.steps.map((step) => (
          <Swatch key={step} color={`var(--${varPrefix}${step})`} label={step} size={56} />
        ))}
      </div>
    </div>
  );
}

function SemanticSection({ name, tokens }: { name: string; tokens: Record<string, string> }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ font: 'var(--saiHeadingSm)', marginBottom: 12 }}>{name}</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {Object.entries(tokens).map(([label, cssVar]) => (
          <Swatch key={label} color={cssVar} label={label} size={48} />
        ))}
      </div>
    </div>
  );
}

function PrimitiveColors() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Primitive Colors</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        Raw color palette. Each scale provides 11 steps from lightest (50) to darkest (950).
      </p>
      {Object.entries(colorScales).map(([name, config]) => (
        <ColorScale key={name} name={name} config={config} />
      ))}
    </div>
  );
}

function SemanticColors() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Semantic Colors</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 24 }}>
        Purpose-based tokens that reference the primitive palette. Use these in components.
      </p>
      {Object.entries(semanticColors).map(([name, tokens]) => (
        <SemanticSection key={name} name={name} tokens={tokens} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Colors',
};

export default meta;

export const Primitive: StoryObj = {
  render: () => <PrimitiveColors />,
};

export const Semantic: StoryObj = {
  render: () => <SemanticColors />,
};
