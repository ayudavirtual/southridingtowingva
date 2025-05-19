import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-500">
          Need a Tow in Chantilly?
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12">
          Call or request service today. Fast dispatch, fair rates, and experienced drivers are just a click away.
        </p>

        <div className="mb-12 relative">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOKn0g0Zf_6CTvus8w-vza0njlSq52-n2H8_W5g=s1360-w1360-h1020-rw"
            alt="JDR Towing Service in Chantilly"
            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Professional Towing Services</h3>
            <p className="text-xl">Serving Chantilly & Northern Virginia 24/7</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-bold mb-2">Office:</h3>
            <p>Chantilly, VA</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Call:</h3>
            <a href="tel:+17038560270" className="text-navy-500 hover:text-navy-600">
              (703) 856-0270
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2">Email:</h3>
            <a href="mailto:jdrtowing@gmail.com" className="text-navy-500 hover:text-navy-600">
              jdrtowing@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-bold mb-2">Website:</h3>
            <a href="https://jdrtowing.net" className="text-navy-500 hover:text-navy-600">
              jdrtowing.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;