
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "ValueSeer predicted my home's value within 2% of what we eventually sold it for. The insights helped us negotiate properly with buyers.",
    author: "Sarah Johnson",
    role: "Homeowner, Boston"
  },
  {
    id: 2,
    content: "As a real estate investor, I use this tool for quick valuations before making offers. It's saved me countless hours of research.",
    author: "Michael Chen",
    role: "Real Estate Investor"
  },
  {
    id: 3,
    content: "The property value factors chart helped us identify which home improvements would most increase our market value. Very insightful!",
    author: "Emily Rodriguez",
    role: "Home Renovator"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered home valuation tool has helped thousands of homeowners and real estate professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg prediction-box-shadow flex flex-col"
            >
              <Quote className="h-10 w-10 text-estate-blue mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
