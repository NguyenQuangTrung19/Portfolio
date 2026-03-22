# 🚀 NguyenQuangTrung.dev — 3D Interactive Portfolio

A personal portfolio website featuring immersive 3D elements, an AI-powered chatbot, and a stunning Deep Space theme. Built with cutting-edge web technologies to showcase projects, skills, and experience.

🌐 **Live Demo**: [https://portfolio-tau-taupe-24.vercel.app/](https://portfolio-tau-taupe-24.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-r170-000?style=flat-square&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=flat-square&logo=vercel)

---

## ✨ Features

### 🌍 Immersive 3D Elements
- **Spline 3D Earth** — Interactive globe in the Hero section with parallax effects
- **Spline Robot** — Floating robot companion on the right side
- **Three.js Character** — Custom GLB model with auto-rotation on the left
- **3D Section Decorations** — Ambient floating shapes across sections

### 🤖 AI Chatbot
- Powered by **Groq** (Llama 3.3 70B) — fast & free
- Full knowledge base about projects, skills, experience, and personal life
- Streaming responses with typing indicator
- Supports both **English** and **Vietnamese**

### 🎨 Deep Space Theme
- Custom starfield animation with parallax scrolling
- Glassmorphism UI components with subtle blur effects
- Gradient text and accent colors (cyan, purple, pink)
- Smooth Framer Motion animations throughout

### 📱 Responsive & Interactive
- Fully responsive across all screen sizes
- Custom cursor with hover effects
- Tilt cards with 3D perspective
- Section dividers with wave/curve/tilt variants
- Loading screen with animated progress

### 📄 Content Sections
- **Hero** — 3D Earth, animated typing, tech badges
- **About** — Dual tabs: Developer (skills/projects) & Personal Life (story/interests)
- **Projects** — Filterable project cards with category tabs
- **Experience** — Timeline with education, certifications, languages, activities
- **Contact** — Contact form + social links (GitHub, LinkedIn, Facebook, Instagram, Zalo)

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **3D Graphics** | Three.js, @react-three/fiber, @react-three/drei, Spline |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS 4 |
| **AI Chatbot** | Vercel AI SDK, Groq (Llama 3.3 70B) |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/          # AI chatbot API route
│   ├── globals.css         # Design system & CSS variables
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page composition
├── components/
│   ├── chat/               # ChatBot component
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Projects, Experience, Contact
│   ├── three/              # FloatingRobot, FloatingCharacter, SectionDecor3D
│   └── ui/                 # CustomCursor, LoadingScreen, Starfield, TiltCard, etc.
├── data/                   # Projects, skills, experience, social data
└── lib/                    # Animations, system prompt, utilities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NguyenQuangTrung19/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Add your GROQ_API_KEY to .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|------------|----------|
| `GROQ_API_KEY` | Groq API key for AI chatbot | Yes |

Get your free API key at [console.groq.com](https://console.groq.com/keys)

---

## 📦 Deployment

This project is deployed on **Vercel**:

1. Push to GitHub
2. Connect repository to Vercel
3. Add `GROQ_API_KEY` to Vercel environment variables
4. Deploy automatically on every push

---

## 👤 Author

**Nguyen Quang Trung**
- 🌐 Portfolio: [nqt-dev.vercel.app](https://portfolio-tau-taupe-24.vercel.app/)
- 📧 Email: nqt123456123@gmail.com
- 🐙 GitHub: [@NguyenQuangTrung19](https://github.com/NguyenQuangTrung19)
- 💼 LinkedIn: [Nguyen Quang Trung](https://linkedin.com/in/nguyễn-quang-trung-178a2737a)
- 📘 Facebook: [Nguyen Quang Trung](https://www.facebook.com/nguyen.quang.trung.774877)
- 📸 Instagram: [@nwantrung](https://www.instagram.com/nwantrung/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
