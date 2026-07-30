# Engineering Portfolio

Production-quality personal engineering portfolio built as a monorepo with Next.js frontend and NestJS backend API.

**Candidate:** Irwin Braganza  
**Positioning:** "I lead engineering teams and build distributed systems that coordinate real-time physical operations."

## Repository Structure

```
.
├── apps/
│   ├── api/          NestJS REST API with Swagger
│   └── web/          Next.js website with App Router
├── package.json      Workspace configuration
└── README.md         This file
```

## Getting Started

### Requirements

- Node.js 18+
- pnpm 8+ (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development

Run both apps in parallel:

```bash
pnpm dev
```

This starts:
- Web app: http://localhost:3000
- API: http://localhost:3001
- API Swagger docs: http://localhost:3001/api/docs

### Individual Development

```bash
# Web only
pnpm --filter @irwin/web dev

# API only
pnpm --filter @irwin/api dev
```

## Building

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter @irwin/web build
pnpm --filter @irwin/api build
```

## Content Editing

All portfolio content is managed in the NestJS API:

**File:** `apps/api/src/services/data.service.ts`

- `getProfile()` - Hero, about, links
- `getProjects()` - Case studies
- `getArchitecture()` - Architecture, technologies

Update the data structures in `data.service.ts` and the website automatically reflects changes.

## Deployment

### Web (Vercel)

1. Connect repository to Vercel
2. Set environment variable: `NEXT_PUBLIC_API_URL=<your-api-url>`
3. Deploy from `apps/web` directory
4. Configure custom domain

### API (Google Cloud Run)

```bash
# Build and push image
gcloud builds submit --tag gcr.io/PROJECT_ID/portfolio-api

# Deploy
gcloud run deploy portfolio-api \
  --image gcr.io/PROJECT_ID/portfolio-api \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars CORS_ORIGIN=https://yourdomain.com
```

### Alternative: Self-Hosted

```bash
# Build
pnpm build

# Run Web
cd apps/web && pnpm start

# Run API (separate terminal)
cd apps/api && pnpm start
```

Set environment variables via `.env` or `.env.local` files in each app directory.

## Project Layout

### api/

- `src/main.ts` - Application entry point
- `src/app.module.ts` - NestJS module
- `src/services/data.service.ts` - Portfolio content
- `src/controllers/` - API endpoints
- `src/common/dtos/` - Data transfer objects

**Endpoints:**
- `GET /api/health` - Health check
- `GET /api/profile` - Profile data
- `GET /api/projects` - Case studies
- `GET /api/architecture` - Architecture and technologies
- `GET /api/docs` - Swagger documentation

### web/

- `src/app/` - Next.js App Router
- `src/components/` - Reusable components
- `src/lib/` - Utilities and types
- `public/` - Static assets (resume.pdf, etc.)

**Features:**
- App Router with TypeScript
- Tailwind CSS dark theme
- Responsive mobile-first design
- API integration with fallback
- SEO metadata and Open Graph
- Accessible navigation

## Technology Stack

**Backend:**
- NestJS - Framework
- TypeScript - Language
- Swagger - API documentation

**Frontend:**
- Next.js 14+ - Framework
- React 18+ - UI library
- TypeScript - Language
- Tailwind CSS 3+ - Styling
- App Router - Routing

**Deployment:**
- Vercel - Web hosting
- Google Cloud Run - API hosting

## Testing Checklist

- [ ] Local dev server runs (`pnpm dev`)
- [ ] API returns data (`http://localhost:3001/api/profile`)
- [ ] Web loads and displays content
- [ ] API fallback works when API is unreachable
- [ ] Dark/light mode toggle works
- [ ] Mobile navigation responsive
- [ ] All sections scroll smoothly
- [ ] Resume PDF downloads
- [ ] External links work (LinkedIn, GitHub, email)
- [ ] Lighthouse score >90 for all metrics
- [ ] WCAG 2.1 AA accessibility compliance

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/description

# Commit with semantic messages
git commit -m "feat: add new section"
git commit -m "fix: api timeout issue"
git commit -m "docs: update readme"

# Push and create pull request
git push origin feature/description
```

## Performance Goals

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Security

- No authentication required (public portfolio)
- CORS configured via environment variables
- Security headers set in Next.js config
- Content-Security-Policy headers
- No sensitive data in frontend or API

## Support

For questions or updates, refer to individual app READMEs:
- [API Documentation](./apps/api/README.md)
- [Web Documentation](./apps/web/README.md)

---

Built with ❤️ as a production-quality engineering portfolio.
