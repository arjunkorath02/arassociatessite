
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ServiceCard = ({ title, icon, children, className, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className={cn(
        "glass-card rounded-xl p-6 animated-card enhanced-glassmorphism",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="mb-4 text-financial-lightpurple">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
};

export default ServiceCard;
