import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaTools, FaLaptopCode, FaBrain } from 'react-icons/fa';

const Counter = ({ value, label }) => {
  return (
    <div className="glass-card p-6 border border-white/40 hover:border-blue-200/50 flex flex-col items-center text-center justify-center">
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{value}</div>
      <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: 'Experience', value: '2+ Years' },
    { label: 'Projects Delivered', value: '6+' },
    { label: 'Cloud Certs', value: '5+' },
    { label: 'Technologies', value: '25+' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6">
              About Me
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Driving innovation through <span className="text-blue-600">cloud-native</span> engineering.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans mb-10">
              <p>
                I am a Lead Software Engineer with experience designing and deploying scalable cloud architectures, automated DevOps pipelines, intelligent AI-powered solutions, and enterprise-grade mobile applications.
              </p>
              <p>
                My expertise spans across major platforms like Microsoft Azure and Oracle Cloud (OCI), integrating cutting-edge tools like LangChain and Vector Databases to build systems that are not just robust, but exceptionally smart.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <Counter key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6"
          >
            {[
              { name: 'Cloud Computing', icon: <FaCloud size={24} />, desc: 'Microsoft Azure, OCI', color: 'text-blue-500', bg: 'bg-blue-50' },
              { name: 'DevOps & CI/CD', icon: <FaTools size={24} />, desc: 'Azure DevOps, GitHub Actions', color: 'text-indigo-500', bg: 'bg-indigo-50' },
              { name: 'AI & GenAI', icon: <FaBrain size={24} />, desc: 'OpenAI, Gemini, LangChain, RAG', color: 'text-purple-500', bg: 'bg-purple-50' },
              { name: 'Full Stack & Mobile', icon: <FaLaptopCode size={24} />, desc: 'React Native, Python, Django', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFCFF] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
