
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(startValue + (end - startValue) * easeOutCubic));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const AUMSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };
  
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced Background with Animated Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-financial-navy via-[#2a2f42] to-financial-darkpurple">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-financial-purple/15 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-financial-lightpurple/10 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-financial-lightpurple/20 border border-financial-lightpurple/30 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-financial-lightpurple rounded-full animate-pulse"></div>
            <span className="text-financial-lightpurple text-sm font-medium">Our Growth Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Growing together with our clients</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-financial-lightpurple/20 transition-all duration-500 h-full p-8 text-center flex flex-col items-center justify-center group">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-financial-purple/10 to-financial-lightpurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-2 h-2 bg-financial-lightpurple rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-lg font-semibold text-financial-lightpurple mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Assets Under Management
                </motion.h3>
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-financial-lightpurple via-white to-financial-lightpurple text-transparent bg-clip-text">
                  ₹<AnimatedCounter end={20000000} duration={2.5} />+
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">Trust and confidence from our investors across diverse portfolios</p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-financial-lightpurple/20 transition-all duration-500 h-full p-8 text-center flex flex-col items-center justify-center group">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-financial-lightpurple/10 to-financial-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute top-6 left-6 w-1 h-1 bg-financial-lightpurple/60 rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-lg font-semibold text-financial-lightpurple mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Happy Clients
                </motion.h3>
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-financial-lightpurple via-white to-financial-lightpurple text-transparent bg-clip-text">
                  <AnimatedCounter end={500} duration={2} />+
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">Building financial futures together with personalized strategies</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AUMSection;
