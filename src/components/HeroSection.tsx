
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-estate-blue mr-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                SmartHome ValueSeer
              </h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Predict Your Home's Value with AI Precision
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our advanced machine learning algorithm analyzes thousands of data points to give you an accurate home valuation in seconds. Get started today and make informed real estate decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-estate-blue hover:bg-estate-darkBlue text-white px-6 py-3 rounded-lg text-lg">
                Start Prediction
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-estate-blue text-estate-blue hover:bg-estate-blue/10 px-6 py-3 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden prediction-box-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Modern house" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg prediction-box-shadow">
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-estate-green mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Predicted Value</p>
                    <p className="text-xl font-bold text-estate-darkBlue">$425,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
