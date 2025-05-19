
import { createContext, useState, ReactNode, useContext } from 'react';
import { translations } from '@/lib/translations';

type LanguageContextType = {
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = (key: string): string => {
    if (translations['en'] && translations['en'][key]) {
      return translations['en'][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
