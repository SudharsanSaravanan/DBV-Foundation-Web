'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Utensils, BookOpen } from 'lucide-react';

const InitiativesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const initiatives = [
    {
      id: 1,
      title: "Food for All",
      description: "Launched on 20th August 2023, our food distribution program ensures that no one goes hungry. Every Monday, we provide wholesome meals to those in need. From 20.08.2023 to 31.08.2025, we have nourished 13,322 people and continue to expand our reach.",
      icon: <Utensils className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "/initiatives/serving-food.jpg",
      iconColor: "text-orange-100"
    },
    {
      id: 2,
      title: "Education for Children",
      description: "Since 2006, we have empowered underprivileged children through quality education, mentorship, and resources, enabling them to build stronger, brighter futures.",
      icon: <BookOpen className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "/initiatives/children-class.jpg",
      iconColor: "text-blue-100"
    },
    {
      id: 3,
      title: "Moo With Us",
      description: "Started in 2021, this initiative is dedicated to the care of cows, providing them with food, shelter, and medical assistance while promoting harmony between humans and animals.",
      icon: <Heart className="w-12 h-12" />,
      link: "/moo-with-us",
      hasDetailedPage: true,
      bgImage: "/initiatives/cow-calf.jpeg",
      iconColor: "text-green-100"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % initiatives.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [initiatives.length, isPaused]);

  return (
    <section id="initiatives" className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: '#2E7D32'
            }}
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

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {initiatives.map((initiative, index) => (
                <div key={initiative.id} className="w-full flex-shrink-0 relative">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${initiative.bgImage})`,
                    }}
                  />
                  {/* Translucent Grey Overlay */}
                  <div className="absolute inset-0 bg-gray-900/35" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-12 md:p-16 text-center h-[500px] flex flex-col justify-center">
                    <div className={`${initiative.iconColor} mb-8 flex justify-center transform transition-transform duration-300 ${
                      index === currentSlide ? 'scale-110' : 'scale-100'
                    }`}>
                      {initiative.icon}
                    </div>
                    
                    <h3 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white transform transition-all duration-500"
                      style={{ 
                        fontFamily: "var(--font-aldrich)",
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {initiative.title}
                    </h3>
                    
                    <p 
                      className="text-gray-100 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                      style={{ 
                        fontFamily: "var(--font-cantata)",
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      {initiative.description}
                    </p>
                    
                    {initiative.hasDetailedPage ? (
                      <Link 
                        href={initiative.link}
                        className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md text-base font-semibold"
                        style={{ fontFamily: "var(--font-cantata)" }}
                      >
                        Learn More
                      </Link>
                    ) : (
                      <div> </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalistic Progress Bar */}
          <div className="mt-6 bg-gray-300/30 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full transition-all duration-700 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / initiatives.length) * 100}%`,
                backgroundColor: '#2E7D32'
              }}
            />
          </div>

          {/* Minimalistic Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-200 rounded-full ${
                  index === currentSlide 
                    ? 'w-2 h-2 opacity-100' 
                    : 'w-2 h-2 opacity-40 hover:opacity-70'
                }`}
                style={{
                  backgroundColor: '#2E7D32',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesCarousel;