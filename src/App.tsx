import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { ContourLines } from './components/ContourLines';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize Lenis smooth scroll
  useLenis();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Active section spy
  useEffect(() => {
    const sections = ['hero', 'about', 'stack', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 text-neutral-100 font-sans selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-x-hidden">
      {/* Intro Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Custom Precision Magnetic Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-violet to-white origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Background Topographic Wave Contours (matching Behance screenshots) */}
      <ContourLines />

      {/* Main Content Area */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sticky Glass Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Sections */}
        <main id="main-content">
          <div id="hero">
            <Hero />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="stack">
            <TechStack />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <Certifications />

          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

