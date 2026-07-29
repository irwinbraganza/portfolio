# Portfolio API

NestJS REST API serving portfolio data with Swagger documentation.

## Development

```bash
pnpm install
pnpm dev
```

API runs on `http://localhost:3001`

## Endpoints

- `GET /api/health` - Health check
- `GET /api/profile` - Profile information
- `GET /api/projects` - Case studies
- `GET /api/architecture` - Architecture and technologies
- `GET /api/docs` - Swagger documentation

## Environment

Copy `.env.example` to `.env` and configure:

```
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

## Build

```bash
pnpm build
```

Output in `dist/`

## Deployment

### Google Cloud Run

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/portfolio-api
gcloud run deploy portfolio-api \
  --image gcr.io/PROJECT_ID/portfolio-api \
  --platform managed \
  --region us-central1 \
  --set-env-vars CORS_ORIGIN=https://yourdomain.com
```

The `Dockerfile` is generated from NestJS defaults.
