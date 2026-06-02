import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaPython, FaReact, FaAws, FaDatabase, FaCubes, FaGithub, FaCode, FaServer, FaRobot, FaBrain, FaLink } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";

const TechCard = ({ name, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="glass-card flex flex-col items-center justify-center p-6 gap-4 cursor-pointer relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      <div className="relative z-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-lg">
        {icon}
      </div>
      
      <span className="relative z-10 font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
      
      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

const TechStack = () => {
  const technologies = [
    { name: "Azure", icon: <VscAzure size={40} /> },
    { name: "AWS", icon: <FaAws size={40} /> },
    { name: "OCI", icon: <FaDatabase size={40} /> },
    { name: "Terraform", icon: <FaCubes size={40} /> },
    { name: "GitHub Actions", icon: <FaGithub size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "React Native", icon: <FaReact size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Django", icon: <FaCode size={40} /> },
    { name: "FastAPI", icon: <FaServer size={40} /> },
    { name: "SQL Server", icon: <FaDatabase size={40} /> },
    { name: "Oracle 23ai", icon: <FaDatabase size={40} /> },
    { name: "OpenAI", icon: <FaRobot size={40} /> },
    { name: "Gemini", icon: <FaBrain size={40} /> },
    { name: "LangChain", icon: <FaLink size={40} /> },
  ];

  return (
    <section className="py-24 bg-[#FAFCFF] relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              A comprehensive toolkit of premium technologies I use to build scalable, intelligent cloud solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={index} name={tech.name} icon={tech.icon} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
