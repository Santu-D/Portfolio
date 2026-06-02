import React from 'react';
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

function App() {
  return (
    <div className="w-full min-h-screen bg-[#FAFCFF] font-sans">
      <Navbar />
      <main>
        <Hero />
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
    </div>
  );
}

export default App;
