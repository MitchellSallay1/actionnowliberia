import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Programs from '../components/home/Programs';
import GetInvolved from '../components/home/GetInvolved';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import PhotoGallery from '../components/home/PhotoGallery';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Mission />
      <Programs />
      <Stats />
      <PhotoGallery />
      <GetInvolved />
      <CTA />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default Home;