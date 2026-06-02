import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-6 flex-1">
        {skills.map((skill, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-semibold text-sm group-hover:text-blue-600 transition-colors">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (delay * 0.1), ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full relative"
              >
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white opacity-30"></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillData = [
    {
      title: "Cloud",
      delay: 1,
      skills: [
        { name: "Azure", level: 95 },
        { name: "OCI", level: 90 },
        { name: "AWS", level: 80 },
      ]
    },
    {
      title: "DevOps",
      delay: 2,
      skills: [
        { name: "Azure DevOps", level: 95 },
        { name: "Terraform", level: 90 },
        { name: "GitHub Actions", level: 90 },
        { name: "Docker", level: 85 },
      ]
    },
    {
      title: "Programming",
      delay: 3,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      title: "Frameworks",
      delay: 4,
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Django", level: 85 },
        { name: "FastAPI", level: 85 },
      ]
    },
    {
      title: "Databases",
      delay: 5,
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "Oracle Database", level: 85 },
        { name: "Oracle 23ai", level: 85 },
      ]
    },
    {
      title: "AI",
      delay: 6,
      skills: [
        { name: "OpenAI", level: 95 },
        { name: "Gemini", level: 90 },
        { name: "LangChain", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "RAG & Pinecone", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAFCFF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Technical <span className="text-indigo-600">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              Categorized breakdown of my technical proficiency across cloud infrastructure, development, and AI engineering.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillData.map((category, idx) => (
            <SkillCategory key={idx} title={category.title} skills={category.skills} delay={category.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
