
import { motion } from 'framer-motion';

// Array of AMFI registered Asset Management Companies
const assetManagementCompanies = [
  {
    name: "HDFC Mutual Fund",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/HDFC_AMC.png"
  },
  {
    name: "SBI Mutual Fund",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/sbi_amc.png"
  },
  {
    name: "ICICI Prudential",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/ICICI_Pru_AMC.png"
  },
  {
    name: "Axis Mutual Fund",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/axis_amc.png"
  },
  {
    name: "Kotak Mahindra AMC",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/kotak_amc.png"
  },
  {
    name: "Aditya Birla Sun Life",
    logo: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/aditya_birla_amc.png"
  }
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const EmpaneledCompanies = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-financial-navy/80 to-financial-darkpurple/90">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We have Empaneled under</h2>
          <p className="text-gray-300">AMFI Registered Asset Management Companies</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {assetManagementCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="flex flex-col items-center"
            >
              <div className="glassmorphism-light p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full aspect-square flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full max-h-24 object-contain"
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
