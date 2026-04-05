# StandardAI CC Design System

## Overview
Storybook-based design system with Tokens Studio integration for Figma ↔ code token sync.

## Stack
- **UI**: React + TypeScript
- **Build**: Vite
- **Docs**: Storybook v10 + MDX
- **Tokens**: Tokens Studio → Style Dictionary → CSS variables / TS constants
- **Testing**: Vitest + Playwright (via Storybook addon-vitest)

## Key Commands
- `npm run storybook` — Start Storybook dev server (port 6006)
- `npm run build-storybook` — Build static Storybook
- `npm run build:tokens` — Regenerate CSS/TS from `tokens/*.json`
- `npm test` — Run Vitest

## Directory Structure
- `tokens/` — Design token source files (DTCG format, synced via Tokens Studio)
- `tokens/build.mjs` — Style Dictionary build script
- `src/tokens/` — Generated token output (CSS variables, TS constants) — **do not edit**
- `src/components/` — React components
- `stories/` — Storybook stories and MDX docs
- `.storybook/` — Storybook configuration

## Conventions
- Token files use the [DTCG](https://design-tokens.github.io/community-group/format/) format.
- Always run `npm run build:tokens` after modifying `tokens/*.json`.
- Components should use CSS custom properties from the generated token output.
