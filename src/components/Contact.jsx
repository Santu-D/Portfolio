import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-6">
              Contact
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Let's <span className="text-emerald-600">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAFCFF] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_20px_-3px_rgba(6,81,237,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <FaEnvelope size={24} />
              </div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</h4>
              <a href="mailto:santoshad1998@gmail.com" className="text-lg text-gray-900 font-semibold hover:text-emerald-600 transition-colors break-all">
                santoshad1998@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_20px_-3px_rgba(6,81,237,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0A66C2] mb-4">
                <FaLinkedin size={24} />
              </div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">LinkedIn</h4>
              <a href="https://linkedin.com/in/santhoshad" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 font-semibold hover:text-[#0A66C2] transition-colors break-all">
                linkedin.com/in/santhoshad
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_20px_-3px_rgba(6,81,237,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 mb-4">
                <FaGithub size={24} />
              </div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">GitHub</h4>
              <a href="https://github.com/Santu-D" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 font-semibold hover:text-gray-600 transition-colors break-all">
                github.com/Santu-D
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-50 hover:-translate-y-1 hover:shadow-[0_8px_20px_-3px_rgba(6,81,237,0.15)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4">
                <FaMapMarkerAlt size={24} />
              </div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Location</h4>
              <p className="text-lg text-gray-900 font-semibold">Mysore, Karnataka</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
