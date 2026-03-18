---
description: How to commit and push code changes to GitHub
---

# Commit Workflow

## Steps

1. Check changed files:
```bash
git status
```

2. Stage changes (chọn files cụ thể hoặc all):
```bash
git add .
```

3. Commit with conventional commit format:
```bash
git commit -m "type(scope): description"
```

### Commit Types:
| Type | Mô tả |
|------|--------|
| `feat` | Tính năng mới |
| `fix` | Sửa bug |
| `style` | CSS, styling, UI changes |
| `refactor` | Refactor code (không thay đổi chức năng) |
| `docs` | Documentation |
| `chore` | Build configs, dependencies |
| `perf` | Performance improvements |

### Ví dụ:
```
feat(hero): add animated text reveal with Framer Motion
fix(chat): resolve streaming response timeout issue
style(navbar): update glassmorphism effect opacity
refactor(projects): extract project card into separate component
docs: update README with setup instructions
chore: upgrade framer-motion to v12
```

4. Push to GitHub:
```bash
git push origin main
```

## Rules
- **KHÔNG commit** `.env.local` hoặc API keys
- Mỗi commit nên focus vào 1 thay đổi logic
- Viết commit message bằng tiếng Anh
- Kiểm tra `npm run build` pass trước khi push
