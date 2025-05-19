import React from 'react';
import { Shield, Clock, MapPin, DollarSign } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, number }) => {
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

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">Why Choose JDR Towing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by South Riding residents for reliable, prompt, and professional towing services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <Feature 
            number={1}
            icon={<Shield size={48} />}
            title="Licensed & Insured"
            description="JDR Towing is a fully licensed and insured towing company operating in Northern Virginia. We follow all regulations and maintain the highest safety standards."
          />
          <Feature 
            number={2}
            icon={<Clock size={48} />}
            title="24/7 Emergency Response"
            description="Vehicle troubles don't follow a schedule. We're available around the clock for emergency towing and roadside assistance. Fast response times, every time."
          />
          <Feature 
            number={3}
            icon={<MapPin size={48} />}
            title="Local Experts"
            description="Based in South Riding, we know Loudoun County roads like the back of our hand. This means faster arrivals and better service."
          />
          <Feature 
            number={4}
            icon={<DollarSign size={48} />}
            title="Transparent Pricing"
            description="No hidden charges or surprise fees. We believe in honest, upfront pricing for all our towing and roadside assistance services."
          />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipPGtgY6l1IzXSJBxHHCS8LaNf1SrDWa-UmLjXeE=s1360-w1360-h1020-rw" 
              alt="JDR Towing Service" 
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Family-Owned & Operated</h3>
                <div className="flex items-center justify-center">
                  <div className="text-accent-500 text-2xl">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 text-center">
            JDR Towing is a family-owned business deeply rooted in the South Riding community. Our commitment to exceptional service and customer satisfaction has made us the trusted choice for local residents and businesses alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;