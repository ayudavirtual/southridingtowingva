import React from 'react';
import { MapPin, Shield, DollarSign, Star } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, number }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4 relative">
        {icon}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-patriot-red rounded-full text-white text-sm flex items-center justify-center">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <MapPin size={40} className="text-patriot-red" />,
      title: "Based in Northern Virginia",
      description: "Fast arrival from a company that knows Loudoun and Fairfax roads.",
      number: 1
    },
    {
      icon: <Shield size={40} className="text-patriot-red" />,
      title: "Trusted, Licensed & Insured",
      description: "JDR Towing is a compliant, experienced operator.",
      number: 2
    },
    {
      icon: <DollarSign size={40} className="text-patriot-red" />,
      title: "Honest Pricing",
      description: "No hidden charges or shady add-ons.",
      number: 3
    },
    {
      icon: <Star size={40} className="text-patriot-red" />,
      title: "5-Star Rated",
      description: "Verified reviews from Chantilly drivers & community clients.",
      number: 4
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-500">
          Why Chantilly Locals Use This Page
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12">
          ChantillyTowing.com helps you connect quickly with local tow services—no call centers, no gimmicks.
        </p>

        <div className="text-center italic text-xl text-navy-500 mb-12">
          Powered by Local Professionals
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              number={feature.number}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="tel:+17038560270"
            className="inline-block px-8 py-4 bg-patriot-red hover:bg-red-700 text-white font-bold rounded-md transition-all duration-300"
          >
            Call Now: (703) 856-0270
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;