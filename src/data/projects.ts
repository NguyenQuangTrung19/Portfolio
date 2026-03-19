export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: "fullstack" | "mobile" | "desktop" | "ai";
  github?: string;
  demo?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "edusphere",
    title: "EduSphere",
    subtitle: "School Management Platform",
    description:
      "Production-grade school management system serving 3 user roles (Admin, Teacher, Student) with 21 feature pages, 16 database models, and 15 backend modules.",
    tech: [
      "React 19",
      "TypeScript",
      "NestJS 11",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Vercel",
    ],
    category: "fullstack",
    github: "https://github.com/NguyenQuangTrung19/New-Education-System",
    demo: "https://neweducationsystemfrontend.vercel.app/",
    highlights: [
      "20+ RESTful APIs with JWT auth & RBAC",
      "Bilingual SPA with 880+ i18n keys",
      "Interactive analytics dashboards",
      "CI/CD with Vercel & Docker Compose",
    ],
  },
  {
    id: "fishcash",
    title: "FishCash POS",
    subtitle: "Seafood Store Management System",
    description:
      "Offline-first, cross-platform POS system for the Vietnamese seafood industry with 13 feature modules, 10 database tables, and 14+ RESTful APIs.",
    tech: [
      "Flutter",
      "Dart",
      "NestJS 11",
      "TypeORM",
      "PostgreSQL",
      "Socket.io",
      "Docker",
      "GitHub Actions",
    ],
    category: "mobile",
    github: "https://github.com/NguyenQuangTrung19/FishCashing",
    highlights: [
      "BLoC state management + Drift ORM",
      "Real-time sync with Socket.io",
      "PDF invoice generation with QR codes",
      "Auto-updater via GitHub Releases API",
    ],
  },
  {
    id: "ai-games",
    title: "AI Game Projects",
    subtitle: "Tic-Tac-Toe & Pacman Search",
    description:
      "Artificial Intelligence course projects implementing classic AI algorithms for game playing and pathfinding.",
    tech: ["Python", "Alpha-Beta Pruning", "A* Algorithm", "UCS"],
    category: "ai",
    github: "https://github.com/NguyenQuangTrung19/Final-AI",
    highlights: [
      "Alpha-Beta Pruning for Tic-Tac-Toe",
      "UCS and A* for Pacman pathfinding",
      "Heuristic function optimization",
    ],
  },
  {
    id: "portfolio",
    title: "NQT.dev Portfolio",
    subtitle: "3D Interactive Portfolio Website",
    description:
      "Personal portfolio website with immersive 3D elements, AI-powered chatbot, and stunning space theme. Features Spline 3D scenes, Three.js character models, and smooth animations.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Three.js",
      "Spline",
      "Framer Motion",
      "Tailwind CSS",
      "Groq AI",
      "Vercel",
    ],
    category: "fullstack",
    github: "https://github.com/NguyenQuangTrung19/Portfolio",
    demo: "https://nqt-dev.vercel.app",
    highlights: [
      "Spline 3D Earth & Robot with parallax effects",
      "Three.js GLB character model with auto-rotation",
      "AI chatbot powered by Groq (Llama 3.3 70B)",
      "Deep Space theme with custom starfield & animations",
    ],
  },
  {
    id: "checklist",
    title: "Checklist System",
    subtitle: "Task Management Desktop App",
    description:
      "WinForms C# desktop application for task creation and tracking with Excel and PDF export features.",
    tech: ["C#", "WinForms", ".NET", "OOP"],
    category: "desktop",
    highlights: [
      "Task CRUD operations",
      "Excel & PDF export",
      "OOP design patterns",
      "Event-driven programming",
    ],
  },
  {
    id: "football-detection",
    title: "Football Object Detection",
    subtitle: "Computer Vision with YOLOv11",
    description:
      "Real-time football analytics system using a custom-trained YOLOv11 model on 5K+ manually labeled frames, achieving 92% mAP@50 with <50ms inference on GPU.",
    tech: ["Python", "YOLOv11", "OpenCV", "PyTorch", "Computer Vision"],
    category: "ai",
    github: "https://github.com/NguyenQuangTrung19/Endterm_ComputerVision",
    demo: "https://drive.google.com/drive/folders/17ttRSEzbVdir2yZAxHGegenmdDRpfycP?usp=sharing",
    highlights: [
      "Custom YOLOv11 model on 5K+ labeled frames",
      "Data augmentation (HSV, mosaic, blur) & hyperparameter tuning",
      "Real-time detection + tracking pipeline at 92% mAP@50",
      "Visualization tools for bounding boxes & error analysis",
    ],
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-stack" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "ai", label: "AI" },
] as const;
