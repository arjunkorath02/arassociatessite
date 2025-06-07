
import { motion } from 'framer-motion';

// Array of AMFI registered Asset Management Companies with updated logo paths
const assetManagementCompanies = [
  { name: "HDFC Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/hdfc-mutual-fund-vector-logo.svg" },
  { name: "SBI Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/SBI%20Mutual%20fund.svg" },
  { name: "ICICI Prudential Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/ICICI%20Pru.png" },
  { name: "Axis Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Axis_Mutual_Fund_Logo.svg" },
  { name: "Kotak Mahindra Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/kotak-logo.webp" },
  { name: "Aditya Birla Sun Life", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Adita%20Birla.png" },
  { name: "UTI Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/UTI.svg" },
  { name: "Tata Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/TATA%20Mutual%20Fund.svg" },
  { name: "Nippon India", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/nipponindia-mutual-fund-logo.webp" },
  { name: "DSP Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/DSP%20Mutual%20Fund.svg" },
  { name: "Canara Robeco", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Canara%20Robeco.png" },
  { name: "Edelweiss Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Edelweiss%20Mutual%20Fund.svg" },
  { name: "Bajaj Finserv", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Bajaj%20Finserv.svg" },
  { name: "Franklin Templeton", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Franklin%20Templeton.svg" },
  { name: "Motilal Oswal Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Motilal%20Oswal.webp" },
  { name: "HSBC Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/hsbc-mutual-fund-logo.svg" },
  { name: "Mirae Asset Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/Mirae%20Asset.svg" },
  { name: "PPFAS Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/ppfas-logo.png" },
  { name: "Quant Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/quant-logo.png" },
  { name: "LIC Mutual Fund", logo: "https://raw.githubusercontent.com/arjunkorath02/AMFI-Logos/main/LIC-Logo.png" }
];

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const EmpaneledCompanies = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-financial-navy/90 to-financial-darkpurple/95">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-financial-purple/15 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-financial-lightpurple/10 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-10%" }} 
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-financial-lightpurple/20 border border-financial-lightpurple/30 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-financial-lightpurple rounded-full animate-pulse"></div>
            <span className="text-financial-lightpurple text-sm font-medium">AMFI Registered Partners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Empaneled Asset Management Companies</h2>
          <p className="text-xl text-gray-300">Trusted partnerships with India's leading financial institutions</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto">
          {assetManagementCompanies.map((company, index) => (
            <motion.div 
              key={company.name} 
              custom={index} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-10%" }} 
              variants={fadeInVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="flex flex-col items-center group"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl border border-white/25 rounded-2xl hover:shadow-xl hover:shadow-financial-lightpurple/20 transition-all duration-500 w-full aspect-square flex items-center justify-center p-4 group">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-financial-purple/10 to-financial-lightpurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Corner Accent */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-financial-lightpurple/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  width="120" 
                  height="60"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-20 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.p 
                className="mt-4 text-sm text-gray-300 text-center font-medium group-hover:text-white transition-colors duration-300"
                layout
              >
                {company.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpaneledCompanies;
