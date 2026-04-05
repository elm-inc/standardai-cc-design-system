# StandardAI CC Design System

Storybook-based design system with Tokens Studio + Figma integration.

## Getting Started

```bash
npm install
npm run build:tokens
npm run storybook
```

## Design Tokens

Token source files live in `tokens/` using the [DTCG format](https://design-tokens.github.io/community-group/format/). They are synced from Figma via [Tokens Studio](https://tokens.studio/) and transformed into CSS custom properties and TypeScript constants using Style Dictionary.

```bash
npm run build:tokens
```

## Development

```bash
npm run storybook     # Start Storybook on http://localhost:6006
npm run build-storybook  # Build static site
npm test              # Run tests
```
