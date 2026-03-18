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
    id: "quiz-attendance",
    title: "Quiz & Attendance System",
    subtitle: "Classroom Management Desktop App",
    description:
      "WinForms C# application supporting in-class quizzes and student attendance tracking for teachers and lecturers.",
    tech: ["C#", "WinForms", ".NET", "Excel Export"],
    category: "desktop",
    highlights: [
      "Quiz creation & text file import",
      "Automated attendance tracking",
      "Excel export by date",
      "Event-driven architecture",
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
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-stack" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "ai", label: "AI" },
] as const;
