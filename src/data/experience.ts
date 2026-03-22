export interface Education {
  school: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
}

export interface Certification {
  name: string;
  detail: string;
}

export const education: Education = {
  school: "Ton Duc Thang University",
  degree: "B.Sc. in Computer Science",
  gpa: "3.0 / 4.0",
  period: "2022 — Present",
  location: "Ho Chi Minh City",
};

export const certifications: Certification[] = [
  {
    name: "APTIS English Certificate",
    detail: "Score: 154/200",
  },
  {
    name: "Agile Development & Scrum Framework",
    detail: "TechBase Viet Nam Course 2024",
  },
  {
    name: "Certificate of Attendance",
    detail: "Chinese Culture University — 72-hour IT Study Program",
  },
];

export const languages = [
  { name: "English", level: "APTIS Certified" },
  { name: "Vietnamese", level: "Native" },
];

export interface Activity {
  icon: string;
  title: string;
  subtitle: string;
  highlights: string[];
  color: string;
  bgColor: string;
  emoji: string;
}

export const activities: Activity[] = [
  {
    icon: "GraduationCap",
    title: "Taiwan IT Training",
    subtitle: "Chinese Culture University — 3-month exchange program",
    emoji: "🇹🇼",
    highlights: [
      "Completed 2D/3D game programming projects",
      "Built AR storytelling experience & AR Book",
      "Won Outstanding Student Award of the training course",
      "Selective exchange program for top-performing students",
    ],
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
  },
  {
    icon: "Plane",
    title: "Travel & Volunteering",
    subtitle: "Exploring Vietnam & giving back to communities",
    emoji: "✈️",
    highlights: [
      "Traveled ~75% of Vietnam's provinces",
      "Actively participates in volunteer campaigns",
      "Travel fuels creativity and broadens perspective",
      "Passionate about discovering new cultures & places",
    ],
    color: "text-accent-warm",
    bgColor: "bg-accent-warm/10",
  },
  {
    icon: "Trophy",
    title: "Sports & Athletics",
    subtitle: "Football lover • Jersey #19 • Striker",
    emoji: "⚽",
    highlights: [
      "Best Player — TDTU Games 2024",
      "Champion — IT Faculty Traditional Sports 2025",
      "Plays: badminton, volleyball, table tennis, swimming, pickleball",
      "Fan of Wayne Rooney • Manchester United • GOAT: Messi",
    ],
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
];
