import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';

function App() {
  const [introPhase, setIntroPhase] = useState(1);

  useEffect(() => {
    // Lock scroll during intro phases 1-3
    if (introPhase < 4) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introPhase]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase(2), 700);  // "To My Portfolio" appears at 0.7s
    const timer2 = setTimeout(() => setIntroPhase(4), 1400); // Transition starts immediately at 1.4s
    const timer3 = setTimeout(() => setIntroPhase(5), 1900); // Intro fully unmounted at 1.9s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FAFCFF] font-sans overflow-x-hidden relative">
      {/* Cinematic Intro Screen Overlay */}
      {introPhase <= 4 && (
        <IntroScreen phase={introPhase} />
      )}

      {/* Main Portfolio Content */}
      <div className={introPhase < 4 ? "invisible h-screen overflow-hidden" : "visible"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introPhase >= 4 ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <Hero introPhase={introPhase} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Achievements />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;

