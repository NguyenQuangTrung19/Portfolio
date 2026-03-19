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

export const activities = [
  "Completed a 3-month specialized training course in Taiwan",
  "Passionate about travel and charity",
  "Proficient in football and badminton",
];
