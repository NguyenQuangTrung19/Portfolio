import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import FloatingRobot from "@/components/three/FloatingRobot";
import Starfield from "@/components/ui/Starfield";

export default function Home() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingRobot />
      <ChatBot />
    </>
  );
}
