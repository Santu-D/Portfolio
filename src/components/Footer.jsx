import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          SANTHOSHA A D
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          "Building the Future with Cloud, AI and Innovation"
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://linkedin.com/in/santhoshad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Santu-D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:santoshad1998@gmail.com"
            className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Santhosha A D. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
