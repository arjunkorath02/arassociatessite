
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CalculatorSection = () => {
  const { language, t } = useLanguage();
  
  const [sipAmount, setSipAmount] = useState<number>(5000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipPeriod, setSipPeriod] = useState<number>(10);
  const [sipResult, setSipResult] = useState<number>(0);
  
  const [lumpSumAmount, setLumpSumAmount] = useState<number>(100000);
  const [lumpSumRate, setLumpSumRate] = useState<number>(10);
  const [lumpSumPeriod, setLumpSumPeriod] = useState<number>(5);
  const [lumpSumResult, setLumpSumResult] = useState<number>(0);
  
  const [goalAmount, setGoalAmount] = useState<number>(1000000);
  const [goalRate, setGoalRate] = useState<number>(12);
  const [goalPeriod, setGoalPeriod] = useState<number>(5);
  const [goalResult, setGoalResult] = useState<number>(0);
  
  const calculateSIP = () => {
    const monthlyRate = sipRate / 1200;
    const months = sipPeriod * 12;
    const amount = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate;
    setSipResult(Math.round(amount));
  };
  
  const calculateLumpSum = () => {
    const amount = lumpSumAmount * Math.pow(1 + lumpSumRate / 100, lumpSumPeriod);
    setLumpSumResult(Math.round(amount));
  };
  
  const calculateGoal = () => {
    const monthlyRate = goalRate / 1200;
    const months = goalPeriod * 12;
    const requiredMonthlyInvestment = goalAmount / (((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate);
    setGoalResult(Math.round(requiredMonthlyInvestment));
  };
  
  const resetSIP = () => {
    setSipAmount(5000);
    setSipRate(12);
    setSipPeriod(10);
    setSipResult(0);
  };
  
  const resetLumpSum = () => {
    setLumpSumAmount(100000);
    setLumpSumRate(10);
    setLumpSumPeriod(5);
    setLumpSumResult(0);
  };
  
  const resetGoal = () => {
    setGoalAmount(1000000);
    setGoalRate(12);
    setGoalPeriod(5);
    setGoalResult(0);
  };
  
  return (
    <section id="calculators" className="section-padding glassmorphism-dark">
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
          className="max-w-3xl mx-auto bg-financial-navy/70 backdrop-blur-xl rounded-xl p-6 border border-financial-purple/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6 bg-financial-darkpurple/50">
              <TabsTrigger value="sip">{t('sipCalculator')}</TabsTrigger>
              <TabsTrigger value="lumpsum">{t('lumpSumCalculator')}</TabsTrigger>
              <TabsTrigger value="goal">{t('goalCalculator')}</TabsTrigger>
            </TabsList>
            
            {/* SIP Calculator */}
            <TabsContent value="sip" className="space-y-6 pt-2">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sip-amount" className="text-white">{t('monthlyInvestment')}</Label>
                  <Input
                    id="sip-amount"
                    type="number"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sip-rate" className="text-white">{t('interestRate')}</Label>
                  <Input
                    id="sip-rate"
                    type="number"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sip-period" className="text-white">{t('timePeriod')}</Label>
                  <Input
                    id="sip-period"
                    type="number"
                    value={sipPeriod}
                    onChange={(e) => setSipPeriod(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button onClick={calculateSIP} className="flex-1 bg-financial-purple hover:bg-financial-lightpurple">{t('calculate')}</Button>
                  <Button variant="outline" onClick={resetSIP} className="flex-1 border-financial-purple/50 text-gray-300 hover:bg-financial-purple/20">{t('reset')}</Button>
                </div>
                
                {sipResult > 0 && (
                  <div className="mt-4 p-4 bg-financial-purple/20 rounded-lg border border-financial-purple/30">
                    <p className="text-gray-300 mb-2">{t('result')}:</p>
                    <p className="text-2xl font-bold text-financial-lightpurple">₹{sipResult.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Lump Sum Calculator */}
            <TabsContent value="lumpsum" className="space-y-6 pt-2">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lumpsum-amount" className="text-white">{t('investmentAmount')}</Label>
                  <Input
                    id="lumpsum-amount"
                    type="number"
                    value={lumpSumAmount}
                    onChange={(e) => setLumpSumAmount(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lumpsum-rate" className="text-white">{t('interestRate')}</Label>
                  <Input
                    id="lumpsum-rate"
                    type="number"
                    value={lumpSumRate}
                    onChange={(e) => setLumpSumRate(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lumpsum-period" className="text-white">{t('timePeriod')}</Label>
                  <Input
                    id="lumpsum-period"
                    type="number"
                    value={lumpSumPeriod}
                    onChange={(e) => setLumpSumPeriod(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button onClick={calculateLumpSum} className="flex-1 bg-financial-purple hover:bg-financial-lightpurple">{t('calculate')}</Button>
                  <Button variant="outline" onClick={resetLumpSum} className="flex-1 border-financial-purple/50 text-gray-300 hover:bg-financial-purple/20">{t('reset')}</Button>
                </div>
                
                {lumpSumResult > 0 && (
                  <div className="mt-4 p-4 bg-financial-purple/20 rounded-lg border border-financial-purple/30">
                    <p className="text-gray-300 mb-2">{t('result')}:</p>
                    <p className="text-2xl font-bold text-financial-lightpurple">₹{lumpSumResult.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Goal-based Calculator */}
            <TabsContent value="goal" className="space-y-6 pt-2">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goal-amount" className="text-white">{t('investmentAmount')} (Goal)</Label>
                  <Input
                    id="goal-amount"
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goal-rate" className="text-white">{t('interestRate')}</Label>
                  <Input
                    id="goal-rate"
                    type="number"
                    value={goalRate}
                    onChange={(e) => setGoalRate(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="goal-period" className="text-white">{t('timePeriod')}</Label>
                  <Input
                    id="goal-period"
                    type="number"
                    value={goalPeriod}
                    onChange={(e) => setGoalPeriod(Number(e.target.value))}
                    className="bg-financial-navy/50 border-financial-purple/30 text-white"
                  />
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button onClick={calculateGoal} className="flex-1 bg-financial-purple hover:bg-financial-lightpurple">{t('calculate')}</Button>
                  <Button variant="outline" onClick={resetGoal} className="flex-1 border-financial-purple/50 text-gray-300 hover:bg-financial-purple/20">{t('reset')}</Button>
                </div>
                
                {goalResult > 0 && (
                  <div className="mt-4 p-4 bg-financial-purple/20 rounded-lg border border-financial-purple/30">
                    <p className="text-gray-300 mb-2">Required Monthly Investment:</p>
                    <p className="text-2xl font-bold text-financial-lightpurple">₹{goalResult.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
