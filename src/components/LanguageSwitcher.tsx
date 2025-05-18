
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ml' : 'en');
  };
  
  return (
    <Button 
      onClick={toggleLanguage}
      variant="ghost" 
      size="sm"
      className="flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20"
      aria-label={t('language')}
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-medium">{language === 'en' ? 'മലയാളം' : 'English'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
