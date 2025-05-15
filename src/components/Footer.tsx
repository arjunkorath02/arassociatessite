
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-financial-navy py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-financial-lightpurple font-bold text-2xl">AR</div>
              <div className="text-white font-light">Associates</div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in financial planning and wealth management.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-financial-lightpurple transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#mutual-funds" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Mutual Funds</Link>
              </li>
              <li>
                <Link to="/services#insurance" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Insurance</Link>
              </li>
              <li>
                <Link to="/services#investment" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Investment Planning</Link>
              </li>
              <li>
                <Link to="/services#portfolio" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Portfolio Management</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-financial-lightpurple transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400">© {currentYear} AR Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
