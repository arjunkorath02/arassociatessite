
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const AUMSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-financial-navy via-[#2a2f42] to-financial-darkpurple">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-financial-purple/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-financial-lightpurple/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-300">Growing together with our clients</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
          >
            <Card className="enhanced-glassmorphism border-0 h-full p-8 text-center flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium text-financial-lightpurple mb-2">Assets Under Management</h3>
              <div className="text-gradient text-4xl md:text-5xl font-bold mb-3">₹2,00,00,000+</div>
              <p className="text-gray-300">Trust and confidence from our investors</p>
            </Card>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
          >
            <Card className="enhanced-glassmorphism border-0 h-full p-8 text-center flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium text-financial-lightpurple mb-2">Happy Clients</h3>
              <div className="text-gradient text-4xl md:text-5xl font-bold mb-3">500+</div>
              <p className="text-gray-300">Building financial futures together</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AUMSection;
