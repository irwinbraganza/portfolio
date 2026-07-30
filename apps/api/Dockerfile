FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

COPY . .
RUN CI=true pnpm --filter @irwin/api build

EXPOSE 3001

CMD ["node", "apps/api/dist/main.js"]
