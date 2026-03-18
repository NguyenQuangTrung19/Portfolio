---
description: How to deploy the Portfolio website to Vercel
---

# Deploy Workflow

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- Environment variables configured on Vercel dashboard

## Steps

1. **Ensure build passes locally**:
   // turbo
   ```bash
   npm run build
   ```

2. **Commit all changes**:
   ```bash
   git add .
   git commit -m "chore: prepare for deployment"
   ```

3. **Push to GitHub** (auto-deploys if connected):
   ```bash
   git push origin main
   ```

4. **Configure Environment Variables on Vercel**:
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = your API key
   - Scope: Production + Preview

5. **Custom Domain** (tùy chọn):
   - Vercel Dashboard → Project Settings → Domains
   - Add custom domain
   - Update DNS records theo hướng dẫn Vercel

## First Time Setup

Nếu chưa kết nối Vercel:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Sau lần đầu, mỗi lần `git push origin main` sẽ tự động deploy

## Monitoring
- Vercel Dashboard: check deployment status, logs
- Vercel Analytics: traffic, performance metrics
- Vercel Speed Insights: Core Web Vitals
