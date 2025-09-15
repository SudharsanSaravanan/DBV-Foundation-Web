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
      title: "Moo With Us",
      description: "Dedicated cow welfare program providing shelter, care, and protection for abandoned and injured cows. Join us in making a difference in animal welfare.",
      icon: <Heart className="w-12 h-12" />,
      link: "/moo-with-us",
      hasDetailedPage: true,
      bgImage: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=800&fit=crop",
      overlayColor: "bg-transparent", // No overlay for this initiative
      iconColor: "text-green-100"
    },
    {
      id: 2,
      title: "Food For All",
      description: "Community food distribution program ensuring no one goes hungry. We provide nutritious meals to families in need across our community.",
      icon: <Utensils className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlayColor: "bg-transparent",
      iconColor: "text-orange-100"
    },
    {
      id: 3,
      title: "Education for Underprivileged",
      description: "Supporting educational opportunities for underprivileged children through scholarships, supplies, and mentorship programs.",
      icon: <BookOpen className="w-12 h-12" />,
      link: null,
      hasDetailedPage: false,
      bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
      overlayColor: "bg-transparent",
      iconColor: "text-blue-100"
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
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${initiative.overlayColor}`} />
                  
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
                        className="inline-block bg-white text-gray-800 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
                        style={{ fontFamily: "var(--font-cantata)" }}
                      >
                        Learn More
                      </Link>
                    ) : (
                      <div> </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/4 right-16 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-1/4 left-16 w-8 h-8 bg-white/10 rounded-full animate-bounce delay-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r transition-all duration-700 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / initiatives.length) * 100}%`,
                background: 'linear-gradient(90deg, #A37E62, #67391C)'
              }}
            />
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-4">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 h-3 rounded-full' 
                    : 'w-3 h-3 rounded-full hover:scale-125'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#A37E62' : '#D5DEE3',
                }}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Pause Indicator */}
          {isPaused && (
            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              💖
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-float" style={{ backgroundColor: '#A37E62' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full animate-float delay-1000" style={{ backgroundColor: '#C49E75' }}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full animate-float delay-500" style={{ backgroundColor: '#E9D1B5' }}></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InitiativesCarousel;