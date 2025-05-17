
import { motion } from 'framer-motion';

// Insurance company logos and names updated with proper paths
const insuranceCompanies = [
  {
    name: "TATA AIA - Life Insurance",
    logo: "/lovable-uploads/6b75a38c-f124-4d76-ba2b-ce696ef09c77.png",
    description: "Comprehensive life insurance solutions"
  },
  {
    name: "Star Health Insurance",
    logo: "/lovable-uploads/4c05201a-71c6-499d-a7ae-7827b6f2d38b.png",
    description: "Specialized health insurance plans"
  },
  {
    name: "ICICI Life Insurance",
    logo: "/lovable-uploads/1b08aaf2-6855-4f63-9f87-c291bca40129.png",
    description: "Diverse life insurance products"
  }
];

const InsuranceServices = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-financial-darkpurple/90 to-financial-navy/80">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Insurance Services</h2>
          <p className="text-gray-300">Protecting what matters most</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glassmorphism-purple rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-white/90 rounded-xl p-4 w-full h-32 flex items-center justify-center mb-6">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{company.name}</h3>
              <p className="text-gray-300">{company.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceServices;
