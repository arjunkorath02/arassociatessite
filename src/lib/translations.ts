
type Translation = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translation = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About Us",
    testimonials: "Testimonials",
    faq: "FAQ",
    calculators: "Calculators",
    contact: "Contact",
    
    // Hero section
    heroTitle: "Your Financial Journey, Our Expertise",
    heroSubtitle: "Trusted Financial Advisory Services in Kerala",
    heroButton: "Explore Our Services",
    
    // Services section
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive Financial Solutions",
    
    // About section
    aboutTitle: "Why Choose Us",
    aboutSubtitle: "Trusted by clients since 2015",
    
    // Footer
    footerRights: "All rights reserved",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our services",
    
    // Calculators
    calculatorsTitle: "Financial Calculators",
    calculatorsSubtitle: "Plan your investments with our tools",
    sipCalculator: "SIP Calculator",
    lumpSumCalculator: "Lump Sum Calculator",
    goalCalculator: "Goal-based Calculator",
    calculate: "Calculate",
    reset: "Reset",
    
    // Calculator Labels
    investmentAmount: "Investment Amount",
    interestRate: "Expected Return Rate (%)",
    timePeriod: "Time Period (years)",
    monthlyInvestment: "Monthly Investment",
    result: "Projected Value"
  }
};
