
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

// Latest Income Tax Slabs for Financial Year 2024-25 (Assessment Year 2025-26)
const oldRegimeTaxSlabs = [
  { min: 0, max: 250000, rate: 0, description: "Income up to ₹2.5 Lakhs" },
  { min: 250000, max: 500000, rate: 5, description: "Income from ₹2.5 Lakhs to ₹5 Lakhs" },
  { min: 500000, max: 1000000, rate: 20, description: "Income from ₹5 Lakhs to ₹10 Lakhs" },
  { min: 1000000, max: Infinity, rate: 30, description: "Income above ₹10 Lakhs" },
];

const newRegimeTaxSlabs = [
  { min: 0, max: 300000, rate: 0, description: "Income up to ₹3 Lakhs" },
  { min: 300000, max: 600000, rate: 5, description: "Income from ₹3 Lakhs to ₹6 Lakhs" },
  { min: 600000, max: 900000, rate: 10, description: "Income from ₹6 Lakhs to ₹9 Lakhs" },
  { min: 900000, max: 1200000, rate: 15, description: "Income from ₹9 Lakhs to ₹12 Lakhs" },
  { min: 1200000, max: 1500000, rate: 20, description: "Income from ₹12 Lakhs to ₹15 Lakhs" },
  { min: 1500000, max: Infinity, rate: 30, description: "Income above ₹15 Lakhs" },
];

// Income Heads as per Income Tax Act
const incomeHeads = [
  { id: "salary", name: "Salary Income", tooltip: "Income from salary, pension, etc." },
  { id: "house_property", name: "Income from House Property", tooltip: "Rental income, interest on home loan, etc." },
  { id: "business", name: "Business & Professional Income", tooltip: "Income from business or profession" },
  { id: "capital_gains", name: "Capital Gains", tooltip: "Income from sale of assets, property, shares, etc." },
  { id: "other_sources", name: "Income from Other Sources", tooltip: "Interest income, dividends, etc." }
];

// Deductions under Chapter VI-A
const commonDeductions = [
  { id: "80c", name: "Section 80C (PPF, ELSS, LIC, etc.)", max: 150000 },
  { id: "80ccd1b", name: "Section 80CCD(1B) - NPS", max: 50000 },
  { id: "80d", name: "Section 80D - Medical Insurance", max: 100000 },
  { id: "80g", name: "Section 80G - Donations", max: Infinity },
  { id: "80tta", name: "Section 80TTA - Interest from Savings Account", max: 10000 },
  { id: "80ttb", name: "Section 80TTB - Interest for Senior Citizens", max: 50000 },
  { id: "80e", name: "Section 80E - Interest on Education Loan", max: Infinity }
];

// Rebates
const taxRebates = [
  { id: "87a", name: "Section 87A - Tax Rebate", max: 25000, applicable: "Income up to ₹7 Lakhs (under new regime)" }
];

// Function to format currency in Indian format (e.g., 1,00,000)
const formatIndianCurrency = (num: number) => {
  return num.toLocaleString('en-IN');
};

