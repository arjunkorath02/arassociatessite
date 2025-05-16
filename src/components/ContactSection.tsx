
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-financial-navy">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contactVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch for expert financial guidance</p>
        </motion.div>

        <div className="enhanced-glassmorphism rounded-xl p-6 md:p-10 max-w-3xl mx-auto bg-financial-gray/40 backdrop-blur-xl will-change-transform">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-gray-300">+91 9677128566 (Whatsapp available)</p>
                  <p className="text-gray-300">+91 8281956646 (Whatsapp available)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-gray-300">ar.associates1957@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <p className="text-gray-300">1st Floor Harmony Tower, Opp SBI Koppam Branch, Palakkad Kerala-678001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
