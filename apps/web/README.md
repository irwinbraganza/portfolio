# Engineering Portfolio Website

Next.js web app showcasing engineering leadership experience, case studies, and technical capabilities.

## Development

```bash
pnpm install
pnpm dev
```

Website runs on `http://localhost:3000`

## Features

- Production-ready Next.js App Router
- Tailwind CSS dark theme
- Responsive mobile-first design
- API integration with graceful fallback
- SEO optimized with metadata
- Accessible navigation and components
- Performance optimized with Lighthouse targets

## Environment

Copy `.env.example` to `.env.local` and configure:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Content

All content is fetched from the NestJS API (`/api/profile`, `/api/projects`, `/api/architecture`). If the API is unavailable, the site displays local fallback content.

To edit content, modify the API service data in `apps/api/src/services/data.service.ts`.

## Build

```bash
pnpm build
pnpm start
```

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

Environment variables:
- `NEXT_PUBLIC_API_URL` - API endpoint URL

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Performance

- Optimized for Core Web Vitals
- Reduced motion support
- Minimal JavaScript bundles
- Image optimization
- SEO-friendly metadata
- Open Graph tags
