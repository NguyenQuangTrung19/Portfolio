---
description: How to add a new feature or section to the Portfolio website
---

# Add Feature Workflow

## Steps

1. **Xác định yêu cầu**: Hiểu rõ feature cần thêm (section mới, component mới, tính năng mới)

2. **Đọc rules và skills liên quan**:
   - Luôn đọc `.agents/rules.md` trước
   - Nếu liên quan đến UI/Design → đọc `.agents/skills/frontend-design/SKILL.md`
   - Nếu liên quan đến React component → đọc `.agents/skills/vercel-composition-patterns/SKILL.md`
   - Nếu liên quan đến performance → đọc `.agents/skills/vercel-react-best-practices/SKILL.md`

3. **Tạo component mới** theo cấu trúc:
```
src/components/
├── sections/NewSection.tsx    # Nếu là section mới
├── ui/NewComponent.tsx        # Nếu là UI component
└── chat/NewChatFeature.tsx    # Nếu liên quan chatbot
```

4. **Implement component**:
   - Server Component by default
   - Chỉ dùng `"use client"` nếu cần interactivity
   - Sử dụng TypeScript interfaces cho props
   - Thêm animations với Framer Motion
   - Mobile-first responsive design

5. **Tích hợp vào page**:
   - Import component vào `src/app/page.tsx`
   - Thêm navigation link trong Navbar nếu cần
   - Update smooth scroll targets

6. **Kiểm tra**:
   // turbo
   ```bash
   npm run lint
   ```
   // turbo
   ```bash
   npm run build
   ```

7. **Review UI**:
   - Mở browser kiểm tra responsive (mobile + desktop)
   - Verify animations smooth 60fps
   - Check accessibility (keyboard nav, contrast)
   - Nếu cần audit → sử dụng web-design-guidelines skill

8. **Commit** theo workflow `/commit`

## Checklist
- [ ] Component đã được typed đầy đủ (TypeScript)
- [ ] Responsive trên mobile (375px) và desktop (1440px)
- [ ] Có hover/focus states cho interactive elements
- [ ] Animations dùng Framer Motion, smooth 60fps
- [ ] Accessibility: proper headings, alt text, ARIA labels
- [ ] Performance: lazy load nếu component nặng
- [ ] SEO: proper semantic HTML
