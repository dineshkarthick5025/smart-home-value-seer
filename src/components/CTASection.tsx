
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-estate-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to discover your home's true value?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Get an accurate, data-driven valuation of your property in minutes, powered by our advanced machine learning algorithms.
        </p>
        <Button className="bg-white text-estate-blue hover:bg-white/90 text-lg px-8 py-6">
          Start Your Free Valuation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
