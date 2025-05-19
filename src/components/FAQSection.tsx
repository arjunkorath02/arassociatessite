
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book } from 'lucide-react';

// Define the FAQ data structure
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
    <section id="faq" className="section-padding bg-financial-navy bg-opacity-50 backdrop-blur-md" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-financial-purple/30 p-3 rounded-full" aria-hidden="true">
              <Book className="h-6 w-6 text-financial-lightpurple" />
            </div>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">{t('faqTitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('faqSubtitle')}</p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-financial-navy/50 border border-financial-purple/30 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-financial-purple/10 text-white hover:text-financial-lightpurple text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
