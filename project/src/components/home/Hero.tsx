import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/democracy-empowerment.jpg"
          alt="Democracy and Empowerment in Africa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>
      </div>

      <div className="container-custom relative z-10 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/3 text-center lg:text-left">            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-red">Commitment</span> and <span className="text-primary-400">Service</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At ACTION NOW, we're dedicated to making a real difference through meaningful action. 
              Join us in our mission to create positive change in our communities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                variant="accent" 
                size="lg" 
                to="/get-involved"
                className="group relative overflow-hidden shadow-lg shadow-brand-red/25 hover:shadow-brand-red/50 transition-all duration-300 bg-brand-red hover:bg-brand-red/90"
              >
                <span className="relative z-10">Take Action Now</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                to="/about"
                className="group border-white text-white hover:bg-white/10 focus:ring-white relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32`}
                    alt="Community member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-white/80">
                <span className="font-bold text-white">2,000+</span> change makers
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/action-now-liberia-sign.jpg"
                  alt="Action Now-Liberia Activism"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <a href="#mission" className="flex flex-col items-center group">
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Scroll to explore</span>
          <ArrowRight className="w-6 h-6 transform rotate-90 group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;