# Portfolio Project Rules

## Ngôn ngữ
- Giao tiếp bằng **tiếng Việt**
- Code comments và git commits bằng **tiếng Anh**

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **AI**: Vercel AI SDK + Anthropic Claude
- **Icons**: Lucide React
- **Deploy**: Vercel

## Coding Standards

### TypeScript
- Sử dụng strict mode
- Prefer `interface` over `type` cho object shapes
- Export types riêng biệt: `export type { ... }`
- Không sử dụng `any` - dùng `unknown` nếu cần

### React / Next.js
- **Server Components by default** - chỉ dùng `"use client"` khi cần
- Tuân thủ **vercel-react-best-practices** skill cho performance
- Tuân thủ **vercel-composition-patterns** skill cho component architecture
- Sử dụng App Router conventions: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`
- Metadata export cho SEO trên mỗi page

### Styling
- Sử dụng Tailwind CSS utility classes
- CSS custom properties (variables) cho theme colors trong `globals.css`
- Mobile-first responsive design
- Dark theme là mặc định

### Design
- Tuân thủ **frontend-design** skill cho visual aesthetics
- Tuân thủ **web-design-guidelines** skill cho accessibility/UX
- Mọi interactive elements phải có hover/focus states
- Animations phải smooth 60fps, sử dụng `will-change` khi cần
- Tất cả hình ảnh dùng `next/image` với proper `alt` text

### Components
- Mỗi component một file, đặt tên PascalCase
- Cấu trúc thư mục:
  ```
  src/
  ├── app/          # Next.js App Router pages
  ├── components/   # React components
  │   ├── layout/   # Navbar, Footer
  │   ├── sections/ # Hero, About, Projects, Experience, Contact
  │   ├── chat/     # AI Chatbot components
  │   └── ui/       # Reusable UI components
  ├── data/         # Static data (projects, skills, experience)
  ├── lib/          # Utilities, helpers, constants
  └── types/        # TypeScript type definitions
  ```

### Git Commits
- Format: `type(scope): description`
- Types: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`
- Ví dụ: `feat(hero): add animated text reveal effect`

### Performance
- Lighthouse score mục tiêu: > 90 trên tất cả categories
- Bundle size: lazy load components nặng với `next/dynamic`
- Images: WebP format, proper sizing, lazy loading
- Fonts: `next/font` với `display: swap`

### Security
- API keys chỉ ở `.env.local`, KHÔNG commit lên git
- AI API route phải có rate limiting
- Sanitize user input trong chat

## Skills Reference
- `frontend-design`: Khi tạo/sửa UI components → tham khảo design guidelines
- `vercel-react-best-practices`: Khi viết React code → check 64 performance rules
- `vercel-composition-patterns`: Khi thiết kế component API → apply composition patterns
- `web-design-guidelines`: Khi review UI → audit accessibility + UX compliance
