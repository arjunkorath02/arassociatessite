
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book } from 'lucide-react';

// Define the FAQ data structure
interface FAQItem {
  id: string;
  question: {
    en: string;
    ml: string;
  };
  answer: {
    en: string;
    ml: string;
  };
}

const faqItems: FAQItem[] = [
  {
    id: "mutual-funds",
    question: {
      en: "What are mutual funds and how do they work?",
      ml: "മ്യൂച്വൽ ഫണ്ടുകൾ എന്താണ്, അവ എങ്ങനെ പ്രവർത്തിക്കുന്നു?"
    },
    answer: {
      en: "Mutual funds are investment vehicles that pool money from multiple investors to invest in securities like stocks, bonds, and other assets. Professional fund managers handle these investments with the goal of generating returns for investors. When you invest in a mutual fund, you're buying units or shares of the fund, not the underlying securities directly.",
      ml: "മ്യൂച്വൽ ഫണ്ടുകൾ എന്നാൽ ഓഹരികൾ, ബോണ്ടുകൾ, മറ്റ് ആസ്തികൾ എന്നിവയിൽ നിക്ഷേപിക്കുന്നതിന് നിരവധി നിക്ഷേപകരുടെ പണം സമാഹരിക്കുന്ന നിക്ഷേപ വാഹനങ്ങളാണ്. പ്രൊഫഷണൽ ഫണ്ട് മാനേജർമാർ നിക്ഷേപകർക്ക് വരുമാനം ഉണ്ടാക്കുക എന്ന ലക്ഷ്യത്തോടെ ഈ നിക്ഷേപങ്ങൾ കൈകാര്യം ചെയ്യുന്നു. നിങ്ങൾ ഒരു മ്യൂച്വൽ ഫണ്ടിൽ നിക്ഷേപിക്കുമ്പോൾ, നേരിട്ടുള്ള സെക്യൂരിറ്റികൾ അല്ല, ഫണ്ടിന്റെ യൂണിറ്റുകളോ ഷെയറുകളോ ആണ് നിങ്ങൾ വാങ്ങുന്നത്."
    }
  },
  {
    id: "investment-strategy",
    question: {
      en: "How do I create an investment strategy?",
      ml: "എങ്ങനെ ഒരു നിക്ഷേപ തന്ത്രം സൃഷ്ടിക്കാം?"
    },
    answer: {
      en: "Creating an investment strategy involves several steps: 1) Define your financial goals and timeline, 2) Assess your risk tolerance, 3) Determine your asset allocation based on your goals and risk profile, 4) Diversify your investments across different asset classes, 5) Regularly review and rebalance your portfolio. At AR Associates, we can help you create a personalized investment strategy tailored to your specific needs.",
      ml: "ഒരു നിക്ഷേപ തന്ത്രം സൃഷ്ടിക്കുന്നതിൽ നിരവധി ഘട്ടങ്ങൾ ഉൾപ്പെടുന്നു: 1) നിങ്ങളുടെ സാമ്പത്തിക ലക്ഷ്യങ്ങളും സമയരേഖയും നിർവചിക്കുക, 2) നിങ്ങളുടെ റിസ്ക് സഹിഷ്ണുത വിലയിരുത്തുക, 3) നിങ്ങളുടെ ലക്ഷ്യങ്ങളും റിസ്ക് പ്രൊഫൈലും അടിസ്ഥാനമാക്കി നിങ്ങളുടെ ആസ്തി വിഹിതം നിർണ്ണയിക്കുക, 4) വ്യത്യസ്ത ആസ്തി ക്ലാസുകളിലൂടെ നിങ്ങളുടെ നിക്ഷേപങ്ങൾ വൈവിധ്യമാർന്നതാക്കുക, 5) നിങ്ങളുടെ പോർട്ട്ഫോളിയോ പതിവായി അവലോകനം ചെയ്യുകയും പുനഃക്രമീകരിക്കുകയും ചെയ്യുക. AR അസോസിയേറ്റ്സിൽ, നിങ്ങളുടെ പ്രത്യേക ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ ഒരു വ്യക്തിഗത നിക്ഷേപ തന്ത്രം സൃഷ്ടിക്കാൻ ഞങ്ങൾ നിങ്ങളെ സഹായിക്കും."
    }
  },
  {
    id: "insurance-needs",
    question: {
      en: "How much life insurance do I need?",
      ml: "എനിക്ക് എത്ര ലൈഫ് ഇൻഷുറൻസ് ആവശ്യമാണ്?"
    },
    answer: {
      en: "The amount of life insurance you need depends on various factors including your income, debts, family's living expenses, future education costs for children, and other financial goals. A common rule of thumb is to have coverage that's 10-15 times your annual income, but this varies based on individual circumstances. For a personalized assessment, consult with one of our financial advisors who can analyze your specific situation.",
      ml: "നിങ്ങൾക്ക് ആവശ്യമായ ലൈഫ് ഇൻഷുറൻസിന്റെ അളവ് നിങ്ങളുടെ വരുമാനം, കടങ്ങൾ, കുടുംബത്തിന്റെ ജീവിത ചെലവുകൾ, കുട്ടികളുടെ ഭാവി വിദ്യാഭ്യാസ ചെലവുകൾ, മറ്റ് സാമ്പത്തിക ലക്ഷ്യങ്ങൾ തുടങ്ങി വിവിധ ഘടകങ്ങളെ ആശ്രയിച്ചിരിക്കുന്നു. നിങ്ങളുടെ വാർഷിക വരുമാനത്തിന്റെ 10-15 മടങ്ങ് പരിരക്ഷ ഉണ്ടായിരിക്കണമെന്നതാണ് ഒരു പൊതുവായ തത്വം, എന്നാൽ ഇത് വ്യക്തിഗത സാഹചര്യങ്ങൾ അനുസരിച്ച് വ്യത്യാസപ്പെടുന്നു. വ്യക്തിഗത വിലയിരുത്തലിന്, നിങ്ങളുടെ പ്രത്യേക സാഹചര്യം വിശകലനം ചെയ്യാൻ കഴിയുന്ന ഞങ്ങളുടെ ഒരു സാമ്പത്തിക ഉപദേഷ്ടാവുമായി കൂടിയാലോചിക്കുക."
    }
  },
  {
    id: "retirement-planning",
    question: {
      en: "When should I start planning for retirement?",
      ml: "വിരമിക്കൽ ആസൂത്രണം എപ്പോൾ ആരംഭിക്കണം?"
    },
    answer: {
      en: "The best time to start planning for retirement is as early as possible, ideally when you begin your career. The power of compound interest means that money invested earlier has more time to grow. Even small contributions in your 20s and 30s can grow significantly by retirement age. However, if you haven't started yet, the second-best time is now. Our advisors can help create a retirement strategy regardless of your age or current financial situation.",
      ml: "വിരമിക്കൽ ആസൂത്രണം ആരംഭിക്കാനുള്ള ഏറ്റവും നല്ല സമയം കഴിയുന്നത്ര നേരത്തെയാണ്, ആദർശമായി നിങ്ങളുടെ കരിയർ ആരംഭിക്കുമ്പോൾ. കൂട്ട് പലിശയുടെ ശക്തി അർത്ഥമാക്കുന്നത്, നേരത്തെ നിക്ഷേപിച്ച പണത്തിന് വളരാൻ കൂടുതൽ സമയം ഉണ്ടെന്നാണ്. നിങ്ങളുടെ 20-കളിലും 30-കളിലും ചെറിയ സംഭാവനകൾ പോലും വിരമിക്കൽ പ്രായമാകുമ്പോൾ ഗണ്യമായി വളരും. എന്നിരുന്നാലും, നിങ്ങൾ ഇതുവരെ ആരംഭിച്ചിട്ടില്ലെങ്കിൽ, രണ്ടാമത്തെ മികച്ച സമയം ഇപ്പോഴാണ്. നിങ്ങളുടെ പ്രായമോ നിലവിലെ സാമ്പത്തിക സ്ഥിതിയോ എന്തുതന്നെയായാലും ഒരു വിരമിക്കൽ തന്ത്രം സൃഷ്ടിക്കാൻ ഞങ്ങളുടെ ഉപദേഷ്ടാക്കൾ സഹായിക്കും."
    }
  },
  {
    id: "tax-saving",
    question: {
      en: "What are the best tax-saving investment options?",
      ml: "ഏറ്റവും നല്ല നികുതി ലാഭിക്കുന്ന നിക്ഷേപ ഓപ്ഷനുകൾ എന്തെല്ലാമാണ്?"
    },
    answer: {
      en: "Several tax-saving investment options in India include: ELSS (Equity Linked Savings Scheme), PPF (Public Provident Fund), NSC (National Savings Certificate), Tax-saving FDs, NPS (National Pension System), and Life Insurance Premiums. Each has different tax benefits, lock-in periods, and risk-return profiles. The 'best' option depends on your financial goals, risk tolerance, and investment horizon. Our advisors can help you select the most suitable tax-saving investments based on your personal situation.",
      ml: "ഇന്ത്യയിലെ നിരവധി നികുതി ലാഭിക്കുന്ന നിക്ഷേപ ഓപ്ഷനുകളിൽ ഇവ ഉൾപ്പെടുന്നു: ELSS (ഇക്വിറ്റി ലിങ്കഡ് സേവിംഗ്സ് സ്കീം), PPF (പബ്ലിക് പ്രോവിഡന്റ് ഫണ്ട്), NSC (നാഷണൽ സേവിംഗ്സ് സർട്ടിഫിക്കറ്റ്), ടാക്സ്-സേവിംഗ് FDs, NPS (നാഷണൽ പെൻഷൻ സിസ്റ്റം), ലൈഫ് ഇൻഷുറൻസ് പ്രീമിയങ്ങൾ. ഓരോന്നിനും വ്യത്യസ്ത നികുതി ആനുകൂല്യങ്ങളും ലോക്ക്-ഇൻ കാലയളവുകളും റിസ്ക്-റിട്ടേൺ പ്രൊഫൈലുകളും ഉണ്ട്. 'മികച്ച' ഓപ്ഷൻ നിങ്ങളുടെ സാമ്പത്തിക ലക്ഷ്യങ്ങൾ, റിസ്ക് സഹിഷ്ണുത, നിക്ഷേപ കാലയളവ് എന്നിവയെ ആശ്രയിച്ചിരിക്കുന്നു. നിങ്ങളുടെ വ്യക്തിപരമായ സാഹചര്യം അടിസ്ഥാനമാക്കി ഏറ്റവും അനുയോജ്യമായ നികുതി ലാഭിക്കുന്ന നിക്ഷേപങ്ങൾ തിരഞ്ഞെടുക്കാൻ ഞങ്ങളുടെ ഉപദേഷ്ടാക്കൾ നിങ്ങളെ സഹായിക്കും."
    }
  }
];

const FAQSection = () => {
  const { language, t } = useLanguage();
  
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
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-financial-navy/50 border border-financial-purple/30 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-financial-purple/10 text-white hover:text-financial-lightpurple text-left">
                  {language === 'en' ? item.question.en : item.question.ml}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {language === 'en' ? item.answer.en : item.answer.ml}
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
