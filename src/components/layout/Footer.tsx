import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={16} />,
  Linkedin: <Linkedin size={16} />,
  Mail: <Mail size={16} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Nguyen Quang Trung. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent-primary transition-colors"
              aria-label={link.name}
            >
              {socialIconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
