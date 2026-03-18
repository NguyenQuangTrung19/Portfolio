export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web & Software",
    icon: "Globe",
    skills: [
      "Next.js",
      "ReactJS",
      "NestJS",
      "Node.js",
      "Tailwind CSS",
      "RESTful API",
      "JWT",
    ],
  },
  {
    title: "Mobile & Desktop",
    icon: "Smartphone",
    skills: ["Flutter", "React Native", "WinForms (C#)"],
  },
  {
    title: "Cloud & Database",
    icon: "Database",
    skills: [
      "Supabase",
      "Vercel",
      "PostgreSQL",
      "Docker",
      "MySQL",
      "Git",
    ],
  },
  {
    title: "AI & ML",
    icon: "Brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    title: "Languages",
    icon: "Code",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C#", "Dart"],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      "AI-Assisted Dev",
      "Problem Solving",
      "Technical Research",
      "Teamwork",
    ],
  },
];
