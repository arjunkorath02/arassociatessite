
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [result, setResult] = useState<any>(null);

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = timePeriod * 12;
    const maturityAmount = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvested = monthlyInvestment * months;
    const totalReturns = maturityAmount - totalInvested;

    setResult({
      maturityAmount: Math.round(maturityAmount),
      totalInvested,
      totalReturns: Math.round(totalReturns)
    });
  };

  return (
    <Card className="enhanced-glassmorphism border-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
      <CardHeader className="bg-gradient-to-r from-financial-purple/20 to-financial-lightpurple/20 border-b border-white/10">
        <CardTitle className="text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-financial-lightpurple animate-pulse"></div>
          SIP Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Label htmlFor="monthly-investment" className="text-financial-lightpurple font-medium">
              Monthly Investment (₹)
            </Label>
            <Input
              id="monthly-investment"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="bg-financial-navy/50 border-financial-purple/30 text-white focus:border-financial-lightpurple focus:ring-financial-lightpurple/20 transition-all duration-300"
            />
          </motion.div>

          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Label htmlFor="annual-return" className="text-financial-lightpurple font-medium">
              Expected Annual Return (%)
            </Label>
            <Input
              id="annual-return"
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="bg-financial-navy/50 border-financial-purple/30 text-white focus:border-financial-lightpurple focus:ring-financial-lightpurple/20 transition-all duration-300"
            />
          </motion.div>

          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Label htmlFor="time-period" className="text-financial-lightpurple font-medium">
              Time Period (Years)
            </Label>
            <Input
              id="time-period"
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="bg-financial-navy/50 border-financial-purple/30 text-white focus:border-financial-lightpurple focus:ring-financial-lightpurple/20 transition-all duration-300"
            />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={calculateSIP}
            className="w-full bg-gradient-to-r from-financial-purple to-financial-lightpurple hover:from-financial-lightpurple hover:to-financial-purple text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-financial-lightpurple/20 transition-all duration-300"
          >
            Calculate SIP
          </Button>
        </motion.div>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
          >
            <div className="bg-financial-navy/30 rounded-lg p-4 border border-financial-purple/20">
              <p className="text-gray-300 text-sm">Total Invested</p>
              <p className="text-white text-xl font-bold">₹{result.totalInvested.toLocaleString()}</p>
            </div>
            <div className="bg-financial-navy/30 rounded-lg p-4 border border-financial-purple/20">
              <p className="text-gray-300 text-sm">Total Returns</p>
              <p className="text-financial-lightpurple text-xl font-bold">₹{result.totalReturns.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-financial-purple/20 to-financial-lightpurple/20 rounded-lg p-4 border border-financial-lightpurple/30">
              <p className="text-gray-300 text-sm">Maturity Amount</p>
              <p className="text-white text-xl font-bold">₹{result.maturityAmount.toLocaleString()}</p>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default SIPCalculator;
