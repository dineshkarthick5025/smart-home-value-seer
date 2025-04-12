
import React, { useState } from 'react';
import PredictionForm from './PredictionForm';
import PredictionResult from './PredictionResult';

const PredictionSection = () => {
  const [predictedValue, setPredictedValue] = useState<number | null>(null);

  const handlePredictionResult = (value: number) => {
    setPredictedValue(value);
    
    // Scroll to the results after a brief delay
    setTimeout(() => {
      const resultsElement = document.getElementById('prediction-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="prediction" className="py-16 bg-estate-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Your Home Valuation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to get an accurate AI-powered estimate of your property's current market value.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <PredictionForm onPredictionResult={handlePredictionResult} />
          
          {predictedValue && (
            <div id="prediction-results" className="mt-8">
              <PredictionResult predictedValue={predictedValue} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictionSection;
