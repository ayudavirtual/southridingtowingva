import React from 'react';
import { Truck, AlertTriangle, Lock, Battery, Repeat, Wrench, Navigation, Mountain } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="mb-4 text-patriot-red">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-navy-500">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Local Towing",
      description: "Fast local towing in Chantilly and surrounding areas.",
      icon: <Truck size={32} />
    },
    {
      title: "Emergency Towing",
      description: "On-call 24/7. We dispatch quickly and arrive ready.",
      icon: <AlertTriangle size={32} />
    },
    {
      title: "Lockout Services",
      description: "Locked your keys inside? We'll pop it safely.",
      icon: <Lock size={32} />
    },
    {
      title: "Battery Jump Starts",
      description: "Get back on the road with fast, safe jump service.",
      icon: <Battery size={32} />
    },
    {
      title: "Tire Swaps",
      description: "Help with trucks, trailers, or containers—no stress.",
      icon: <Repeat size={32} />
    },
    {
      title: "Private Property Towing",
      description: "HOAs & businesses – contact us for parking enforcement.",
      icon: <Navigation size={32} />
    },
    {
      title: "Flatbed Towing",
      description: "Safe transport for luxury, low-clearance, or inoperable vehicles.",
      icon: <Truck size={32} />
    },
    {
      title: "Winch-Out & Recovery",
      description: "Stuck in mud, snow, or a ditch? Our winch-out service pulls your vehicle to safety.",
      icon: <Mountain size={32} />
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">Our Towing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency lockouts to full towing and impound solutions, JDR Towing delivers it all with speed, professionalism, and fair pricing.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="tel:+17038560270" 
            className="inline-block px-8 py-4 bg-patriot-red hover:bg-red-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Call Now: (703) 856-0270
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services