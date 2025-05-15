
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-financial-navy py-6 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-gray-400">© {currentYear} AR Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
