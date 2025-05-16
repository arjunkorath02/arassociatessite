
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-financial-navy via-[#2a2f42] to-financial-darkpurple">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-financial-purple/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-[#9b87f5]/15 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-financial-lightpurple/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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

        <div className="enhanced-glassmorphism rounded-xl p-6 md:p-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl will-change-transform">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a 
                    href="tel:+919677128566" 
                    className="text-gray-300 hover:text-financial-lightpurple transition-colors duration-200 block"
                  >
                    +91 9677128566 (Whatsapp available)
                  </a>
                  <a 
                    href="tel:+918281956646" 
                    className="text-gray-300 hover:text-financial-lightpurple transition-colors duration-200 block"
                  >
                    +91 8281956646 (Whatsapp available)
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a 
                    href="mailto:ar.associates1957@gmail.com"
                    className="text-gray-300 hover:text-financial-lightpurple transition-colors duration-200"
                  >
                    ar.associates1957@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-financial-purple/50 flex items-center justify-center text-financial-lightpurple">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <a 
                    href="https://maps.app.goo.gl/aHoAS2GTSzKQqYDHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-financial-lightpurple transition-colors duration-200"
                  >
                    1st Floor Harmony Tower, Opp SBI Koppam Branch, Palakkad Kerala-678001
                  </a>
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
