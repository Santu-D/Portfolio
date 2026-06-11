import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ phase }) => {
  // Floating background blobs in Azure Blue, White, Light Gray
  const blobs = [
    {
      className: "bg-blue-200/40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] top-[10%] left-[-10%]",
      animate: {
        x: [0, 40, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      },
    },
    {
      className: "bg-sky-100/30 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bottom-[15%] right-[-5%]",
      animate: {
        x: [0, -50, 30, 0],
        y: [0, 40, -30, 0],
        scale: [1, 0.9, 1.1, 1],
      },
      transitionDelay: 0.5,
    },
    {
      className: "bg-slate-100/50 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] top-[35%] left-[25%]",
      animate: {
        x: [0, 20, -40, 0],
        y: [0, 30, -20, 0],
        scale: [1, 1.05, 0.9, 1],
      },
      transitionDelay: 1,
    },
  ];

  // Subtle floating particles for Phase 3
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const items = Array.from({ length: 18 }).map((_, idx) => ({
      id: idx,
      size: Math.random() * 5 + 3,
      x: Math.random() * 100, // percentage
      y: Math.random() * 80 + 10, // percentage
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 1.0,
    }));
    setParticles(items);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 4 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 w-full h-full bg-[#FAFCFF] z-[100] overflow-hidden flex flex-col items-center justify-center pointer-events-none"
    >
      {/* 1. Premium Ambient Background & Moving Light Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        
        {/* Soft floating background circles */}
        {blobs.map((blob, idx) => (
          <motion.div
            key={idx}
            className={`absolute rounded-full filter blur-[80px] pointer-events-none ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.transitionDelay || 0,
            }}
          />
        ))}
      </div>

      {/* 2. Phase 3: Subtle floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: "100vh" }}
              animate={{ opacity: [0, 0.4, 0.4, 0], y: "-10vh" }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                backgroundColor: idxToColor(p.id),
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 3. Main Center Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-4 w-full max-w-4xl text-center">
        {/* Sequential Text Sequence */}
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.h1
              key="welcome"
              initial={{ opacity: 0, y: 25, filter: 'blur(12px)', letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', letterSpacing: '0.04em' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(10px)', transition: { duration: 0.3 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase font-heading gradient-text-sweep py-2 select-none whitespace-nowrap"
            >
              Welcome
            </motion.h1>
          )}
          
          {phase === 2 && (
            <motion.h1
              key="portfolio"
              initial={{ opacity: 0, y: 25, filter: 'blur(12px)', letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)', letterSpacing: '0.04em' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(10px)', transition: { duration: 0.3 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase font-heading gradient-text-sweep py-2 select-none whitespace-nowrap"
            >
              To My Portfolio
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Helper for particle colors
function idxToColor(idx) {
  if (idx % 3 === 0) return '#0078D4'; // Azure Blue
  if (idx % 3 === 1) return '#ffffff'; // White
  return '#cbd5e1'; // Light Gray (slate-300)
}

export default IntroScreen;
