
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, FileText, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaxBreakdown {
  taxableIncome: number;
  oldRegimeTax: number;
  newRegimeTax: number;
  oldRegimeNet: number;
  newRegimeNet: number;
  educationCess: number;
  totalOldRegime: number;
  totalNewRegime: number;
}

const IncomeTaxCalculator = () => {
  const [formData, setFormData] = useState({
    basicSalary: '',
    hra: '',
    otherAllowances: '',
    standardDeduction: '50000',
    section80C: '',
    section80D: '',
    homeLoanInterest: '',
    otherDeductions: '',
    age: 'below60',
    assessmentYear: '2024-25'
  });

  const [result, setResult] = useState<TaxBreakdown | null>(null);

  // Tax slabs for different assessment years
  const taxSlabs = {
    '2024-25': {
      old: [
        { min: 0, max: 250000, rate: 0 },
        { min: 250000, max: 500000, rate: 5 },
        { min: 500000, max: 1000000, rate: 20 },
        { min: 1000000, max: Infinity, rate: 30 }
      ],
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 600000, rate: 5 },
        { min: 600000, max: 900000, rate: 10 },
        { min: 900000, max: 1200000, rate: 15 },
        { min: 1200000, max: 1500000, rate: 20 },
        { min: 1500000, max: Infinity, rate: 30 }
      ]
    },
    '2025-26': {
      old: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 600000, rate: 5 },
        { min: 600000, max: 1200000, rate: 20 },
        { min: 1200000, max: Infinity, rate: 30 }
      ],
      new: [
        { min: 0, max: 300000, rate: 0 },
        { min: 300000, max: 700000, rate: 5 },
        { min: 700000, max: 1000000, rate: 10 },
        { min: 1000000, max: 1200000, rate: 15 },
        { min: 1200000, max: 1500000, rate: 20 },
        { min: 1500000, max: Infinity, rate: 30 }
      ]
    }
  };

  const calculateTax = (income: number, slabs: any[], allowStandardDeduction = false) => {
    let taxableIncome = income;
    
    if (allowStandardDeduction) {
      taxableIncome = Math.max(0, income - 50000); // Standard deduction
    }

    let tax = 0;
    
    for (const slab of slabs) {
      if (taxableIncome > slab.min) {
        const taxableInThisSlab = Math.min(taxableIncome - slab.min, slab.max - slab.min);
        tax += (taxableInThisSlab * slab.rate) / 100;
      }
    }
    
    return { tax, taxableIncome };
  };

  const handleCalculate = () => {
    const grossSalary = parseFloat(formData.basicSalary || '0') + 
                       parseFloat(formData.hra || '0') + 
                       parseFloat(formData.otherAllowances || '0');

    // Apply deduction limits
    const section80C = Math.min(parseFloat(formData.section80C || '0'), 150000);
    const section80D = Math.min(parseFloat(formData.section80D || '0'), 50000);
    const homeLoanInterest = Math.min(parseFloat(formData.homeLoanInterest || '0'), 200000);

    // Old Regime Calculation
    const totalDeductions = section80C + section80D + homeLoanInterest + 
                           parseFloat(formData.otherDeductions || '0') +
                           parseFloat(formData.standardDeduction || '0');

    const oldRegimeIncome = Math.max(0, grossSalary - totalDeductions);
    const selectedYear = formData.assessmentYear as keyof typeof taxSlabs;
    const oldRegimeResult = calculateTax(oldRegimeIncome, taxSlabs[selectedYear].old);

    // New Regime Calculation (no deductions except standard)
    const newRegimeResult = calculateTax(grossSalary, taxSlabs[selectedYear].new, true);

    // Education Cess (4% on tax)
    const oldRegimeEducationCess = oldRegimeResult.tax * 0.04;
    const newRegimeEducationCess = newRegimeResult.tax * 0.04;

    const oldRegimeTotalTax = oldRegimeResult.tax + oldRegimeEducationCess;
    const newRegimeTotalTax = newRegimeResult.tax + newRegimeEducationCess;

    setResult({
      taxableIncome: oldRegimeResult.taxableIncome,
      oldRegimeTax: oldRegimeResult.tax,
      newRegimeTax: newRegimeResult.tax,
      oldRegimeNet: grossSalary - oldRegimeTotalTax,
      newRegimeNet: grossSalary - newRegimeTotalTax,
      educationCess: oldRegimeEducationCess,
      totalOldRegime: oldRegimeTotalTax,
      totalNewRegime: newRegimeTotalTax
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <Card className="enhanced-glassmorphism border-financial-purple/30">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-financial-purple/30 p-3 rounded-full">
              <FileText className="h-6 w-6 text-financial-lightpurple" />
            </div>
          </div>
          <CardTitle className="text-2xl text-white">Income Tax Calculator</CardTitle>
          <p className="text-gray-300">Calculate your tax liability under both old and new tax regimes</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Assessment Year Selection */}
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-xs">
              <Label htmlFor="assessmentYear" className="text-white">Assessment Year</Label>
              <Select value={formData.assessmentYear} onValueChange={(value) => handleInputChange('assessmentYear', value)}>
                <SelectTrigger className="bg-financial-navy/50 border-financial-purple/30 text-white">
                  <SelectValue placeholder="Select Assessment Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-25">AY 2024-25</SelectItem>
                  <SelectItem value="2025-26">AY 2025-26</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Income Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Income Details</h3>
              
              <div>
                <Label htmlFor="basicSalary" className="text-white">Basic Salary (Annual)</Label>
                <Input
                  id="basicSalary"
                  type="number"
                  placeholder="Enter basic salary"
                  value={formData.basicSalary}
                  onChange={(e) => handleInputChange('basicSalary', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="hra" className="text-white">HRA (Annual)</Label>
                <Input
                  id="hra"
                  type="number"
                  placeholder="Enter HRA"
                  value={formData.hra}
                  onChange={(e) => handleInputChange('hra', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="otherAllowances" className="text-white">Other Allowances (Annual)</Label>
                <Input
                  id="otherAllowances"
                  type="number"
                  placeholder="Enter other allowances"
                  value={formData.otherAllowances}
                  onChange={(e) => handleInputChange('otherAllowances', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
            </div>

            {/* Deductions (Old Regime Only) */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Deductions (Old Regime)</h3>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Label htmlFor="section80C" className="text-white">Section 80C</Label>
                  <div className="flex items-center gap-1 text-financial-lightpurple">
                    <Info size={14} />
                    <span className="text-xs">Max ₹1.5L</span>
                  </div>
                </div>
                <Input
                  id="section80C"
                  type="number"
                  placeholder="Enter 80C deductions"
                  value={formData.section80C}
                  onChange={(e) => handleInputChange('section80C', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Label htmlFor="section80D" className="text-white">Section 80D</Label>
                  <div className="flex items-center gap-1 text-financial-lightpurple">
                    <Info size={14} />
                    <span className="text-xs">Max ₹50K</span>
                  </div>
                </div>
                <Input
                  id="section80D"
                  type="number"
                  placeholder="Enter 80D deductions"
                  value={formData.section80D}
                  onChange={(e) => handleInputChange('section80D', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Label htmlFor="homeLoanInterest" className="text-white">Home Loan Interest</Label>
                  <div className="flex items-center gap-1 text-financial-lightpurple">
                    <Info size={14} />
                    <span className="text-xs">Max ₹2L</span>
                  </div>
                </div>
                <Input
                  id="homeLoanInterest"
                  type="number"
                  placeholder="Enter home loan interest"
                  value={formData.homeLoanInterest}
                  onChange={(e) => handleInputChange('homeLoanInterest', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="otherDeductions" className="text-white">Other Deductions</Label>
                <Input
                  id="otherDeductions"
                  type="number"
                  placeholder="Enter other deductions"
                  value={formData.otherDeductions}
                  onChange={(e) => handleInputChange('otherDeductions', e.target.value)}
                  className="bg-financial-navy/50 border-financial-purple/30 text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleCalculate}
              className="bg-financial-purple hover:bg-financial-lightpurple text-white px-8 py-2"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Tax
            </Button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Separator className="mb-6 bg-financial-purple/30" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Old Regime */}
                <Card className="bg-financial-navy/30 border-financial-purple/30">
                  <CardHeader>
                    <CardTitle className="text-white text-center">Old Tax Regime</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-white">
                      <span>Taxable Income:</span>
                      <span>{formatCurrency(result.taxableIncome)}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Income Tax:</span>
                      <span>{formatCurrency(result.oldRegimeTax)}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Education Cess (4%):</span>
                      <span>{formatCurrency(result.educationCess)}</span>
                    </div>
                    <Separator className="bg-financial-purple/30" />
                    <div className="flex justify-between text-financial-lightpurple font-bold">
                      <span>Total Tax:</span>
                      <span>{formatCurrency(result.totalOldRegime)}</span>
                    </div>
                    <div className="flex justify-between text-green-400 font-bold">
                      <span>Net Income:</span>
                      <span>{formatCurrency(result.oldRegimeNet)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* New Regime */}
                <Card className="bg-financial-navy/30 border-financial-purple/30">
                  <CardHeader>
                    <CardTitle className="text-white text-center">New Tax Regime</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-white">
                      <span>Taxable Income:</span>
                      <span>{formatCurrency(result.newRegimeTax > 0 ? (parseFloat(formData.basicSalary || '0') + parseFloat(formData.hra || '0') + parseFloat(formData.otherAllowances || '0') - 50000) : 0)}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Income Tax:</span>
                      <span>{formatCurrency(result.newRegimeTax)}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Education Cess (4%):</span>
                      <span>{formatCurrency(result.newRegimeTax * 0.04)}</span>
                    </div>
                    <Separator className="bg-financial-purple/30" />
                    <div className="flex justify-between text-financial-lightpurple font-bold">
                      <span>Total Tax:</span>
                      <span>{formatCurrency(result.totalNewRegime)}</span>
                    </div>
                    <div className="flex justify-between text-green-400 font-bold">
                      <span>Net Income:</span>
                      <span>{formatCurrency(result.newRegimeNet)}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center">
                <div className="bg-financial-purple/20 p-4 rounded-lg">
                  <p className="text-white font-semibold mb-2">Recommendation:</p>
                  <p className="text-financial-lightpurple">
                    {result.totalOldRegime < result.totalNewRegime 
                      ? `Old Regime saves you ${formatCurrency(result.totalNewRegime - result.totalOldRegime)}`
                      : `New Regime saves you ${formatCurrency(result.totalOldRegime - result.totalNewRegime)}`
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="text-center text-sm text-gray-400 mt-6">
            <p>* This calculator is based on Income Tax slabs for {formData.assessmentYear}</p>
            <p>* Deduction limits: 80C (₹1.5L), 80D (₹50K), Home Loan Interest (₹2L)</p>
            <p>* Please consult a tax advisor for accurate tax planning</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IncomeTaxCalculator;
