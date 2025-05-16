
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen bg-financial-purple overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-financial-navy opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      {/* Animated Gradient Shape for better glassmorphism */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-financial-purple to-financial-lightpurple opacity-40 blur-3xl animate-pulse-slow will-change-opacity"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-financial-purple to-financial-lightpurple opacity-40 blur-3xl animate-pulse-slow will-change-opacity" style={{animationDelay: '1.2s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center h-screen pt-16">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            Secure Your Financial Future <br />
            <span className="text-gradient">with AR Associates</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          >
            Your trusted partner in equity fund distribution and executive advisory services. 
            Building wealth and protecting what matters most.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          >
            <Button 
              className="bg-financial-lightpurple hover:bg-financial-purple text-white px-8 py-6 rounded-lg text-lg font-medium enhanced-glassmorphism border border-white/20 will-change-transform"
              onClick={scrollToContact}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
