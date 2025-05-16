
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, DollarSign, Clock } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const FeatureCard = ({ title, description, icon, imageUrl }: FeatureProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 will-change-transform"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-financial-darkpurple flex items-center justify-center text-financial-lightpurple">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white text-center mb-3">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const ChooseUsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
  };
  
  return (
    <section className="section-padding bg-financial-navy bg-opacity-70 backdrop-blur-xl relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-300 max-w-xl mx-auto">Your trusted financial partner who understands your needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Expert Team" 
            description="Experienced professionals dedicated to your financial success." 
            icon={<Users size={24} />}
            imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          />
          
          <FeatureCard 
            title="Trusted Distributor" 
            description="Providing reliable and transparent financial services." 
            icon={<DollarSign size={24} />}
            imageUrl="https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/trusted-distributor.jpg"
          />
          
          <FeatureCard 
            title="Timely Support" 
            description="Always available to address your financial concerns." 
            icon={<Clock size={24} />}
            imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
