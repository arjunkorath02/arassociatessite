
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    // If we're already on the homepage, scroll to the section
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-financial-navy bg-opacity-80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-white/30 p-2 rounded-xl backdrop-blur-lg border border-white/30 shadow-lg will-change-transform transition-all duration-300 hover:bg-white/40">
                <img 
                  src="https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/AR%20Associates%20Logo.png" 
                  alt="AR Associates Logo" 
                  className="h-12 md:h-16" 
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => handleNavClick('services')} 
                className="text-white hover:text-financial-lightpurple transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')} 
                className="text-white hover:text-financial-lightpurple transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('faq')} 
                className="text-white hover:text-financial-lightpurple transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('calculators')} 
                className="text-white hover:text-financial-lightpurple transition-colors cursor-pointer"
              >
                Calculators
              </button>
            </nav>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg bg-financial-purple/20 hover:bg-financial-purple/30 text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-financial-navy bg-opacity-95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('services')}
                className="text-white hover:text-financial-lightpurple transition-colors py-2 border-b border-financial-purple/20 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-white hover:text-financial-lightpurple transition-colors py-2 border-b border-financial-purple/20 text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('faq')}
                className="text-white hover:text-financial-lightpurple transition-colors py-2 border-b border-financial-purple/20 text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('calculators')}
                className="text-white hover:text-financial-lightpurple transition-colors py-2"
              >
                Calculators
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
