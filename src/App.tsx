import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Hooks
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { TextReveal } from './components/TextReveal';
import { Methodology } from './components/Methodology';
import { Stats } from './components/Stats';
import { CaseStudies } from './components/CaseStudies';
import { TechMarquee } from './components/TechMarquee';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ParticleSection } from './components/ParticleSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

// Register GSAP plugins globally once
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <div className={`${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Hero />
        <Marquee />
        <TextReveal />
        <Methodology />
        <Stats />
        <CaseStudies />
        <TechMarquee />
        <Portfolio />
        <Contact />
        <ParticleSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
