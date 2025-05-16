
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ServiceCard = ({ title, icon, children, className, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 animated-card enhanced-glassmorphism",
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <div className="mb-4 text-financial-lightpurple">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  );
};

export default ServiceCard;
