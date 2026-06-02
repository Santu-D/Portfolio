import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaGooglePlay } from 'react-icons/fa';

const ProjectCard = ({ project, idx }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="glass-card overflow-hidden group flex flex-col h-full bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300"
    >
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/60 backdrop-blur-sm">
          {project.playStore && (
            <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300" title="View on Play Store">
              <FaGooglePlay size={20} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300" title="Live Link">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75" title="Source Code">
              <FaGithub size={20} />
            </a>
          )}
          {!project.playStore && !project.link && !project.github && (
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium shadow-xl">Private Enterprise Code</span>
          )}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        {project.company && (
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{project.company}</div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-6 flex-1 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      company: "Navabharath Technologies",
      title: "Navabharatha CRM Mobile App",
      description: "As Team Lead, I architected and deployed this enterprise CRM mobile application. Features real-time sync, analytics, and secure cloud backend.",
      tech: ["React Native", "Azure", "Mobile Dev"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      playStore: "https://play.google.com/store/apps/details?id=com.navabharatha.CRM"
    },
    {
      company: "Client Project",
      title: "Shetty's Clinic Management",
      description: "Led the end-to-end development and production deployment of a comprehensive clinic management application trusted by medical professionals.",
      tech: ["React Native", "Azure Services", "Android"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      playStore: "https://play.google.com/store/apps/details?id=com.shettys.clinic"
    },
    {
      company: "Client Project",
      title: "Shetty's Patient Portal",
      description: "Developed a secure, user-friendly mobile application for patient interactions, medical records, and appointment scheduling.",
      tech: ["React Native", "REST APIs", "Android"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      playStore: "https://play.google.com/store/apps/details?id=com.shettys.patientapp.clinic"
    },
    {
      title: "Multi-Source RAG Cloud System",
      description: "Enterprise semantic search platform built with Oracle 23ai Vector Database, ensuring highly accurate retrieval across massive cloud object storage.",
      tech: ["Oracle 23ai", "OCI", "OpenAI", "LangChain"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OCI Cloud Monitoring Agent",
      description: "Real-time telemetry and monitoring solution developed with Python and OCI APIs to provide comprehensive cloud observability.",
      tech: ["OCI Monitoring", "Python", "Alerting"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Azure DevOps Deployment System",
      description: "Fully automated CI/CD deployment pipeline streamlining enterprise application delivery to Azure App Services.",
      tech: ["Azure DevOps", "GitHub Actions", "Azure App Services"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Knowledge Base Integration",
      description: "AI-powered enterprise document retrieval platform seamlessly connecting Google Workspace with Oracle Vector search.",
      tech: ["Google Drive API", "Oracle 23ai", "OpenAI"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Markdown PDF Generator",
      description: "Automated reporting system that converts AI-generated insights into formatted PDFs and uploads them to cloud storage.",
      tech: ["Python", "OCI", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
