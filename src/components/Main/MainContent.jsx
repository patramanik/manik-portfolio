import CertificatesSection from "./CertificatesSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillSection";


const MainContent = () => (
  <main className="pt-20">
    <HomeSection />
    <ServicesSection />
    <SkillsSection/>
    <ProjectsSection/>
    <CertificatesSection/>
    <ContactSection/>
  </main>
);

export default MainContent;
