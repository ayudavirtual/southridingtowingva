import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-3 text-xl font-bold text-white">JDR Towing</span>
            </div>
            <p className="mb-4 text-gray-200">
              Professional towing services in Chantilly and throughout Northern Virginia. Available 24/7 for all your roadside assistance needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-accent-500 transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent-500 transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent-500 transition-colors duration-300">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">24/7 Emergency Towing</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">Roadside Assistance</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">Lockout Services</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">Battery Jump Starts</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">Private Property Towing</a></li>
              <li><a href="#services" className="hover:text-accent-500 transition-colors duration-300">Flatbed Towing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-bold text-white">24/7 Dispatch</p>
                  <a href="tel:+17038560270" className="hover:text-accent-500 transition-colors duration-300">(703) 856-0270</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <a href="mailto:info@jdrtowing.com" className="hover:text-accent-500 transition-colors duration-300">info@jdrtowing.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-bold text-white">Service Area</p>
                  <p>Chantilly, VA and surrounding areas in Northern Virginia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-primary-700 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JDR Towing. All rights reserved. southridingtowing.com is an independently managed landing page operated for lead generation purposes. All towing services are fulfilled by JDR Towing, Inc., a licensed and insured towing company in Virginia.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-accent-500 transition-colors duration-300 mx-2">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-accent-500 transition-colors duration-300 mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;