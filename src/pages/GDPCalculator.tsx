
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const GDPCalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    unemploymentRate: "",
    personalConsumption: "",
    federalExpenditure: "",
    m1: "",
    m2: "",
    federalDebt: ""
  });
  const [gdpResult, setGdpResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = () => {
    // Basic placeholder calculation
    const consumption = parseFloat(formData.personalConsumption) || 0;
    const govSpending = parseFloat(formData.federalExpenditure) || 0;
    const unemployment = parseFloat(formData.unemploymentRate) || 0;
    const m1Value = parseFloat(formData.m1) || 0;
    const m2Value = parseFloat(formData.m2) || 0;
    const debt = parseFloat(formData.federalDebt) || 0;

    // Simple placeholder formula (you can modify this later)
    const gdp = (consumption + govSpending) * (1 - unemployment/100) + (m2Value - m1Value) - (debt * 0.1);
    
    setGdpResult(parseFloat(gdp.toFixed(2)));
    toast.success("GDP calculation completed!");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">GDP Calculator</h1>
          <p className="text-gray-600">Enter the economic indicators below to calculate GDP</p>
        </div>

        <div className="space-y-6">
          {[
            { id: 'unemploymentRate', label: 'Unemployment Rate (%)', placeholder: 'Enter unemployment rate' },
            { id: 'personalConsumption', label: 'Personal Consumption Expenditure ($B)', placeholder: 'Enter personal consumption' },
            { id: 'federalExpenditure', label: 'Federal Government Current Expenditure ($B)', placeholder: 'Enter federal expenditure' },
            { id: 'm1', label: 'M1 Money Supply ($B)', placeholder: 'Enter M1 value' },
            { id: 'm2', label: 'M2 Money Supply ($B)', placeholder: 'Enter M2 value' },
            { id: 'federalDebt', label: 'Federal Debt ($B)', placeholder: 'Enter federal debt' }
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <Input
                type="number"
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full"
                step="0.01"
              />
            </div>
          ))}

          <Button 
            className="w-full bg-[#89964e] hover:bg-[#89964e]/90 text-white"
            size="lg"
            onClick={handleCalculate}
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate GDP
          </Button>

          {gdpResult !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Calculated GDP</h3>
              <p className="text-2xl font-bold text-[#89964e]">${gdpResult.toLocaleString()} Billion</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GDPCalculator;
