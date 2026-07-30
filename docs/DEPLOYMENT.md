# Deployment Guide

Complete instructions for deploying the portfolio to production.

## Prerequisites

- Vercel account (for web)
- Google Cloud project with Cloud Run enabled (for API)
- Git repository connected to services
- Custom domain (optional)

## Web Deployment (Vercel)

### Option 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Next.js

2. **Configure Settings**
   - **Framework Preset:** Next.js
   - **Root Directory:** `apps/web`
   - **Build Command:** `pnpm build`
   - **Output Directory:** `.next`

3. **Environment Variables**
   - Add `NEXT_PUBLIC_API_URL`: Production API URL
     - Example: `https://api.yourdomain.com`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Get production URL

5. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add your domain
   - Update DNS records per Vercel instructions

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from root
cd apps/web
vercel --prod \
  --env NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Option 3: GitHub Actions

Create `.github/workflows/deploy-web.yml`:

```yaml
name: Deploy Web

on:
  push:
    branches: [main]
    paths:
      - 'apps/web/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm i -g vercel
      - run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}
```

## API Deployment (Google Cloud Run)

### Option 1: Cloud Run Console

1. **Prepare Docker Image**
   ```bash
   # Set GCP project
   gcloud config set project YOUR_PROJECT_ID
   
   # Build and push image
   gcloud builds submit \
     --tag gcr.io/YOUR_PROJECT_ID/portfolio-api \
     --directory apps/api
   ```

2. **Deploy to Cloud Run**
   - Go to [Cloud Run Console](https://console.cloud.google.com/run)
   - Click "Create Service"
   - Select the image: `gcr.io/YOUR_PROJECT_ID/portfolio-api`
   - **Service settings:**
     - Authentication: Allow unauthenticated invocations
     - Memory: 256 MB
     - CPU: 1
   - **Environment variables:**
     - `PORT`: `3001`
     - `CORS_ORIGIN`: Your web domain (e.g., `https://yourdomain.com`)

3. **Configure Domain** (Optional)
   - Go to "Manage Custom Domains"
   - Map `api.yourdomain.com` to the service

### Option 2: Cloud Build + Cloud Run (Recommended)

```bash
# Build with Cloud Build (handles x86_64 architecture)
gcloud builds submit . --config=cloudbuild.yaml

# Deploy to Cloud Run
gcloud run deploy portfolio-api \
  --image gcr.io/YOUR_PROJECT_ID/portfolio-api:latest \
  --platform=managed \
  --region=us-central1 \
  --port=3001 \
  --allow-unauthenticated \
  --set-env-vars CORS_ORIGIN=https://yourdomain.com
```

### Option 3: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy-api.yml`:

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

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: google-github-actions/setup-gcloud@v1
        with:
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}
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

### DNS Setup

**For Vercel:**
```
CNAME yourdomain.com → cname.vercel-dns.com
```

**For Cloud Run:**
```
CNAME api.yourdomain.com → ghs.googleusercontent.com
```

Check service documentation for exact DNS records.

### HTTPS

Both Vercel and Cloud Run provide free SSL certificates. Configuration is automatic.

## Verification

After deployment:

1. **Web**
   ```bash
   curl https://yourdomain.com
   # Should return HTML with proper meta tags
   ```

2. **API**
   ```bash
   curl https://api.yourdomain.com/api/health
   # Should return: {"status":"ok","timestamp":"..."}
   ```

3. **Integration**
   - Visit website
   - Verify data loads from API
   - Check browser console for errors

## Monitoring

### Vercel
- Analytics: Dashboard → Analytics
- Errors: Dashboard → Functions → Logs
- Performance: Dashboard → Speed Insights

### Google Cloud Run
- Logs: Cloud Run → portfolio-api → Logs
- Metrics: Cloud Run → portfolio-api → Metrics
- Errors: Cloud Logging → Query results

## Rollback

### Vercel
```bash
vercel rollback
# Select previous deployment to rollback
```

### Google Cloud Run
```bash
gcloud run deploy portfolio-api \
  --image=gcr.io/YOUR_PROJECT_ID/portfolio-api:PREVIOUS_TAG \
  --platform=managed \
  --region=us-central1
```

## Cost Estimation

**Vercel (Web)**
- Free tier: 100 GB bandwidth/month, unlimited deployments
- Pro tier: $20/month for additional features

**Google Cloud Run (API)**
- Free tier: 2 million requests/month, 360,000 GB-seconds/month
- Charges apply only above free limits
- Estimated cost for low traffic: $0-5/month

## Troubleshooting

### API Not Responding

```bash
# Check Cloud Run service status
gcloud run services describe portfolio-api --region=us-central1

# Check recent logs
gcloud run services log read portfolio-api --region=us-central1 --limit=50
```

### CORS Errors

Verify `CORS_ORIGIN` environment variable matches your web domain:

```bash
# Check current value
gcloud run services describe portfolio-api \
  --region=us-central1 \
  --format='value(spec.template.spec.containers[0].env)'
```

### Build Failures

```bash
# Check Cloud Build logs
gcloud builds log <BUILD_ID>

# Rebuild
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio-api --directory apps/api
```

## Maintenance

- Update dependencies quarterly
- Monitor error logs weekly
- Test API availability monthly
- Verify DNS configuration annually

For detailed platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Google Cloud Run Docs](https://cloud.google.com/run/docs)
