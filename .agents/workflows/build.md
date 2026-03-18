---
description: How to build the Portfolio project for production
---

# Build Workflow

## Steps

// turbo-all

1. Run linter to check code quality:
```bash
npm run lint
```

2. Build production bundle:
```bash
npm run build
```

3. (Optional) Preview production build locally:
```bash
npm run start
```

## Troubleshooting
- Nếu build lỗi TypeScript: check `npm run lint` trước
- Nếu bundle quá lớn: review `next/dynamic` imports và tree-shaking
- Kiểm tra Lighthouse score sau build: mục tiêu > 90
