import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Quang Trung | Full-stack Developer",
  description:
    "Portfolio of Nguyen Quang Trung — Full-stack & Multi-platform Developer specializing in Next.js, NestJS, Flutter, and AI/ML. Building scalable web apps, mobile apps, and intelligent solutions.",
  keywords: [
    "Nguyen Quang Trung",
    "Full-stack Developer",
    "Next.js",
    "NestJS",
    "Flutter",
    "TypeScript",
    "Portfolio",
    "Software Developer",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Nguyen Quang Trung" }],
  openGraph: {
    title: "Nguyen Quang Trung | Full-stack Developer",
    description:
      "Full-stack & Multi-platform Developer specializing in Next.js, NestJS, Flutter, and AI/ML.",
    type: "website",
    locale: "en_US",
    url: "https://nguyenquangtrung.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Quang Trung | Full-stack Developer",
    description:
      "Full-stack & Multi-platform Developer specializing in Next.js, NestJS, Flutter, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
