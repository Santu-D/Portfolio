import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload, FaBriefcase, FaEnvelope, FaGithub, FaDocker, FaPython, FaReact, FaAws, FaDatabase, FaCubes } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (text === texts[index]) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else {
        timer = setTimeout(() => {
          setText(texts[index].slice(0, text.length + 1));
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="inline-block min-w-[20px] text-blue-600 font-semibold text-gradient">
      {text}
      <span className="animate-pulse text-gray-400 font-light">|</span>
    </span>
  );
};

const Hero = () => {
  const titles = [
    'Lead Software Engineer',
    'Azure DevOps Engineer',
    'Cloud Engineer',
    'AI Engineer',
    'React Native Developer',
    'Solution Architect',
  ];

  const logoAnimation = (delay) => ({
    y: [0, -20, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="gradient-bg-blob w-[400px] h-[400px] bg-blue-100/60 -top-20 -left-20"></div>
        <div className="gradient-bg-blob w-[500px] h-[500px] bg-sky-100/50 top-40 right-10 animation-delay-2000"></div>
        <div className="gradient-bg-blob w-[600px] h-[600px] bg-indigo-50/40 -bottom-40 left-20 animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-5 py-2 rounded-full glass-card text-gray-800 font-semibold text-sm mb-6 border-white/80"
            >
              👋 <span className="text-blue-600">Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tighter"
            >
              SANTHOSHA A D
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 h-10 font-medium"
            >
              I am a <Typewriter texts={titles} />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-sans"
            >
              Lead Software Engineer with experience in Azure Cloud, OCI, DevOps Automation, AI Systems, React Native Development, and Enterprise Application Architecture.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
            >
              <a 
                href="/Santhosha A D_2026.pdf" 
                download="SANTHOSHA_A_D_Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
              >
                <FaDownload /> Download Resume
              </a>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-md text-gray-900 border border-gray-200/50 rounded-2xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto transform hover:-translate-y-1"
              >
                <FaBriefcase /> View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }}
            className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0"
          >
            {/* Premium Circular Profile Wrapper */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full p-[2px] bg-gradient-to-tr from-blue-200 via-sky-100 to-indigo-300 shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white bg-[#FAFCFF] relative z-10 shadow-inner">
                <img 
                  src="/santu1.png" 
                  alt="Santhosha A D - Profile" 
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            {/* Floating Logos */}
            <motion.div animate={logoAnimation(0)} className="absolute top-4 left-0 sm:left-4 lg:-left-6 text-[#0078D4] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <VscAzure size={26} />
            </motion.div>
            
            <motion.div animate={logoAnimation(0.5)} className="absolute top-24 right-0 sm:-right-6 text-[#FF9900] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <FaAws size={26} />
            </motion.div>
            
            <motion.div animate={logoAnimation(1)} className="absolute bottom-16 left-0 sm:-left-8 text-[#C74634] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <FaDatabase size={26} />
            </motion.div>
            
            <motion.div animate={logoAnimation(1.5)} className="absolute -bottom-6 right-16 sm:right-24 text-[#336791] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <FaDocker size={26} />
            </motion.div>
            
            <motion.div animate={logoAnimation(0.8)} className="absolute -top-6 right-24 text-[#181717] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <FaGithub size={26} />
            </motion.div>
            
            <motion.div animate={logoAnimation(1.2)} className="absolute bottom-4 left-24 text-[#7B42BC] bg-white/70 backdrop-blur-md border border-white p-3.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.06)] z-20 hover:scale-110 transition-transform">
              <FaCubes size={26} />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
