'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/moo-with-us' },
    { name: 'About Us', href: '/moo-with-us#why-moo' },
    { name: 'Gallery', href: '/moo-with-us#gallery' },
    { name: 'DBV Foundation', href: '/' },
    { name: 'Contact', href: '/moo-with-us#cta' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1B5E20] to-[#388E3C] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-3 md:col-span-2">
              <div className="flex items-center mb-6 gap-3">
                <div className="w-12 h-12 relative group rounded-full overflow-hidden border border-[#66BB6A]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#66BB6A] to-[#388E3C] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Image
                    src="/moo-with-us_logo.jpg"
                    alt="Moo With Us Logo"
                    fill
                    className="object-contain rounded-full relative z-10"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-xl font-light tracking-wide text-white"
                    style={{ fontFamily: 'var(--font-aldrich)' }}
                  >
                    Moo With Us
                  </span>
                  <span
                    className="text-xs font-light tracking-[0.15em] uppercase text-[#66BB6A]"
                    style={{ fontFamily: 'var(--font-cantata)' }}
                  >
                    Since 2021
                  </span>
                </div>
              </div>

              <p
                className="text-gray-200 leading-relaxed font-light mb-6 max-w-lg"
                style={{ fontFamily: 'var(--font-cantata)', lineHeight: '1.7' }}
              >
                Empowering communities through compassion, education, and animal welfare. Join us in creating a brighter future with Moo With Us and DBV Foundation.
              </p>

              {/* Decorative Line */}
              <div className="w-20 h-px bg-gradient-to-r from-[#66BB6A] to-transparent mb-6"></div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#66BB6A] rounded-full"></div>
                  <span
                    className="text-gray-200 font-light"
                    style={{ fontFamily: 'var(--font-cantata)' }}
                  >
                    Coimbatore
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-500"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#66BB6A] rounded-full"></div>
                  <span
                    className="text-gray-200 font-light"
                    style={{ fontFamily: 'var(--font-cantata)' }}
                  >
                    4+ Years
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links - Adjusted positioning */}
            <div className="lg:col-span-2 md:col-span-1 lg:pl-8">
              <h4
                className="font-light mb-6 text-xl tracking-wide text-[#66BB6A]"
                style={{ fontFamily: 'var(--font-aldrich)' }}
              >
                Navigation
              </h4>
              <ul className="space-y-4">
                {navItems.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-200 hover:text-white transition-all duration-300 font-light"
                      style={{ fontFamily: 'var(--font-cantata)' }}
                    >
                      <span className="w-0 h-px bg-[#66BB6A] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gradient-to-r from-transparent via-[#66BB6A]/30 to-transparent pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p
                  className="text-gray-200 font-light text-sm"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  © 2025 Moo With Us & DBV Foundation. All rights reserved.
                </p>
                <p
                  className="text-gray-300 font-light text-xs mt-1"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  Built with compassion for community impact.
                </p>
              </div>
            </div>

            {/* Final Accent Line */}
            <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#66BB6A]/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-24 bg-gradient-to-t from-[#66BB6A]/10 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;