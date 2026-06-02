import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Counter = ({ from, to, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(animateCount);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(animateCount);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-blue-600">
      {count}{suffix}
    </span>
  );
};

const Achievements = () => {
  const highlights = [
    "Lead Software Engineer",
    "Built AI-powered enterprise solutions",
    "Designed cloud-native architectures",
    "Automated CI/CD pipelines",
    "Developed enterprise mobile applications",
    "Implemented Oracle 23ai Vector Search Systems"
  ];

  return (
    <section className="py-20 bg-[#FAFCFF]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key <span className="text-blue-600">Achievements</span></h2>
            <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-600 mb-8">
              A track record of delivering high-impact solutions across cloud infrastructure, artificial intelligence, and enterprise application development.
            </p>
            
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-blue-500 shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Counter from={0} to={6} suffix="+" />
                <p className="text-gray-600 font-semibold mt-2 text-sm">Enterprise Projects</p>
              </div>
              <div className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Counter from={0} to={5} suffix="+" />
                <p className="text-gray-600 font-semibold mt-2 text-sm">Cloud Certifications</p>
              </div>
              <div className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Counter from={0} to={25} suffix="+" />
                <p className="text-gray-600 font-semibold mt-2 text-sm">Tech Stack</p>
              </div>
              <div className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[140px]">
                <Counter from={0} to={100} suffix="%" />
                <p className="text-gray-600 font-semibold mt-2 text-sm">Commitment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
