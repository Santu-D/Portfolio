import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolder, FaFolderOpen, FaRegFileCode, FaBriefcase, FaCode, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';

const Experience = () => {
  const experiences = [
    {
      fileName: "navabharath.json",
      role: "Lead Software Engineer",
      company: "Navabharath Technologies",
      period: "Nov 2025 - Present",
      isLatest: true,
      skills: [
        { name: "Azure Cloud App Services", level: 95 },
        { name: "Azure DevOps & CI/CD", level: 92 },
        { name: "React Native Mobile Dev", level: 88 },
        { name: "Database & Release Optimization", level: 85 }
      ],
      responsibilities: [
        "Architecting Azure Cloud Deployments & App Services.",
        "Managing Azure DevOps Pipelines & GitHub Actions CI/CD workflows.",
        "Developing cross-platform React Native Mobile Applications.",
        "Leading Production Release Management and Database Optimization."
      ]
    },
    {
      fileName: "cloud4biz_assoc.json",
      role: "Associate Software Engineer",
      company: "Cloud4biz",
      period: "Sep 2024 – Oct 2025",
      isLatest: false,
      skills: [
        { name: "OCI & Oracle 23ai Integration", level: 90 },
        { name: "RAG & Vector Database Systems", level: 88 },
        { name: "Terraform IaC Automation", level: 85 },
        { name: "AI Ecosystem integrations", level: 82 }
      ],
      responsibilities: [
        "Integrated OCI Cloud & Oracle 23ai for scalable solutions.",
        "Built and optimized RAG Systems using Vector Databases.",
        "Automated infrastructure with Terraform & GitHub Actions.",
        "Spearheaded AI integrations and ecosystem development."
      ]
    },
    {
      fileName: "cloud4biz_intern.json",
      role: "Trainee Engineer Intern",
      company: "Cloud4biz",
      period: "Jun 2024 – Aug 2024",
      isLatest: false,
      skills: [
        { name: "OCI Cloud Infrastructure", level: 85 },
        { name: "Terraform IaC Configurations", level: 82 },
        { name: "Git Versioning & Linux Admin", level: 80 },
        { name: "CI/CD Pipeline Implementations", level: 75 }
      ],
      responsibilities: [
        "Configured OCI Services & cloud infrastructure.",
        "Learned and applied Infrastructure as Code with Terraform.",
        "Managed Git version control and Linux administration.",
        "Assisted in CI/CD pipeline implementations."
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [folderOpen, setFolderOpen] = useState(true);

  return (
    <section id="experience" className="py-24 bg-white relative">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-50/40 filter blur-[80px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-50/30 filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Interactive Dashboard
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Career <span className="text-gradient">Explorer</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
              Click through the files in the directory to inspect my roles and contributions.
            </p>
          </motion.div>
        </div>

        {/* Mock IDE / Dashboard Panel */}
        <div className="w-full bg-slate-900 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-800 overflow-hidden flex flex-col md:flex-row h-[auto] md:h-[650px]">
          
          {/* LEFT COLUMN: Explorer Sidebar */}
          <div className="w-full md:w-64 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 flex-shrink-0 select-none">
            {/* Header title */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-2">
                <FaCode className="text-blue-500" /> FILE EXPLORER
              </span>
            </div>

            {/* Folder section */}
            <div className="p-3">
              <div 
                className="flex items-center gap-2 px-2.5 py-2 hover:bg-slate-900 rounded-lg cursor-pointer text-slate-300 text-sm font-semibold transition-colors"
                onClick={() => setFolderOpen(!folderOpen)}
              >
                {folderOpen ? <FaFolderOpen className="text-blue-400" /> : <FaFolder className="text-blue-400" />}
                <span>experience</span>
              </div>

              {/* Files nested list */}
              <AnimatePresence initial={false}>
                {folderOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pl-4 flex flex-col gap-1 mt-1"
                  >
                    {experiences.map((exp, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer text-sm transition-all duration-200 ${
                          activeTab === idx 
                            ? "bg-blue-600/10 text-blue-400 font-bold border-l-2 border-l-blue-500 pl-3" 
                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200 font-medium"
                        }`}
                      >
                        <VscJson className={`text-base flex-shrink-0 ${activeTab === idx ? "text-blue-500" : "text-slate-500 group-hover:text-slate-300"}`} />
                        <span className="truncate">{exp.fileName}</span>
                        
                        {exp.isLatest && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: Code View Area */}
          <div className="flex-1 flex flex-col bg-slate-900 overflow-hidden min-w-0">
            {/* Header Tabs */}
            <div className="flex items-center bg-slate-950 border-b border-slate-800 overflow-x-auto whitespace-nowrap scrollbar-none">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-3.5 cursor-pointer text-xs uppercase tracking-wider font-bold transition-all relative border-r border-slate-800 ${
                    activeTab === idx 
                      ? "bg-slate-900 text-blue-400 font-black border-t-2 border-t-blue-500" 
                      : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/50"
                  }`}
                >
                  <VscJson className={activeTab === idx ? "text-blue-500" : "text-slate-600"} />
                  <span>{exp.fileName}</span>
                  {activeTab === idx && (
                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                  )}
                </div>
              ))}
            </div>

            {/* Editor Content Box */}
            <div className="flex-1 p-6 md:p-10 overflow-y-auto min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* File Metadata JSON Presentation */}
                  <div className="font-mono text-xs text-slate-500 leading-relaxed border-l-2 border-slate-700 pl-4 select-none">
                    <span className="text-indigo-400">const</span> <span className="text-emerald-400">roleDetails</span> = &#123;
                    <div className="pl-4">
                      <span className="text-slate-400">"role":</span> <span className="text-sky-300">"{experiences[activeTab].role}"</span>,<br />
                      <span className="text-slate-400">"company":</span> <span className="text-sky-300">"{experiences[activeTab].company}"</span>,<br />
                      <span className="text-slate-400">"period":</span> <span className="text-sky-300">"{experiences[activeTab].period}"</span>
                    </div>
                    &#125;;
                  </div>

                  {/* Role & Period Details Block */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {experiences[activeTab].role}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap self-start sm:self-auto">
                        {experiences[activeTab].period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-emerald-400">{experiences[activeTab].company}</span>
                      {experiences[activeTab].isLatest && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase border border-emerald-500/20">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping"></span>
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Split Achievements and Tech Progress */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Deliverables Grid */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-500" /> Core Achievements
                      </h4>
                      <ul className="space-y-3.5">
                        {experiences[activeTab].responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start bg-slate-950/40 border border-slate-800/40 p-4 rounded-2xl hover:border-slate-800 transition-colors">
                            <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-slate-300 text-sm md:text-base leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Utilization meters */}
                    <div className="space-y-5">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <FaLaptopCode className="text-blue-500" /> Skills Applied
                      </h4>
                      <div className="bg-slate-950/30 border border-slate-800/40 p-5 sm:p-6 rounded-3xl flex flex-col gap-5">
                        {experiences[activeTab].skills.map((skill, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-300">
                              <span>{skill.name}</span>
                              <span className="text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
