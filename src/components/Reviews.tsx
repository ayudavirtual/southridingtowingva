import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewProps {
  name: string;
  date: string;
  text: string;
  rating: number;
}

const Review: React.FC<ReviewProps> = ({ name, date, text, rating }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Quote className="absolute -top-4 -left-2 text-gray-200 w-12 h-12 rotate-180" />
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
          ))}
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{text}</p>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-navy-500">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Glass Grass Landscaping",
      date: "18 February 2025",
      text: "They got me out of a ditch when it was freezing rain out. They came within 15 mins of calling",
      rating: 5
    },
    {
      name: "Jessica Smith",
      date: "11 January 2025",
      text: "Of course there's going to be a bunch of people leaving bad reviews because they're annoyed they got towed, lol. Personally, I had a great experience engaging JDR...",
      rating: 5
    },
    {
      name: "Amos Shipe",
      date: "12 October 2023",
      text: "JDR Towing is a great business! Locked my keys in the car. Great communication and Hunter responded quickly and was able to get me back in my car.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-500">
          What Our Clients Are Saying
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          See what your neighbors in Chantilly are saying about their experience with our team. We're proud to have earned the trust of homeowners and businesses throughout Northern Virginia.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              date={review.date}
              text={review.text}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;