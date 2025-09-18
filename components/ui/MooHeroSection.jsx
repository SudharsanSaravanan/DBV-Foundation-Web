'use client'
import { useState, useEffect } from 'react'

const MooHeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      image: "/moo-hero/cow1.jpg"
    },
  ]

  // Auto background slide change (6s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Loading animation
  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(loadTimer)
  }, [])

  return (
    <section className="relative py-48 min-h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Translucent Grey Overlay */}
            <div className="absolute inset-0 bg-gray-900/35" />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 pt-10">
        {/* Logo and Title Section */}
        <div className={`flex items-center justify-center mb-6 md:gap-2 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-20 h-20 md:w-30 md:h-30 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden p-1">
            <img 
              src="/moo-with-us_logo.jpg"
              alt="Cow Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ 
                fontFamily: "var(--font-aldrich)",
                textShadow: '2px 2px 20px rgba(0,0,0,0.7)'
              }}
            >
              Moo With Us
            </h1>
            <p 
              className="text-xl md:text-2xl text-[#d7c1af] mt-1"
              style={{ 
                fontFamily: "var(--font-cantata)",
                textShadow: '1px 1px 10px rgba(0,0,0,0.7)'
              }}
            >
              Compassionate Cow Welfare
            </p>
          </div>
        </div>

        {/* Info Row */}
        <div className={`flex items-center justify-center gap-8 md:gap-12 mb-8 pt-5 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
            <p className="text-white/90 text-[10px] md:text-base font-light tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-cantata)' }}>
              Protecting Cows
            </p>
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full"></div>
            <p className="text-white/90 text-[10px] md:text-base font-light tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-cantata)' }}>
              Since 2021
            </p>
          </div>
        </div>
        
        {/* Main Description */}
        <div className={`transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p 
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{ 
              fontFamily: "var(--font-cantata)",
              textShadow: '1px 1px 10px rgba(0,0,0,0.7)'
            }}
          >
            Where compassion becomes action, giving cows dignity, care, and a brighter tomorrow.
            Together, we create a safe haven where these gentle creatures can live with dignity and peace.
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-1 bg-white rounded-full' 
                : 'w-3 h-1 bg-white/40 rounded-full hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default MooHeroBanner