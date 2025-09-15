'use client'
import { useState, useEffect } from 'react'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const words = ['Compassion', 'Service', 'Kindness', 'Hope', 'Unity']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/hero-section.png",
      caption: "Serving smiles through community outreach and education."
    },
  ]

  // Auto background slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative h-[75vh] md:h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#005f60]/30" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        
        {/* Site Name */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-lg"
          style={{ fontFamily: "var(--font-aldrich)" }}
        >
          DBV Foundation
        </h1>
        
        {/* Since */}
        <p 
          className="text-xl md:text-xl text-gray-200 mb-6"
          style={{ fontFamily: "var(--font-cantata)" }}
        >
          Coimbatore | Since 2014
        </p>
        
        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-cantata)" }}
        >
          "Dedicated to serving humanity with compassion and creating positive change in our communities"
        </p>
        
        {/* Rotating Words */}
        <div className="h-16 flex items-center justify-center">
          <span 
            className="text-3xl md:text-4xl font-bold text-green-400 transition-all duration-500 transform"
            style={{ fontFamily: "var(--font-aldrich)" }}
            key={currentWordIndex}
          >
            {words[currentWordIndex]}
          </span>
        </div>

        {/* Caption from slides */}
        <p className="mt-6 text-white text-base sm:text-lg max-w-2xl" style={{ fontFamily: 'var(--font-cantata)' }}>
          {slides[currentSlide].caption}
        </p>
      </div>

      {/* 🌟 Static Glowing Orb */}
      <div className="absolute top-32 right-24 z-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#fff3e0] to-[#6d4c41] blur-2xl opacity-25" />
      </div>
    </section>
  )
}

export default HeroBanner
