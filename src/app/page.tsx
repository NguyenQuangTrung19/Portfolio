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
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Starfield />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider variant="wave" />
        <AboutSection />
        <SectionDivider variant="curve" />
        <ProjectsSection />
        <SectionDivider variant="tilt" />
        <ExperienceSection />
        <SectionDivider variant="wave" flip />
        <ContactSection />
      </main>
      <Footer />
      <FloatingRobot />
      <ChatBot />
    </>
  );
}

