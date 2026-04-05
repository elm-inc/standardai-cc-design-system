FROM node:24-slim AS base
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS runner
RUN addgroup --system --gid 1001 storybook && \
    adduser --system --uid 1001 --ingroup storybook storybook
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN chown -R storybook:storybook /app
USER storybook
EXPOSE 6006
CMD ["npx", "storybook", "dev", "-p", "6006", "--host", "0.0.0.0", "--no-open"]
