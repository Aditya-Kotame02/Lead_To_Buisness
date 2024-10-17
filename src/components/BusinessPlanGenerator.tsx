import React, { useState } from 'react';
import { FileText, Send, Loader } from 'lucide-react';
import axios from 'axios';

const BusinessPlanGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [industry, setIndustry] = useState('');
  const [keyStrategies, setKeyStrategies] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const response = await axios.post('http://localhost:5000/api/generate-plan', {
        businessType,
        targetAudience,
        industry,
        keyStrategies
      });
      setGeneratedPlan(response.data.plan);
    } catch (error) {
      console.error('Error generating business plan:', error);
      setGeneratedPlan('An error occurred while generating the business plan. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... (keep the existing nav and header) ... */}

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Business Plan Generator</h1>
          
          {/* ... (keep the existing form structure) ... */}

          {generatedPlan && (
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Generated Business Plan</h2>
              <div className="bg-gray-100 p-4 rounded-md">
                <pre className="whitespace-pre-wrap font-mono text-sm">{generatedPlan}</pre>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BusinessPlanGenerator;