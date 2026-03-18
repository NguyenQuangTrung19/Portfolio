---
description: How to set up and run the Portfolio development server locally
---

# Dev Server Workflow

## Prerequisites
- Node.js >= 20.9
- npm hoặc yarn

## Steps

// turbo-all

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with required environment variables:
```bash
# AI Chatbot
ANTHROPIC_API_KEY=your_api_key_here
```

3. Start development server:
```bash
npm run dev
```

4. Open browser at `http://localhost:3000`

## Notes
- Dev server sử dụng Turbopack cho HMR nhanh hơn
- Thay đổi code sẽ tự động hot-reload
- `.env.local` không được commit lên git
