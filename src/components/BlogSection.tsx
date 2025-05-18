
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: {
    en: string;
    ml: string;
  };
  excerpt: {
    en: string;
    ml: string;
  };
  date: string;
  image: string;
  category: {
    en: string;
    ml: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: "mutual-funds-explained",
    title: {
      en: "Understanding Mutual Funds: A Beginner's Guide",
      ml: "മ്യൂച്വൽ ഫണ്ടുകൾ മനസ്സിലാക്കുന്നു: ഒരു തുടക്കക്കാരന്റെ ഗൈഡ്"
    },
    excerpt: {
      en: "Learn about the basics of mutual funds, how they work, and why they're a popular investment option for beginners and experienced investors alike.",
      ml: "മ്യൂച്വൽ ഫണ്ടുകളുടെ അടിസ്ഥാനകാര്യങ്ങൾ, അവ എങ്ങനെ പ്രവർത്തിക്കുന്നു, തുടക്കക്കാർക്കും പരിചയസമ്പന്നരായ നിക്ഷേപകർക്കും ഒരുപോലെ അവ എന്തുകൊണ്ട് ജനപ്രിയ നിക്ഷേപ ഓപ്ഷനാണെന്നും മനസ്സിലാക്കുക."
    },
    date: "2023-04-15",
    image: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/AR%20Associates%20Logo.png",
    category: {
      en: "Investments",
      ml: "നിക്ഷേപങ്ങൾ"
    }
  },
  {
    id: "retirement-planning",
    title: {
      en: "The Power of Early Retirement Planning",
      ml: "നേരത്തെയുള്ള വിരമിക്കൽ ആസൂത്രണത്തിന്റെ ശക്തി"
    },
    excerpt: {
      en: "Discover why starting your retirement planning early can make a significant difference in your financial security during your golden years.",
      ml: "നിങ്ങളുടെ വിരമിക്കൽ ആസൂത്രണം നേരത്തെ ആരംഭിക്കുന്നത് നിങ്ങളുടെ സുവർണ്ണ വർഷങ്ങളിൽ നിങ്ങളുടെ സാമ്പത്തിക സുരക്ഷയിൽ ഗണ്യമായ വ്യത്യാസം വരുത്താൻ കഴിയുന്നതെന്തുകൊണ്ടെന്ന് കണ്ടെത്തുക."
    },
    date: "2023-05-02",
    image: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/AR%20Associates%20Logo.png",
    category: {
      en: "Retirement",
      ml: "വിരമിക്കൽ"
    }
  },
  {
    id: "insurance-importance",
    title: {
      en: "Why Insurance is a Critical Part of Financial Planning",
      ml: "സാമ്പത്തിക ആസൂത്രണത്തിൽ ഇൻഷുറൻസ് എന്തുകൊണ്ട് നിർണായകമാണ്"
    },
    excerpt: {
      en: "Insurance is often overlooked in financial planning. Learn why adequate coverage is essential for protecting your wealth and financial future.",
      ml: "സാമ്പത്തിക ആസൂത്രണത്തിൽ ഇൻഷുറൻസ് പലപ്പോഴും അവഗണിക്കപ്പെടുന്നു. നിങ്ങളുടെ സമ്പത്തും സാമ്പത്തിക ഭാവിയും സംരക്ഷിക്കുന്നതിന് മതിയായ കവറേജ് എന്തുകൊണ്ട് അത്യാവശ്യമാണെന്ന് മനസ്സിലാക്കുക."
    },
    date: "2023-05-18",
    image: "https://raw.githubusercontent.com/ARAssociates23/AR-Associates-logo/main/AR%20Associates%20Logo.png",
    category: {
      en: "Insurance",
      ml: "ഇൻഷുറൻസ്"
    }
  }
];

const BlogSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-financial-navy/50 to-financial-darkpurple/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-financial-purple/30 p-3 rounded-full">
              <FileText className="h-6 w-6 text-financial-lightpurple" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('blogTitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('blogSubtitle')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="glass-card rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-financial-darkpurple/50 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={language === 'en' ? post.title.en : post.title.ml} 
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-financial-lightpurple bg-financial-purple/20 px-3 py-1 rounded-full">
                    {language === 'en' ? post.category.en : post.category.ml}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ml-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {language === 'en' ? post.title.en : post.title.ml}
                </h3>
                <p className="text-gray-300 mb-4">
                  {language === 'en' ? post.excerpt.en : post.excerpt.ml}
                </p>
                <Button variant="ghost" className="text-financial-lightpurple hover:text-white hover:bg-financial-purple/30">
                  {t('readMore')} &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
