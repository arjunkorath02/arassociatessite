
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
    y: 10
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03, // Reduced delay for faster appearance
      duration: 0.3, // Shorter animation duration
      ease: [0.25, 0.1, 0.25, 1] // Using consistent cubic-bezier
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
            y: 10
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true,
            margin: "-10%" // Improved viewport margin for earlier detection
          }} 
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] // Consistent easing function
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
                margin: "-10%" // Improved viewport margin
              }} 
              variants={fadeInVariants} 
              className="flex flex-col items-center"
            >
              <div className="glassmorphism-light p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full aspect-square flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  width="120" 
                  height="60"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-24 object-contain transform scale-110 high-quality will-change-transform" 
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
