'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image 
                src="/logo-dbv.png"   // put your logo inside /public/logo.png
                alt="DBV Foundation Logo"
                fill
                className="object-contain"
              />
            </div>
            <span 
              className="text-xl font-bold text-gray-600"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              DBV Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              About Us
            </Link>
            <Link 
              href="#initiatives" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Initiatives
            </Link>
            <Link 
              href="/moo-with-us"   // <-- new navigation page
              className="text-gray-700 hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Moo With Us
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-600 transition-colors px-4"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-green-600 transition-colors px-4"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#initiatives" 
                className="text-gray-700 hover:text-green-600 transition-colors px-4"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link 
                href="/moo-with-us"   // <-- mobile link for new page
                className="text-gray-700 hover:text-green-600 transition-colors px-4"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Moo With Us
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-green-600 transition-colors px-4"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
