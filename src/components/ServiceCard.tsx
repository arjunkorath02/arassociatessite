
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
        "group relative overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Enhanced Glassmorphic Card */}
      <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl group-hover:shadow-2xl group-hover:shadow-financial-lightpurple/20 transition-all duration-500">
        
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-financial-purple/10 to-financial-lightpurple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-financial-lightpurple/0 via-financial-lightpurple/50 to-financial-lightpurple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        <div className="relative z-10">
          {/* Icon Container with Enhanced Animation */}
          <motion.div 
            className="mb-6 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-financial-lightpurple/30 to-financial-purple/30 backdrop-blur-sm border border-financial-lightpurple/40 flex items-center justify-center text-financial-lightpurple group-hover:from-financial-lightpurple/50 group-hover:to-financial-purple/50 group-hover:border-financial-lightpurple/60 transition-all duration-500">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {icon}
              </motion.div>
            </div>
            
            {/* Floating Accent Dots */}
            <motion.div 
              className="absolute -top-1 -right-1 w-3 h-3 bg-financial-lightpurple/60 rounded-full"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
          
          {/* Enhanced Typography */}
          <motion.h3 
            className="text-xl font-bold text-white mb-4 group-hover:text-financial-lightpurple transition-colors duration-300"
            layout
          >
            {title}
          </motion.h3>
          
          <motion.div 
            className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
            layout
          >
            {children}
          </motion.div>
        </div>
        
        {/* Subtle Corner Accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-financial-lightpurple/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
