'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart, Utensils, BookOpen } from 'lucide-react';

const InitiativesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiatives = [
    {
      id: 1,
      title: "Moo With Us",
      description: "Dedicated cow welfare program providing shelter, care, and protection for abandoned and injured cows. Join us in making a difference in animal welfare.",
      icon: <Heart className="w-8 h-8" />,
      link: "/moo-with-us",
      hasDetailedPage: true,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 2,
      title: "Food For All",
      description: "Community food distribution program ensuring no one goes hungry. We provide nutritious meals to families in need across our community.",
      icon: <Utensils className="w-8 h-8" />,
      link: null,
      hasDetailedPage: false,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 3,
      title: "Education for Underprivileged",
      description: "Supporting educational opportunities for underprivileged children through scholarships, supplies, and mentorship programs.",
      icon: <BookOpen className="w-8 h-8" />,
      link: null,
      hasDetailedPage: false,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % initiatives.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [initiatives.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % initiatives.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? initiatives.length - 1 : prevSlide - 1
    );
  };

  return (
    <section id="initiatives" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Our Initiatives
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Creating Positive Impact
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {initiatives.map((initiative) => (
                <div key={initiative.id} className="w-full flex-shrink-0">
                  <div className={`${initiative.bgColor} p-8 md:p-12 text-center h-96 flex flex-col justify-center`}>
                    <div className={`${initiative.iconColor} mb-6 flex justify-center`}>
                      {initiative.icon}
                    </div>
                    
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4"
                      style={{ 
                        fontFamily: "var(--font-aldrich)",
                        color: "#0E141C" 
                      }}
                    >
                      {initiative.title}
                    </h3>
                    
                    <p 
                      className="text-gray-700 mb-6 max-w-2xl mx-auto"
                      style={{ fontFamily: "var(--font-cantata)" }}
                    >
                      {initiative.description}
                    </p>
                    
                    {initiative.hasDetailedPage ? (
                      <Link 
                        href={initiative.link}
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
                        style={{ fontFamily: "var(--font-cantata)" }}
                      >
                        Learn More
                      </Link>
                    ) : (
                      <div 
                        className="inline-block bg-gray-600 text-white px-8 py-3 rounded-full"
                        style={{ fontFamily: "var(--font-cantata)" }}
                      >
                        More Info Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesCarousel;