import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you arrive?",
      answer: "We typically arrive within 15-30 minutes in the South Riding area. Response times may vary based on traffic and weather conditions."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, cash, and digital payments including Apple Pay and Google Pay."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, JDR Towing is fully licensed and insured in the state of Virginia. We maintain comprehensive coverage for your peace of mind."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve South Riding, Fairfax, Ashburn, and surrounding areas in Northern Virginia. Call us to confirm service in your specific location."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-500">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-navy-500">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;