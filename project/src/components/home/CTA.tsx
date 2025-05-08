import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';

const CTA = () => {
  return (
    <Section bgColor="bg-accent-50" className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our community of changemakers and help create a better future for all. 
            Every action counts, no matter how small.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button variant="accent" size="lg" to="/get-involved">
              Join Us Today
            </Button>
            <Button variant="outline" size="lg" to="/contact">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-200 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-300 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
    </Section>
  );
};

export default CTA;