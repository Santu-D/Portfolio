import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Lead Software Engineer",
      company: "Navabharath Technologies",
      period: "Nov 2025 - Present",
      isLatest: true,
      responsibilities: [
        "Architecting Azure Cloud Deployments & App Services.",
        "Managing Azure DevOps Pipelines & GitHub Actions CI/CD workflows.",
        "Developing cross-platform React Native Mobile Applications.",
        "Leading Production Release Management and Database Optimization."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Cloud4biz",
      period: "Sep 2024 – Oct 2025",
      isLatest: false,
      responsibilities: [
        "Integrated OCI Cloud & Oracle 23ai for scalable solutions.",
        "Built and optimized RAG Systems using Vector Databases.",
        "Automated infrastructure with Terraform & GitHub Actions.",
        "Spearheaded AI integrations and ecosystem development."
      ]
    },
    {
      role: "Trainee Engineer Intern",
      company: "Cloud4biz",
      period: "Jun 2024 – Aug 2024",
      isLatest: false,
      responsibilities: [
        "Configured OCI Services & cloud infrastructure.",
        "Learned and applied Infrastructure as Code with Terraform.",
        "Managed Git version control and Linux administration.",
        "Assisted in CI/CD pipeline implementations."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Career Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Professional <span className="text-purple-600">Experience</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon / Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className={`w-3 h-3 rounded-full ${exp.isLatest ? 'bg-purple-600 animate-pulse' : 'bg-gray-300 group-hover:bg-purple-400 transition-colors'}`}></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-[#FAFCFF] border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-purple-600 font-semibold mb-6">{exp.company}</h4>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm md:text-base">
                      <span className="mr-3 text-purple-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
