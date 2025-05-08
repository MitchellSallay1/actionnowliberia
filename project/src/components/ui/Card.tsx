import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div 
      className={`card p-6 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-primary-50 rounded-full mb-4 text-primary-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;