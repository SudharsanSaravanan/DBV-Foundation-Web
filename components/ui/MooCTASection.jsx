'use client';

import Link from 'next/link';

const MooCTASection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#e7d0c1' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)", color: "#8B6F47" }}
          >
            Get Involved
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Support Moo With Us
          </h2>
          
          <p 
            className="text-lg max-w-3xl mx-auto mb-12"
            style={{ fontFamily: "var(--font-cantata)", color: "#67391C" }}
          >
            Every cow deserves a chance at a better life. Your support, whether through donations, 
            volunteering, or spreading awareness, makes a real difference in the lives of these gentle creatures.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-block px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:bg-[#A37E62]"
            style={{ fontFamily: "var(--font-cantata)", backgroundColor: '#67391C' }}
          >
            Get Involved Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MooCTASection;