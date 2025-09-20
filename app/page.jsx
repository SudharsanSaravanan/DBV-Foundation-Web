"use client";
import { useEffect, useState } from "react";
import Header1 from "@/components/ui/Header1";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import InitiativesCarousel from "@/components/ui/InitiativesCarousel";
import ImpactSection from "@/components/ui/ImpactSection";
import CTASection from "@/components/ui/CTASection";
import Footer from "@/components/ui/Footer1";
import RotatingCarousel from "@/components/ui/RotatingCarousel";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          {/* Logo */}
          <div className="relative mb-1">
            <div className="w-24 h-24 mx-auto flex items-center justify-center">
              <img
                src="/logo-dbv.png"
                alt="DBV Foundation Logo"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h1
              className="text-3xl font-light tracking-wide text-gray-700"
              style={{ fontFamily: 'var(--font-aldrich)' }}
            >
              DBV Foundation
            </h1>
            
            <p
              className="text-sm font-light tracking-[0.15em] uppercase text-gray-600"
              style={{ fontFamily: 'var(--font-cantata)' }}
            >
              Since 2004
            </p>

            <div className="mt-6">
              <p
                className="text-[#1B5E20] text-sm font-light mb-4"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Loading your journey of compassion...
              </p>
              
              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#66BB6A] to-[#388E3C] rounded-full animate-progress"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animation */}
        <style jsx>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
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
      <Header1 />
      <HeroSection />
      <AboutSection />
      <RotatingCarousel />
      <InitiativesCarousel />
      <ImpactSection />
      <CTASection />
      <Footer />
    </>
  );
}
