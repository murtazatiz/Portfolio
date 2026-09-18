import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  useEffect(() => {
    document.title = 'Murtaza Tinwala — Product Manager';
  }, []);

  return (
    <main
      className="bg-[#0C0C0C] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
