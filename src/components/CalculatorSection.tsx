
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Target, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SIPCalculator from './SIPCalculator';
import LumpSumCalculator from './LumpSumCalculator';
import GoalCalculator from './GoalCalculator';
import IncomeTaxCalculator from './IncomeTaxCalculator';

const CalculatorSection = () => {
  const { t } = useLanguage();

  return (
    <section id="calculators" className="section-padding bg-financial-navy bg-opacity-50 backdrop-blur-md">
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
              <Calculator className="h-6 w-6 text-financial-lightpurple" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('calculatorsTitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('calculatorsSubtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-financial-navy/50 border border-financial-purple/30">
              <TabsTrigger 
                value="sip" 
                className="data-[state=active]:bg-financial-purple data-[state=active]:text-white text-gray-300 flex items-center gap-2 text-xs md:text-sm px-2 md:px-4"
              >
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">SIP Calculator</span>
                <span className="sm:hidden">SIP</span>
              </TabsTrigger>
              <TabsTrigger 
                value="lumpsum" 
                className="data-[state=active]:bg-financial-purple data-[state=active]:text-white text-gray-300 flex items-center gap-2 text-xs md:text-sm px-2 md:px-4"
              >
                <Calculator className="h-4 w-4" />
                <span className="hidden sm:inline">Lump Sum</span>
                <span className="sm:hidden">Lump Sum</span>
              </TabsTrigger>
              <TabsTrigger 
                value="goal" 
                className="data-[state=active]:bg-financial-purple data-[state=active]:text-white text-gray-300 flex items-center gap-2 text-xs md:text-sm px-2 md:px-4"
              >
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Goal Calculator</span>
                <span className="sm:hidden">Goal</span>
              </TabsTrigger>
              <TabsTrigger 
                value="income-tax" 
                className="data-[state=active]:bg-financial-purple data-[state=active]:text-white text-gray-300 flex items-center gap-2 text-xs md:text-sm px-2 md:px-4"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Income Tax</span>
                <span className="sm:hidden">Tax</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="sip" className="space-y-4">
                <SIPCalculator />
              </TabsContent>

              <TabsContent value="lumpsum" className="space-y-4">
                <LumpSumCalculator />
              </TabsContent>

              <TabsContent value="goal" className="space-y-4">
                <GoalCalculator />
              </TabsContent>

              <TabsContent value="income-tax" className="space-y-4">
                <IncomeTaxCalculator />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
