import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen overflow-x-hidden" id="about">
    <Navbar />
    <HeroSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificatesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
