import React from 'react';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7800158/pexels-photo-7800158.jpeg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              24/7 Towing Services in South Riding, VA
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Fast, reliable roadside assistance when you need it most
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+17038560270" 
                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call Now: (703) 856-0270
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Services
              </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 rounded-full mr-2"></div>
                <span className="text-white">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 rounded-full mr-2"></div>
                <span className="text-white">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent-500 rounded-full mr-2"></div>
                <span className="text-white">20+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;