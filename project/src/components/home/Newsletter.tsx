import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    // For now, we'll just simulate success
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Progress
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Subscribe to our newsletter to receive updates about our projects, impact stories, and ways to get involved.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow max-w-md"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </motion.button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-300"
            >
              Thank you for subscribing! We'll keep you updated.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-red-300"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 