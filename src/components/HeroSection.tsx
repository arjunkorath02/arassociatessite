
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
      {/* Enhanced Background Elements with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-financial-navy via-[#1a1f2c] to-financial-darkpurple"></div>
      
      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-financial-purple/40 to-financial-lightpurple/40 blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-financial-purple/40 to-financial-lightpurple/40 blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Geometric Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-financial-lightpurple rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-financial-lightpurple/60 rounded-full"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center h-screen pt-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-financial-lightpurple/20 border border-financial-lightpurple/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-financial-lightpurple rounded-full animate-pulse"></div>
              <span className="text-financial-lightpurple text-sm font-medium">Trusted Financial Partner</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          >
            Secure Your Financial Future <br />
            <span className="bg-gradient-to-r from-financial-lightpurple via-[#9b87f5] to-financial-lightpurple text-transparent bg-clip-text animate-pulse">
              with AR Associates
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          >
            Your trusted partner in equity fund distribution and executive advisory services. 
            Building wealth and protecting what matters most with professional expertise and personalized care.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(151, 130, 224, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-gradient-to-r from-financial-lightpurple to-financial-purple hover:from-financial-purple hover:to-financial-lightpurple text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-financial-lightpurple/30 transition-all duration-300 group"
                onClick={scrollToContact}
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="outline"
                className="border-2 border-financial-lightpurple/50 text-financial-lightpurple hover:bg-financial-lightpurple/10 px-8 py-6 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
