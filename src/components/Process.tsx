import React from 'react';
import { Check } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="relative pl-12 pb-8 md:pl-0 md:pb-0">
      {/* Mobile timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-200 md:hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-patriot-red flex items-center justify-center text-white font-bold">
          {number}
        </div>
      </div>
      
      {/* Desktop number */}
      <div className="hidden md:flex w-16 h-16 rounded-full bg-patriot-red text-white text-2xl font-bold items-center justify-center mb-4 mx-auto">
        {number}
      </div>
      
      <div className="md:text-center">
        <h3 className="text-xl font-bold mb-2 text-navy-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what to expect when you request a tow through JDR Towing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Step 
            number={1}
            title="Request a Tow or Roadside Service"
            description="Call or submit your info — dispatch happens fast."
          />
          <Step 
            number={2}
            title="Tow Assigned to Local Driver"
            description="A JDR Towing operator is dispatched ASAP."
          />
          <Step 
            number={3}
            title="Service Is Completed"
            description="From hook-up to handoff, your vehicle is handled with care."
          />
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gold-500 rounded-full p-1 mr-4">
              <Check size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-500">You're Done</h3>
              <p className="text-gray-600">You'll be safely towed, locked in, or jumpstarted in no time.</p>
            </div>
          </div>
          
          <a 
            href="tel:+17038560270" 
            className="px-6 py-3 bg-patriot-red hover:bg-red-700 text-white font-bold rounded-md transition-all duration-300 whitespace-nowrap"
          >
            Call Now: (703) 856-0270
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process