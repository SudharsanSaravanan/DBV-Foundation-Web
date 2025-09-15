'use client';

import { useState, useEffect, useRef } from 'react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 500, label: "Families Fed", suffix: "+" },
    { number: 200, label: "Children Educated", suffix: "+" },
    { number: 150, label: "Cows Sheltered", suffix: "+" },
    { number: 10, label: "Years of Service", suffix: "+" }
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
        const duration = 2000;
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
    <section ref={sectionRef} className="bg-green-600 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-lg text-green-100 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Our Impact
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            Making a Real Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                {animatedNumbers[index]}{stat.suffix}
              </div>
              <div 
                className="text-green-100 text-sm md:text-base uppercase tracking-wide"
                style={{ fontFamily: "var(--font-cantata)" }}
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

export default ImpactSection;