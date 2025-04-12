
import React from 'react';
import { Check, FileInput, LayoutDashboard, Search } from 'lucide-react';

// Define the Cpu component before using it
const Cpu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
};

const steps = [
  {
    icon: <FileInput className="h-10 w-10 text-white" />,
    title: "Enter Property Details",
    description: "Fill in details like square footage, bedrooms, bathrooms, location, and amenities."
  },
  {
    icon: <Cpu className="h-10 w-10 text-white" />,
    title: "AI Analysis",
    description: "Our machine learning model processes your inputs against our comprehensive database."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-white" />,
    title: "View Results",
    description: "Get your property valuation along with insights and comparable properties."
  },
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: "Explore Factors",
    description: "See which features have the biggest impact on your property's value."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-estate-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple process makes it easy to get an accurate valuation for your property in just a few minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-estate-blue rounded-full p-4 mb-6">
                {step.icon}
              </div>
              <div className="relative mb-4">
                <div className="text-2xl font-bold h-10 w-10 rounded-full bg-estate-blue text-white flex items-center justify-center">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-10 h-0.5 bg-estate-blue w-full"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
