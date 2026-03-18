---
description: How to review and audit the Portfolio UI for quality, accessibility, and performance
---

# Review UI Workflow

## Steps

1. **Visual Review** - Kiểm tra giao diện trên browser:
   - Desktop (1440px): Layout, spacing, typography
   - Mobile (375px): Responsive, touch targets
   - Tablet (768px): Intermediate layouts

2. **Design Quality Check** - Tham khảo frontend-design skill:
   - Typography: Font choices có unique/characterful không?
   - Color: Palette có cohesive và intentional không?
   - Motion: Animations có smooth và purposeful không?
   - Composition: Layout có interesting/memorable không?
   - Details: Background, textures, effects có tạo depth không?

3. **Accessibility Audit** - Sử dụng web-design-guidelines skill:
   - Đọc guidelines từ: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
   - Check code files against guidelines
   - Output findings theo format `file:line`

4. **Performance Check**:
   // turbo
   ```bash
   npm run build
   ```
   - Review bundle size trong build output
   - Check cho unnecessary re-renders
   - Verify lazy loading cho heavy components

5. **Lighthouse Audit** (trong browser):
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

6. **Fix issues** và re-review

## Quality Checklist
- [ ] Không có console errors/warnings
- [ ] Tất cả images có alt text
- [ ] Color contrast ratio đạt WCAG AA
- [ ] Keyboard navigation hoạt động
- [ ] Focus states visible
- [ ] No layout shift (CLS < 0.1)
- [ ] First paint < 2s
- [ ] Responsive trên 3 breakpoints
