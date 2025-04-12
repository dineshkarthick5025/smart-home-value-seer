
import React from 'react';
import { Activity, Cpu, Database, LineChart, MapPin, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-estate-blue" />,
    title: "ML-Powered Predictions",
    description: "Our model uses the latest machine learning algorithms to predict house values with high accuracy."
  },
  {
    icon: <MapPin className="h-8 w-8 text-estate-blue" />,
    title: "Location Analysis",
    description: "We factor in neighborhood data, proximity to amenities, and location quality scores."
  },
  {
    icon: <Database className="h-8 w-8 text-estate-blue" />,
    title: "Extensive Data",
    description: "Our predictions are based on millions of property records and market transactions."
  },
  {
    icon: <LineChart className="h-8 w-8 text-estate-blue" />,
    title: "Market Trends",
    description: "We incorporate real-time market trends and historical price data into our forecasts."
  },
  {
    icon: <Activity className="h-8 w-8 text-estate-blue" />,
    title: "Property Insights",
    description: "Get detailed insights about how different features affect your property value."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-estate-blue" />,
    title: "Valuation History",
    description: "Track how your property value changes over time with historical predictions."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our house price prediction system combines cutting-edge technology with comprehensive real estate data to deliver accurate valuations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg feature-card prediction-box-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
