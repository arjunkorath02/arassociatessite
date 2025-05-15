
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ChooseUsSection from '@/components/ChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-financial-lightpurple rounded-full shadow-lg z-50 hover:bg-financial-purple transition-colors duration-300"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </motion.button>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-financial-navy via-financial-purple to-financial-darkpurple overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <ChooseUsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
