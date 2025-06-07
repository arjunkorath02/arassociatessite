
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book, HelpCircle } from 'lucide-react';

// Define the FAQ data structure with English content
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "mutual-funds",
    question: "What are mutual funds and how do they work?",
    answer: "Mutual funds are investment vehicles that pool money from multiple investors to invest in securities like stocks, bonds, and other assets. Professional fund managers handle these investments with the goal of generating returns for investors. When you invest in a mutual fund, you're buying units or shares of the fund, not the underlying securities directly."
  },
  {
    id: "investment-strategy",
    question: "How do I create an investment strategy?",
    answer: "Creating an investment strategy involves several steps: 1) Define your financial goals and timeline, 2) Assess your risk tolerance, 3) Determine your asset allocation based on your goals and risk profile, 4) Diversify your investments across different asset classes, 5) Regularly review and rebalance your portfolio. At AR Associates, we can help you create a personalized investment strategy tailored to your specific needs."
  },
  {
    id: "insurance-needs",
    question: "How much life insurance do I need?",
    answer: "The amount of life insurance you need depends on various factors including your income, debts, family's living expenses, future education costs for children, and other financial goals. A common rule of thumb is to have coverage that's 10-15 times your annual income, but this varies based on individual circumstances. For a personalized assessment, consult with one of our financial advisors who can analyze your specific situation."
  },
  {
    id: "retirement-planning",
    question: "When should I start planning for retirement?",
    answer: "The best time to start planning for retirement is as early as possible, ideally when you begin your career. The power of compound interest means that money invested earlier has more time to grow. Even small contributions in your 20s and 30s can grow significantly by retirement age. However, if you haven't started yet, the second-best time is now. Our advisors can help create a retirement strategy regardless of your age or current financial situation."
  },
  {
    id: "tax-saving",
    question: "What are the best tax-saving investment options?",
    answer: "Several tax-saving investment options in India include: ELSS (Equity Linked Savings Scheme), PPF (Public Provident Fund), NSC (National Savings Certificate), Tax-saving FDs, NPS (National Pension System), and Life Insurance Premiums. Each has different tax benefits, lock-in periods, and risk-return profiles. The 'best' option depends on your financial goals, risk tolerance, and investment horizon. Our advisors can help you select the most suitable tax-saving investments based on your personal situation."
  }
];

const FAQSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className="section-padding relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-financial-navy/90 via-[#2a2f42]/90 to-financial-darkpurple/90">
        <motion.div 
          className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-financial-purple/15 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/6 w-72 h-72 rounded-full bg-financial-lightpurple/10 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-financial-lightpurple/20 border border-financial-lightpurple/30 backdrop-blur-sm mb-6">
            <HelpCircle className="h-4 w-4 text-financial-lightpurple" />
            <span className="text-financial-lightpurple text-sm font-medium">Got Questions?</span>
          </div>
          
          <div className="flex justify-center mb-6">
            <motion.div 
              className="bg-financial-purple/30 p-4 rounded-2xl backdrop-blur-sm border border-financial-lightpurple/30"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Book className="h-8 w-8 text-financial-lightpurple" />
            </motion.div>
          </div>
          
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get answers to common questions about our financial services</p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={item.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-financial-lightpurple/20 transition-all duration-500"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-financial-purple/10 to-financial-lightpurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <AccordionTrigger className="relative z-10 px-6 py-6 hover:bg-transparent text-white hover:text-financial-lightpurple text-left font-semibold text-lg transition-colors duration-300 [&[data-state=open]]:text-financial-lightpurple">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-financial-lightpurple rounded-full group-hover:animate-pulse" />
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="relative z-10 px-6 pb-6 text-gray-300 text-base leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
