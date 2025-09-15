'use client';

import { useState, useEffect, useRef } from 'react';

const MooImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 150, label: "Cows Sheltered", suffix: "+" },
    { number: 75, label: "Volunteers Active", suffix: "+" },
    { number: 8000, label: "Litres Milk Donated", suffix: "+" },
    { number: 6, label: "Years of Service", suffix: "+" }
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
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
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
            Moo With Us in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-2"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                {animatedNumbers[index]}{stat.suffix}
              </div>
              <div 
                className="text-gray-600 text-sm md:text-base uppercase tracking-wide"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-xl">
            <h4 
              className="text-xl font-bold mb-4 text-green-800"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Rescue & Rehabilitation
            </h4>
            <p 
              className="text-gray-700"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              We have successfully rescued and rehabilitated over 150 cows from dangerous situations, 
              providing them with medical care, proper nutrition, and a safe environment to recover.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 
              className="text-xl font-bold mb-4 text-blue-800"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Community Engagement
            </h4>
            <p 
              className="text-gray-700"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Our volunteer program has grown to include over 75 dedicated individuals who contribute 
              their time, skills, and resources to support our cow welfare mission.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl">
            <h4 
              className="text-xl font-bold mb-4 text-yellow-800"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Sustainable Impact
            </h4>
            <p 
              className="text-gray-700"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              The milk donated by our healthy cows has been distributed to over 200 families in need, 
              creating a sustainable cycle of giving back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MooImpactSection;