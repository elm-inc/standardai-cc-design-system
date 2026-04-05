import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const shadows = [
  { token: '--saiElevationSurface', name: 'Surface', description: 'Flat, no elevation' },
  { token: '--saiElevationRaised', name: 'Raised', description: 'Cards, panels' },
  { token: '--saiElevationOverlay', name: 'Overlay', description: 'Dropdowns, popovers' },
  { token: '--saiElevationModal', name: 'Modal', description: 'Modals, dialogs' },
  { token: '--saiElevationToast', name: 'Toast', description: 'Toasts, notifications' },
];

function ElevationScale() {
  return (
    <div style={{ fontFamily: 'var(--saiFontFamilySans)' }}>
      <h2 style={{ font: 'var(--saiHeadingLg)', marginBottom: 24 }}>Elevation</h2>
      <p style={{ font: 'var(--saiBodyMd)', color: 'var(--saiColorTextSecondary)', marginBottom: 32 }}>
        Semantic shadow tokens for layered UI surfaces.
      </p>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {shadows.map(({ token, name, description }) => (
          <div
            key={token}
            style={{
              width: 160,
              height: 120,
              backgroundColor: 'var(--saiColorSurfacePrimary)',
              borderRadius: 'var(--saiBorderRadiusXl)',
              boxShadow: `var(${token})`,
              border: '1px solid var(--saiColorBorderPrimary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span style={{ font: 'var(--saiLabelLg)' }}>{name}</span>
            <span style={{ font: 'var(--saiCaption)', color: 'var(--saiColorTextTertiary)', textAlign: 'center', padding: '0 12px' }}>
              {description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Elevation',
};

export default meta;

export const Shadows: StoryObj = {
  render: () => <ElevationScale />,
};
