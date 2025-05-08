import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Stats = () => {
  const stats = [
    { number: '50+', label: 'Advocacy Campaigns' },
    { number: '10k+', label: 'Workshop Participants' },
    { number: '100+', label: 'Community Partners' },
    { number: '25+', label: 'Cities Reached' }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <Section bgColor="bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="section-title text-white">Our Impact</h2>
        <p className="section-subtitle text-gray-300">
          The numbers speak for themselves. Here's the impact we've made together.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;