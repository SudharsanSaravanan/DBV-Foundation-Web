'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, Utensils, BookOpen } from 'lucide-react';

const InitiativesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateOffset, setTranslateOffset] = useState(0);
  const containerRef = useRef(null);

  const initiatives = [
    {
      id: 1,
      title: "Moo With Us",
      description: "Started in 2021, this initiative is dedicated to the care of cows, providing them with food, shelter, and medical assistance while promoting harmony between humans and animals.",
      icon: <Heart className="w-12 h-12" />,
      link: "/moo-with-us",
      hasDetailedPage: true,
      bgImage: "/initiatives/cow-calf.jpeg",
      iconColor: "text-green-100"
    },
    {
      id: 2,
      title: "Food for All",
      description: "Launched on 20th August 2023, our food distribution program ensures that no one goes hungry. Every Monday, we provide wholesome meals to those in need. From 20.08.2023 to 31.08.2025, we have nourished 13,322 people and continue to expand our reach.",
      icon: <Utensils className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "/initiatives/serving-food.jpg",
      iconColor: "text-orange-100"
    },
    {
      id: 3,
      title: "Education for Children",
      description: "Since 2006, we have empowered underprivileged children through quality education, mentorship, and resources, enabling them to build stronger, brighter futures.",
      icon: <BookOpen className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "/initiatives/children-class.jpg",
      iconColor: "text-blue-100"
    },
  ];

  useEffect(() => {
    if (!isPaused && !isDragging) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % initiatives.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [initiatives.length, isPaused, isDragging]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? initiatives.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % initiatives.length);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setCurrentX(e.clientX);
    const diff = e.clientX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    setTranslateOffset((diff / containerWidth) * 100);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const threshold = containerWidth * 0.1; // 10% of container width

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
    }

    setIsDragging(false);
    setTranslateOffset(0);
    setIsPaused(false);
  };

  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    setCurrentX(e.touches[0].clientX);
    const diff = e.touches[0].clientX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    setTranslateOffset((diff / containerWidth) * 100);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const threshold = containerWidth * 0.1; // 10% of container width

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToPrevSlide();
      } else {
        goToNextSlide();
      }
    }

    setIsDragging(false);
    setTranslateOffset(0);
    setIsPaused(false);
  };

  return (
    <section id="initiatives" className="py-20" style={{ backgroundColor: '#F0EFF1' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: '#A37E62'
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
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-700 ease-in-out'} cursor-grab active:cursor-grabbing select-none`}
              style={{ 
                transform: `translateX(-${currentSlide * 100 + (isDragging ? -translateOffset : 0)}%)`,
                userSelect: 'none'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
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
                        onClick={(e) => e.stopPropagation()} // Prevent swipe when clicking button
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

          {/* Progress Bar Only */}
          <div className="mt-6 bg-gray-300/30 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full transition-all duration-700 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / initiatives.length) * 100}%`,
                backgroundColor: '#A37E62'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesCarousel;