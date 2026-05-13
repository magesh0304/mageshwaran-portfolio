"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/effects/ScrollProgress";

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor"),
  { ssr: false }
);

const MouseSpotlight = dynamic(
  () => import("@/components/effects/MouseSpotlight"),
  { ssr: false }
);

const ParticlesBackground = dynamic(
  () => import("@/components/effects/ParticlesBackground"),
  { ssr: false, loading: () => null }
);

const ChatBot = dynamic(() => import("@/components/chatbot/ChatBot"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <MouseSpotlight />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />

      <main style={{ position: "relative", zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}
