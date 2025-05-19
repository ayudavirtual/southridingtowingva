import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="text-gold-500 mb-4">★★★★★</div>
      <p className="italic text-gray-700 mb-4">"{quote}"</p>
      <div>
        <p className="font-bold text-navy-500">{author}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Called JDR when my car broke down on Route 50. They arrived in less than 20 minutes and got me back on the road quickly. Highly recommended!",
      author: "Michael S.",
      location: "Chantilly, VA"
    },
    {
      quote: "Professional, fast, and reasonably priced. The driver was super friendly and took great care with my vehicle. Will definitely use them again if needed.",
      author: "Jennifer L.",
      location: "Fairfax, VA"
    },
    {
      quote: "I locked my keys in my car at the shopping center. JDR came within 15 minutes and had my car unlocked in seconds. Lifesavers!",
      author: "David W.",
      location: "Chantilly, VA"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Chantilly drivers have to say about our service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials