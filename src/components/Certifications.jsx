import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    { title: "OCI 2025 Certified Architect Associate", issuer: "Oracle", type: "cert" },
    { title: "OCI 2025 AI Foundations Associate", issuer: "Oracle", type: "cert" },
    { title: "OCI Generative AI Certified", issuer: "Oracle", type: "cert" },
    { title: "OCI Foundations Associate", issuer: "Oracle", type: "cert" },
    { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", type: "badge" },
    { title: "JavaScript Programming", issuer: "Tech Institute", type: "cert" },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#FAFCFF]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Credentials
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Licenses & <span className="text-orange-600">Certifications</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 flex items-start gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                <FaCertificate size={24} />
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-gray-900 mb-1 leading-snug">{cert.title}</h3>
                <p className="text-sm text-gray-500 font-semibold">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
