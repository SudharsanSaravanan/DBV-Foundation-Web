'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Moo With Us', href: '/moo-with-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A37E62] to-[#67391C] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/logo-dbv.png"
                alt="DBV Foundation Logo"
                fill
                className="object-contain relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-light tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-[#67391C]' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-aldrich)' }}
              >
                DBV Foundation
              </span>
              <span
                className={`text-xs font-light tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-[#A37E62]' : 'text-white/80'
                }`}
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Since 2009
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-light tracking-wide transition-all duration-300 group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#67391C]'
                    : 'text-white/90 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'from-[#A37E62] to-[#67391C]' 
                    : 'from-white/60 to-white'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 border ${
                isScrolled
                  ? 'bg-[#67391C] text-white border-[#67391C] hover:bg-[#A37E62] hover:border-[#A37E62] shadow-md hover:shadow-lg'
                  : 'bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20 hover:border-white/50'
              }`}
              style={{ fontFamily: 'var(--font-cantata)' }}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
              isMenuOpen 
                ? 'bg-gray-100' 
                : isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
            }`}></div>
            {isMenuOpen ? (
              <X size={24} className={`relative z-10 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`} />
            ) : (
              <Menu size={24} className={`relative z-10 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl mt-2">
            <nav className="flex flex-col py-6">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-6 py-3 text-gray-700 hover:text-[#67391C] transition-all duration-300 hover:bg-gray-50"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-[#A37E62] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="font-light tracking-wide">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-6 pt-4 border-t border-gray-100 mt-2">
                <Link
                  href="#contact"
                  className="block w-full text-center py-3 bg-[#67391C] text-white rounded-full font-light tracking-wide transition-all duration-300 hover:bg-[#A37E62] shadow-md hover:shadow-lg"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </header>
  );
};

export default Header;