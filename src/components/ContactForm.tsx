import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to services section after form submission
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      consent: false
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-center text-primary-500">Request Assistance</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="(703) 123-4567"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What do you need help with?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Describe your situation (optional)"
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className="mt-1 mr-2"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I consent to receive SMS updates and marketing from the company. Msg & data rates may apply.
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-md transition-colors duration-300"
        >
          Submit Request
        </button>
      </form>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Or call us directly at <a href="tel:+17038560270" className="text-primary-500 font-bold">(703) 856-0270</a></p>
      </div>
    </div>
  );
};

export default ContactForm;