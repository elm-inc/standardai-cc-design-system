# Agent Instructions

## Design System Development
- Components live in `src/components/`, stories in `stories/`.
- Use design tokens via CSS custom properties (`var(--colorPrimary)` etc.).
- Run `npm run build:tokens` after any change to `tokens/*.json`.
- Every component should have a corresponding `.stories.ts` and optionally an `.mdx` doc.
