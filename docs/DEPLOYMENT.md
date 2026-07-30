# Deployment Guide

Complete instructions for deploying the portfolio to production.

## Current Status

- **Web (Vercel):** [https://irwinbraganza.com](https://irwinbraganza.com) (auto-deploys on push to `apps/web/`)
- **API (Cloud Run):** [https://portfolio-api-q2gnotnknq-uc.a.run.app](https://portfolio-api-q2gnotnknq-uc.a.run.app) (auto-deploys via GitHub Actions on push to `apps/api/`)

## Web Deployment (Vercel)

### Initial Setup (One-Time)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" and select your repository
3. Configure:
   - **Root Directory:** `apps/web`
   - Vercel auto-detects Next.js build settings
4. Set environment variables:
   - Go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_API_URL` for **Production** environment
   - Value: `https://portfolio-api-q2gnotnknq-uc.a.run.app` (no `/api` suffix)
5. Click "Deploy"

### Deploying Changes

After initial setup, deployment is automatic:

```bash
git add apps/web/...
git commit -m "feat: update hero section"
git push origin main
```

Vercel auto-detects the push and deploys. Monitor at: Vercel Dashboard → Project → Deployments

Or deploy manually:

```bash
cd apps/web
vercel --prod
```

## API Deployment (Google Cloud Run)

### Initial Setup (One-Time)

#### 1. Create GCP Service Account

```bash
gcloud iam service-accounts create portfolio-api-deployer \
  --display-name="Portfolio API Deployer"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:portfolio-api-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/cloudbuild.builds.editor"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:portfolio-api-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:portfolio-api-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:portfolio-api-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"
```

#### 2. Create and Download Key

```bash
gcloud iam service-accounts keys create key.json \
  --iam-account=portfolio-api-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

#### 3. Add GitHub Secrets

In your repository settings (Settings → Secrets and variables → Actions):

- `GCP_PROJECT_ID`: Your GCP project ID
- `GCP_SA_KEY`: Contents of `key.json` (base64 encoded if needed)
- `WEB_URL`: Your frontend URL (e.g., `https://irwinbraganza.com`)

#### 4. Verify Files Exist

These files must be in the repository root:

- `.gcloudignore` — Excludes files from Cloud Build upload
- `.dockerignore` — Excludes files from Docker build context
- `cloudbuild.yaml` — Cloud Build configuration
- `.github/workflows/deploy-api.yml` — GitHub Actions workflow

And ensure:

- `pnpm-lock.yaml` is committed to git (not in `.gitignore`)

### Deploy Changes After Setup

After setup, deployment is automatic:

```bash
git add apps/api/...
git commit -m "feat: add new API endpoint"
git push origin main
```

GitHub Actions automatically:
1. Detects the push to `apps/api/`
2. Authenticates to GCP
3. Builds Docker image with `cloudbuild.yaml`
4. Pushes image to Google Container Registry
5. Deploys to Cloud Run

Monitor at: GitHub → Actions → Deploy API workflow

## Important Files

### `.gcloudignore`

Excludes files from Cloud Build upload. Critical: do NOT exclude `pnpm-lock.yaml` or `package.json`.

```
.git
.gitignore
.gcloudignore
node_modules/
.env
.env.local
.DS_Store
*.log
**/dist/
**/build/
.next/
.turbo/
coverage/
.vscode/
.idea/
```

### `.dockerignore`

Excludes files from Docker build context. Must allow `pnpm-lock.yaml` and `package.json`.

```
.git
.gitignore
node_modules
.env
.env.local
.DS_Store
*.log
.next
.turbo
coverage
.vscode
.idea
```

### `cloudbuild.yaml`

Builds Docker image with x86_64 architecture (avoids ARM64 incompatibility from macOS builds).

```yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'build'
      - '-t'
      - 'gcr.io/$PROJECT_ID/portfolio-api:latest'
      - '.'
    env:
      - 'DOCKER_BUILDKIT=1'

images:
  - 'gcr.io/$PROJECT_ID/portfolio-api:latest'

options:
  machineType: 'N1_HIGHCPU_8'
```

### `.github/workflows/deploy-api.yml`

GitHub Actions workflow that triggers Cloud Build on push to `apps/api/`.

```yaml
name: Deploy API

on:
  push:
    branches: [main]
    paths:
      - 'apps/api/**'
      - 'package.json'
      - 'pnpm-lock.yaml'
      - 'cloudbuild.yaml'
      - '.github/workflows/deploy-api.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - uses: google-github-actions/setup-gcloud@v1
        with:
          project_id: ${{ secrets.GCP_PROJECT_ID }}

      - run: gcloud builds submit . --config=cloudbuild.yaml

      - run: |
          gcloud run deploy portfolio-api \
            --image gcr.io/${{ secrets.GCP_PROJECT_ID }}/portfolio-api:latest \
            --platform managed \
            --region us-central1 \
            --port 3001 \
            --allow-unauthenticated \
            --set-env-vars CORS_ORIGIN=${{ secrets.WEB_URL }}
```

## Domain Configuration

### For Vercel (Web)

Go to Settings → Domains and add your custom domain. Vercel provides DNS instructions.

### For Cloud Run (API)

Optional: Map `api.yourdomain.com` to Cloud Run service.

Go to Cloud Run → Manage Custom Domains and follow setup instructions.

## Verification

### Web

```bash
curl https://irwinbraganza.com
# Should return HTML with proper meta tags
```

### API

```bash
curl https://portfolio-api-q2gnotnknq-uc.a.run.app/api/health
# Should return: {"status":"ok","timestamp":"..."}

curl https://portfolio-api-q2gnotnknq-uc.a.run.app/api/profile
# Should return: profile JSON data
```

### Integration

Visit [https://irwinbraganza.com](https://irwinbraganza.com) and verify:

- Page loads
- Data displays from API
- No console errors
- All sections render

## Monitoring

### Vercel

- Deployments: Vercel Dashboard → Project → Deployments
- Analytics: Vercel Dashboard → Project → Analytics
- Errors: Vercel Dashboard → Project → Functions → Logs

### Cloud Run

- Logs: [Cloud Console](https://console.cloud.google.com/run) → portfolio-api → Logs
- Metrics: Cloud Console → portfolio-api → Metrics
- Build history: Cloud Console → Cloud Build

## Rollback

### Vercel

```bash
vercel rollback
# Select previous deployment
```

### Cloud Run

```bash
gcloud run deploy portfolio-api \
  --image gcr.io/YOUR_PROJECT_ID/portfolio-api:PREVIOUS_TAG \
  --platform managed \
  --region us-central1
```

## Troubleshooting

### API Not Responding

```bash
gcloud run services describe portfolio-api --region=us-central1
gcloud run services log read portfolio-api --region=us-central1 --limit=50
```

### CORS Errors

Verify `CORS_ORIGIN` env var in Cloud Run matches your web domain:

```bash
gcloud run services describe portfolio-api \
  --region=us-central1 \
  --format='value(spec.template.spec.containers[0].env[?name==CORS_ORIGIN].value)'
```

### Build Failures

```bash
gcloud builds log <BUILD_ID>
```

## Cost

### Vercel (Web)

- Free tier: 100 GB bandwidth/month, unlimited deployments

### Cloud Run (API)

- Free tier: 2 million requests/month, 360,000 GB-seconds/month
- Typical portfolio: $0-5/month
