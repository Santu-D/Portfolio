import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-3"
        >
          {/* Mobile Logo Image (S Logo) */}
          <div className="w-10 h-10 sm:hidden flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xl shadow-md">
            S
          </div>
          
          {/* Desktop Text Logo */}
          <span className="hidden sm:block text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
            SANTHOSHA A D<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full lg:hidden glass border-t border-white/20 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-3 px-6 py-8 bg-white/50 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 text-center font-semibold text-lg hover:text-blue-600 block w-full px-4 py-3 rounded-2xl hover:bg-white/60 transition-colors shadow-sm border border-white/40"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center rounded-2xl font-bold text-lg hover:shadow-lg transition-all cursor-pointer"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