// View transitions
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const CalculatorSection = () => {
  const { t } = useLanguage();
  
  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState<number>(5000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipPeriod, setSipPeriod] = useState<number>(10);
  const [sipResult, setSipResult] = useState<number>(0);
  
  // Lump Sum Calculator State
  const [lumpSumAmount, setLumpSumAmount] = useState<number>(100000);
  const [lumpSumRate, setLumpSumRate] = useState<number>(10);
  const [lumpSumPeriod, setLumpSumPeriod] = useState<number>(5);
  const [lumpSumResult, setLumpSumResult] = useState<number>(0);
  
  // Goal Calculator State
  const [goalAmount, setGoalAmount] = useState<number>(1000000);
  const [goalRate, setGoalRate] = useState<number>(12);
  const [goalPeriod, setGoalPeriod] = useState<number>(5);
  const [goalResult, setGoalResult] = useState<number>(0);
  
  // Income Tax Calculator State
  const [financialYear, setFinancialYear] = useState<string>("2024-25");
  const [regime, setRegime] = useState<string>("new");
  
  // Income Sources
  const [incomeDetails, setIncomeDetails] = useState({
    salary: 800000,
    house_property: 0,
    business: 0,
    capital_gains: 0,
    other_sources: 0
  });
  
  // Deductions
  const [deductions, setDeductions] = useState<{ [key: string]: number }>({
    "80c": 0,
    "80ccd1b": 0,
    "80d": 0,
    "80g": 0,
    "80tta": 0,
    "80ttb": 0,
    "80e": 0
  });
  
  // Tax Calculation Results
  const [grossTotalIncome, setGrossTotalIncome] = useState<number>(0);
  const [taxableIncome, setTaxableIncome] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  const [taxRebate, setTaxRebate] = useState<number>(0);
  const [cessAmount, setCessAmount] = useState<number>(0);
  const [surchargePct, setSurchargePct] = useState<number>(0);
  const [surchargeAmount, setSurchargeAmount] = useState<number>(0);
  const [totalTaxPayable, setTotalTaxPayable] = useState<number>(0);
  const [taxBreakdown, setTaxBreakdown] = useState<{slab: string, tax: number}[]>([]);
  
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
  
  const updateIncomeDetail = (type: string, value: number) => {
    setIncomeDetails(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const updateDeduction = (type: string, value: number) => {
    setDeductions(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const calculateTax = () => {
    // Calculate gross total income
    const totalIncome = Object.values(incomeDetails).reduce((sum, value) => sum + value, 0);
    setGrossTotalIncome(totalIncome);
    
    // Calculate total deductions based on regime
    let totalDeductions = 0;
    if (regime === "old") {
      totalDeductions = Object.values(deductions).reduce((sum, value) => sum + value, 0);
    }
    
    // Calculate taxable income
    const calculatedTaxableIncome = Math.max(0, totalIncome - totalDeductions);
    setTaxableIncome(calculatedTaxableIncome);
    
    // Select appropriate tax slabs based on regime
    const taxSlabs = regime === "old" ? oldRegimeTaxSlabs : newRegimeTaxSlabs;
    
    // Calculate tax
    let tax = 0;
    let remainingIncome = calculatedTaxableIncome;
    const breakdown: {slab: string, tax: number}[] = [];
    
    for (const slab of taxSlabs) {
      if (remainingIncome <= 0) break;
      
      const slabAmount = Math.min(remainingIncome, slab.max - slab.min);
      if (slabAmount > 0) {
        const slabTax = slabAmount * (slab.rate / 100);
        tax += slabTax;
        remainingIncome -= slabAmount;
        
        if (slabTax > 0) {
          breakdown.push({
            slab: `${slab.description} @ ${slab.rate}%`,
            tax: slabTax
          });
        }
      }
    }
    
    setTaxBreakdown(breakdown);
    
    // Apply tax rebate under section 87A for income up to 7 lakhs under new regime
    let rebate = 0;
    if (regime === "new" && calculatedTaxableIncome <= 700000) {
      rebate = Math.min(tax, 25000); // Tax rebate up to Rs 25,000
    }
    
    setTaxRebate(rebate);
    tax = Math.max(0, tax - rebate);
    setTaxAmount(Math.round(tax));
    
    // Calculate surcharge based on income
    let surcharge = 0;
    let surchargePercentage = 0;
    
    if (calculatedTaxableIncome > 5000000 && calculatedTaxableIncome <= 10000000) {
      surchargePercentage = 10;
      surcharge = tax * 0.1;
    } else if (calculatedTaxableIncome > 10000000 && calculatedTaxableIncome <= 20000000) {
      surchargePercentage = 15;
      surcharge = tax * 0.15;
    } else if (calculatedTaxableIncome > 20000000 && calculatedTaxableIncome <= 50000000) {
      surchargePercentage = 25;
      surcharge = tax * 0.25;
    } else if (calculatedTaxableIncome > 50000000) {
      surchargePercentage = 37;
      surcharge = tax * 0.37;
    }
    
    setSurchargePct(surchargePercentage);
    setSurchargeAmount(Math.round(surcharge));
    
    // Calculate Cess @ 4%
    const cess = (tax + surcharge) * 0.04;
    setCessAmount(Math.round(cess));
    
    // Calculate total tax payable
    setTotalTaxPayable(Math.round(tax + surcharge + cess));
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
  
  const resetTax = () => {
    setIncomeDetails({
      salary: 800000,
      house_property: 0,
      business: 0,
      capital_gains: 0,
      other_sources: 0
    });
    
    setDeductions({
      "80c": 0,
      "80ccd1b": 0,
      "80d": 0,
      "80g": 0,
      "80tta": 0,
      "80ttb": 0,
      "80e": 0
    });
    
    setGrossTotalIncome(0);
    setTaxableIncome(0);
    setTaxAmount(0);
    setTaxRebate(0);
    setSurchargePct(0);
    setSurchargeAmount(0);
    setCessAmount(0);
    setTotalTaxPayable(0);
    setTaxBreakdown([]);
  };
  
  return (
    <section id="calculators" className="section-padding glassmorphism-dark" style={{ viewTransitionName: "calculators-section" }}>
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
          className="max-w-4xl mx-auto bg-financial-navy/70 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-financial-purple/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ viewTransitionName: "calculator-container" }}
        >
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6 bg-financial-darkpurple/50">
              <TabsTrigger value="sip" style={{ viewTransitionName: "sip-tab" }}>{t('sipCalculator')}</TabsTrigger>
              <TabsTrigger value="lumpsum" style={{ viewTransitionName: "lumpsum-tab" }}>{t('lumpSumCalculator')}</TabsTrigger>
              <TabsTrigger value="goal" style={{ viewTransitionName: "goal-tab" }}>{t('goalCalculator')}</TabsTrigger>
              <TabsTrigger value="tax" style={{ viewTransitionName: "tax-tab" }}>Income Tax</TabsTrigger>
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
                
                <div className="flex flex-col md:flex-row gap-4 pt-2">
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
                
                <div className="flex flex-col md:flex-row gap-4 pt-2">
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
                
                <div className="flex flex-col md:flex-row gap-4 pt-2">
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
            
            {/* Income Tax Calculator */}
            <TabsContent value="tax" className="pt-2">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="financial-year" className="text-white">Financial Year</Label>
                    <Select 
                      value={financialYear} 
                      onValueChange={setFinancialYear}
                    >
                      <SelectTrigger className="bg-financial-navy/50 border-financial-purple/30 text-white">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25 (AY 2025-26)</SelectItem>
                        <SelectItem value="2023-24">2023-24 (AY 2024-25)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tax-regime" className="text-white">Tax Regime</Label>
                    <RadioGroup 
                      value={regime}
                      onValueChange={setRegime}
                      className="flex items-center space-x-4 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new-regime" />
                        <Label htmlFor="new-regime" className="text-white">New Regime</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="old" id="old-regime" />
                        <Label htmlFor="old-regime" className="text-white">Old Regime</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                {/* Income Heads Section */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-white mb-3 border-b border-financial-purple/30 pb-2">Income Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {incomeHeads.map((head) => (
                      <div key={head.id} className="space-y-2">
                        <Label htmlFor={`income-${head.id}`} className="text-white flex items-center">
                          {head.name}
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IndianRupee className="h-4 w-4 text-gray-400" />
                          </div>
                          <Input
                            id={`income-${head.id}`}
                            type="number"
                            value={incomeDetails[head.id as keyof typeof incomeDetails]}
                            onChange={(e) => updateIncomeDetail(head.id, Number(e.target.value))}
                            className="bg-financial-navy/50 border-financial-purple/30 text-white pl-10"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Deductions Section (Only for Old Regime) */}
                {regime === "old" && (
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-white mb-3 border-b border-financial-purple/30 pb-2">
                      Deductions (Chapter VI-A)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {commonDeductions.map((deduction) => (
                        <div key={deduction.id} className="space-y-2">
                          <Label htmlFor={`deduction-${deduction.id}`} className="text-white flex items-center">
                            {deduction.name}
                          </Label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <IndianRupee className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                              id={`deduction-${deduction.id}`}
                              type="number"
                              value={deductions[deduction.id]}
                              onChange={(e) => updateDeduction(deduction.id, Number(e.target.value))}
                              className="bg-financial-navy/50 border-financial-purple/30 text-white pl-10"
                              max={deduction.max !== Infinity ? deduction.max : undefined}
                            />
                          </div>
                          {deduction.max !== Infinity && (
                            <p className="text-xs text-gray-400">*Maximum deduction: ₹{formatIndianCurrency(deduction.max)}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tax Slabs Section */}
                <div className="mt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="tax-slabs" className="border-0">
                      <AccordionTrigger className="py-2 text-financial-lightpurple">
                        View Applicable Tax Slabs
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-2 p-4 bg-financial-navy/80 rounded-lg border border-financial-purple/30">
                          <h4 className="font-medium text-white mb-2">
                            {regime === "old" ? "Old Regime Tax Slabs" : "New Regime Tax Slabs"} for FY {financialYear}
                          </h4>
                          <div className="space-y-2 text-sm">
                            {(regime === "old" ? oldRegimeTaxSlabs : newRegimeTaxSlabs).map((slab, index) => (
                              <div key={index} className="flex justify-between text-gray-300">
                                <span>{slab.description}</span>
                                <span>{slab.rate}%</span>
                              </div>
                            ))}
                          </div>
                          {regime === "new" && (
                            <div className="mt-3 text-sm text-gray-300">
                              <p>* Rebate under section 87A: Tax rebate of up to ₹25,000 for income up to ₹7 Lakhs</p>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <Button onClick={calculateTax} className="flex-1 bg-financial-purple hover:bg-financial-lightpurple">Calculate Tax</Button>
                  <Button variant="outline" onClick={resetTax} className="flex-1 border-financial-purple/50 text-gray-300 hover:bg-financial-purple/20">Reset</Button>
                </div>
                
                {/* Tax Calculation Results */}
                {totalTaxPayable > 0 && (
                  <motion.div 
                    className="mt-6 p-5 bg-financial-purple/20 rounded-lg border border-financial-purple/30"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-medium text-white mb-4 border-b border-financial-purple/30 pb-2">
                      Tax Calculation Summary
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <p className="text-gray-300">Gross Total Income:</p>
                          <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(grossTotalIncome)}</p>
                        </div>
                        
                        {regime === "old" && (
                          <div className="flex justify-between">
                            <p className="text-gray-300">Total Deductions:</p>
                            <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(grossTotalIncome - taxableIncome)}</p>
                          </div>
                        )}
                        
                        <div className="flex justify-between">
                          <p className="text-gray-300">Taxable Income:</p>
                          <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(taxableIncome)}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {taxBreakdown.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-gray-300">Tax Breakdown:</p>
                            {taxBreakdown.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <p className="text-gray-400">{item.slab}</p>
                                <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(Math.round(item.tax))}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      {taxRebate > 0 && (
                        <div className="flex justify-between">
                          <p className="text-gray-300">Tax Rebate (Section 87A):</p>
                          <p className="font-medium text-financial-lightpurple">- ₹{formatIndianCurrency(taxRebate)}</p>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <p className="text-gray-300">Income Tax:</p>
                        <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(taxAmount)}</p>
                      </div>
                      
                      {surchargeAmount > 0 && (
                        <div className="flex justify-between">
                          <p className="text-gray-300">Surcharge ({surchargePct}%):</p>
                          <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(surchargeAmount)}</p>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <p className="text-gray-300">Health & Education Cess (4%):</p>
                        <p className="font-medium text-financial-lightpurple">₹{formatIndianCurrency(cessAmount)}</p>
                      </div>
                      
                      <div className="pt-3 border-t border-financial-purple/30 flex justify-between">
                        <p className="text-gray-200 font-medium">Total Tax Payable:</p>
                        <p className="text-xl font-bold text-financial-lightpurple">₹{formatIndianCurrency(totalTaxPayable)}</p>
                      </div>
                    </div>
                  </motion.div>
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
