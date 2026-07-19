import Nav from "@/app/components/Nav";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <hr className="section-divider" />
        <AboutSection />
        <hr className="section-divider" />
        <SkillsSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
