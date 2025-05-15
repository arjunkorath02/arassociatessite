
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import { BarChart4, Briefcase, PiggyBank, LineChart } from 'lucide-react';

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="section-padding bg-financial-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-xl mx-auto">Comprehensive financial solutions tailored to your needs</p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* First Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Mutual Fund Distribution</h3>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Portfolio Management" 
                icon={<BarChart4 size={32} />}
              >
                <p>Strategic asset allocation and portfolio optimization for maximum returns.</p>
              </ServiceCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Investment Planning" 
                icon={<PiggyBank size={32} />}
              >
                <p>Comprehensive investment strategies aligned with your financial goals.</p>
              </ServiceCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Specialized Investment Fund" 
                icon={<LineChart size={32} />}
              >
                <p>Access to exclusive investment opportunities with high growth potential.</p>
              </ServiceCard>
            </motion.div>
          </div>
          
          {/* Second Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Insurance Advisory</h3>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Life Insurance" 
                icon={<Briefcase size={32} />}
              >
                <p>Protect your family's financial future with comprehensive life coverage.</p>
              </ServiceCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Health Insurance" 
                icon={<Briefcase size={32} />}
              >
                <p>Quality healthcare coverage to protect against unforeseen medical expenses.</p>
              </ServiceCard>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                title="Investment Plans" 
                icon={<Briefcase size={32} />}
              >
                <p>Insurance plans that provide both protection and wealth accumulation.</p>
              </ServiceCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
