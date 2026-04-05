import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';

export interface FlowNavStep {
  key: string;
  label: string;
  hasMenu?: boolean;
}

export interface FlowNavProps {
  steps: FlowNavStep[];
  activeKey?: string;
  onStepClick?: (key: string) => void;
}

const arrowClip = (isActive: boolean, isLast: boolean) => {
  const bg = isActive ? 'var(--saiColorActionPrimaryDefault)' : '#E8E8E8';
  const color = isActive ? '#fff' : 'var(--saiColorTextPrimary)';
  return { bg, color, isLast };
};

export const FlowNav: React.FC<FlowNavProps> = ({
  steps,
  activeKey,
  onStepClick,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      {steps.map((step, i) => {
        const isActive = step.key === activeKey;
        const isLast = i === steps.length - 1;
        const { bg, color } = arrowClip(isActive, isLast);

        return (
          <div
            key={step.key}
            onClick={() => onStepClick?.(step.key)}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '6px 24px 6px 16px',
              marginLeft: i === 0 ? 0 : -8,
              backgroundColor: bg,
              color,
              fontSize: 13,
              fontWeight: isActive ? 500 : 400,
              cursor: 'pointer',
              clipPath: isLast
                ? 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)'
                : 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)',
              paddingLeft: i === 0 ? 16 : 24,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              height: 32,
            }}
          >
            {step.label}
            {step.hasMenu && (
              <UnorderedListOutlined style={{ fontSize: 12 }} />
            )}
          </div>
        );
      })}
    </div>
  );
};
