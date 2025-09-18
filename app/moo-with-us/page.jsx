"use client";
import { useEffect, useState } from "react";
import Header2 from '@/components/ui/Header2';
import MooHeroSection from '@/components/ui/MooHeroSection';
import WhyMooSection from '@/components/ui/WhyMooSection';
import CowGallery from '@/components/ui/CowGallery';
import MooImpactSection from '@/components/ui/MooImpactSection';
import MooCTASection from '@/components/ui/MooCTASection';
import Footer from '@/components/ui/Footer2';

export default function MooWithUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set timeout for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#F0EFF1] to-white">
        {/* Main Loader Container */}
        <div className="text-center">
          {/* Logo Container */}
          <div className="relative mb-1">
            <div className="w-24 h-24 mx-auto flex items-center justify-center">
              <img
                src="/moo-with-us_logo.jpg"
                alt="DBV Foundation Logo"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h1
              className="text-3xl font-light tracking-wide text-[#67391C]"
              style={{ 
                fontFamily: 'var(--font-aldrich)'
              }}
            >
              Moo With Us
            </h1>
            
            <p
              className="text-sm font-light tracking-[0.15em] uppercase text-[#A37E62]"
              style={{ 
                fontFamily: 'var(--font-cantata)'
              }}
            >
              Sacred Bovine Care
            </p>

            <div className="mt-6">
              <p
                className="text-[#67391C] text-sm font-light mb-4"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Loading sanctuary of care and compassion...
              </p>
              
              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#A37E62] to-[#67391C] rounded-full animate-progress"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          .animate-progress {
            animation: progress 3s ease-in-out forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Header2 />
      
      <section id="hero">
        <MooHeroSection />
      </section>

      <section id="why-moo">
        <WhyMooSection />
      </section>

      <section id="gallery">
        <CowGallery />
      </section>

      <section id="impact">
        <MooImpactSection />
      </section>

      <section id="cta">
        <MooCTASection />
      </section>

      <Footer />
    </>
  );
}