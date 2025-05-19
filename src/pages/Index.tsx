
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ChooseUsSection from '@/components/ChooseUsSection';
import EmpaneledCompanies from '@/components/EmpaneledCompanies';
import GoogleReviewSection from '@/components/GoogleReviewSection';
import ContactSection from '@/components/ContactSection';
import AUMSection from '@/components/AUMSection';
import InsuranceServices from '@/components/InsuranceServices';
import FAQSection from '@/components/FAQSection';
import CalculatorSection from '@/components/CalculatorSection';
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
      transition={{ duration: 0.3 }}
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
    <div className="min-h-screen bg-gradient-to-br from-financial-navy via-[#2a2f42] to-financial-darkpurple overflow-hidden">
      {/* Enhanced Background elements for glassmorphism effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-financial-purple/25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-financial-lightpurple/20 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-[#9b87f5]/20 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-financial-purple/20 blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AUMSection />
        <TestimonialSection />
        <ChooseUsSection />
        <EmpaneledCompanies />
        <InsuranceServices />
        <FAQSection />
        <CalculatorSection />
        <GoogleReviewSection />
        <ContactSection />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Index;
