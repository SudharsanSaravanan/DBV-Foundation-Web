'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      image: "/hero-section1.jpg",
      alt: "DBV Foundation Hero 1"
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
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0} // preload first slide
              quality={70} // optimize size
              sizes="100vw"
              className="object-cover"
            />
            {/* Translucent Grey Overlay */}
            <div className="absolute inset-0 bg-gray-900/40" />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#67391C]/10 via-transparent to-[#A37E62]/10" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Site Name */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6 text-white tracking-wider md:pt-30"
            style={{
              fontFamily: 'var(--font-aldrich)',
              textShadow:
                '2px 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)',
            }}
          >
            DBV FOUNDATION
          </h1>
        </div>

        {/* Info Row */}
        <div
          className={`flex items-center justify-center gap-8 md:gap-12 mb-8 transition-all duration-1000 delay-700 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full mb-0.5 md:mb-0"></div>
            <p
              className="text-white/90 text-[10px] md:text-base font-light tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-cantata)' }}
            >
              Coimbatore
            </p>
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full mb-0.5 md:mb-0"></div>
            <p
              className="text-white/90 text-[10px] md:text-base font-light tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-cantata)' }}
            >
              Since 2004
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
            style={{
              fontFamily: 'var(--font-cantata)',
              textShadow: '1px 1px 10px rgba(0,0,0,0.5)',
              lineHeight: '1.6',
            }}
          >
            Dedicated to serving humanity with compassion and creating positive
            change in our communities
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

export default HeroBanner
