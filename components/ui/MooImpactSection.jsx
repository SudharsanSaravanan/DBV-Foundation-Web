'use client';

import { useState, useEffect, useRef } from 'react';

const MooImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 60, label: "Cows Rescued", suffix: "+" },
    { number: 10, label: "Bulls Protected", suffix: "+" },
    { number: 10, label: "Calves Nurtured", suffix: "+" },
    { number: 4, label: "Years of Service", suffix: "+" }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2500;
        const steps = 60;
        const increment = stat.number / steps;
        let currentNumber = 0;

        const timer = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= stat.number) {
            currentNumber = stat.number;
            clearInterval(timer);
          }

          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.floor(currentNumber);
            return newNumbers;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: 'white' }}> {/* soft light green */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)", color: "#2E7D32" }} // medium green
          >
            Our Impact
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Creating a Tail of Happiness
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                style={{ fontFamily: "var(--font-aldrich)", color: "#1B5E20" }} // dark green numbers
              >
                {animatedNumbers[index]}{stat.suffix}
              </div>
              <div 
                className="text-sm md:text-base uppercase tracking-wide"
                style={{ fontFamily: "var(--font-cantata)", color: "#388E3C" }} // medium green labels
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MooImpactSection;
