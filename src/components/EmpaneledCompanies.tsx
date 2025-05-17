
import { motion } from 'framer-motion';

// Array of AMFI registered Asset Management Companies with updated logo paths
const assetManagementCompanies = [
  { name: "HDFC Mutual Fund", logo: "/lovable-uploads/39182633-3fe8-41c8-8951-e0151f09d408.png" },
  { name: "SBI Mutual Fund", logo: "/lovable-uploads/a4ce71d1-72e0-4c93-8b20-49dc317c9558.png" },
  { name: "ICICI Prudential", logo: "/lovable-uploads/267fe6c0-8366-4197-ae4e-1f7f6749aa3f.png" },
  { name: "Axis Mutual Fund", logo: "/lovable-uploads/b75f74db-b66b-456e-972a-0f75a858ed30.png" },
  { name: "Kotak Mahindra Mutual Fund", logo: "/lovable-uploads/4f26afac-8a85-4c4c-94f8-7404af171023.png" },
  { name: "Aditya Birla Sun Life", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Aditya%20Birla.png" },
  { name: "UTI Mutual Fund", logo: "/lovable-uploads/9e86d84a-c22c-4382-9a82-59007e1714b0.png" },
  { name: "Tata Mutual Fund", logo: "/lovable-uploads/0dd542b3-6147-4c69-a6fa-11a622706bc8.png" },
  { name: "Nippon India", logo: "/lovable-uploads/af48665a-017a-47c6-adec-efa71c9f7c7c.png" },
  { name: "DSP Mutual Fund", logo: "/lovable-uploads/5fc317e4-0363-4a2a-a1b6-ba7f10568efe.png" },
  { name: "Canara Robeco", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Canara%20Robeco.png" },
  { name: "Edelweiss Mutual Fund", logo: "/lovable-uploads/de4e3841-ba4e-440f-8447-0a0a63b4bed9.png" },
  { name: "Bajaj Finserv", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Bajaj%20Finserv.svg" }
];

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const EmpaneledCompanies = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-financial-navy/80 to-financial-darkpurple/90">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true,
            margin: "-50px"
          }} 
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We have Empanelled under</h2>
          <p className="text-gray-300">AMFI Registered Asset Management Companies</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {assetManagementCompanies.map((company, index) => (
            <motion.div 
              key={company.name} 
              custom={index} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{
                once: true,
                margin: "-50px"
              }} 
              variants={fadeInVariants} 
              className="flex flex-col items-center"
            >
              <div className="glassmorphism-light p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full aspect-square flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  loading="eager"
                  className="w-full max-h-24 object-contain transform scale-110" 
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <p className="mt-3 text-sm text-white text-center font-medium">{company.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpaneledCompanies;
