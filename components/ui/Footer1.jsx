import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Moo With Us', href: '/moo-with-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#67391C] to-[#4A2818] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6 gap-3">
                <div className="w-14 h-14 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A37E62] to-[#C49E75] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Image
                    src="/logo-dbv.png"
                    alt="DBV Foundation Logo"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
                <div className="flex flex-col">
                  <span 
                    className="text-2xl font-light tracking-wide text-white"
                    style={{ fontFamily: "var(--font-aldrich)" }}
                  >
                    DBV Foundation
                  </span>
                  <span 
                    className="text-sm font-light tracking-[0.15em] uppercase opacity-80"
                    style={{ fontFamily: "var(--font-cantata)", color: "#A37E62" }}
                  >
                    Since 2004
                  </span>
                </div>
              </div>
              
              <p 
                className="text-gray-300 leading-relaxed font-light mb-6 max-w-md"
                style={{ 
                  fontFamily: "var(--font-cantata)",
                  lineHeight: "1.7"
                }}
              >
                Dedicated to serving humanity with compassion and creating positive change in our communities. 
                Together, we build bridges of hope and transform lives through education, food security, and animal welfare.
              </p>

              {/* Decorative Line */}
              <div className="w-20 h-px bg-gradient-to-r from-[#A37E62] to-transparent mb-6"></div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#A37E62] rounded-full"></div>
                  <span className="text-gray-300 font-light" style={{ fontFamily: "var(--font-cantata)" }}>
                    Coimbatore
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#A37E62] rounded-full"></div>
                  <span className="text-gray-300 font-light" style={{ fontFamily: "var(--font-cantata)" }}>
                    10+ Years
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 
                className="font-light mb-6 text-xl tracking-wide"
                style={{ fontFamily: "var(--font-aldrich)", color: "#A37E62" }}
              >
                Navigation
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 font-light"
                      style={{ fontFamily: "var(--font-cantata)" }}
                    >
                      <span className="w-0 h-px bg-[#A37E62] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Trust Information */}
            <div>
              <h4 
                className="font-light mb-6 text-xl tracking-wide"
                style={{ fontFamily: "var(--font-aldrich)", color: "#A37E62" }}
              >
                Legal Information
              </h4>
              <div className="space-y-4">
                <div className="group">
                  <p 
                    className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-light"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    PAN 
                  </p>
                  <p 
                    className="text-gray-300 font-light group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    AAATD7407J
                  </p>
                </div>
                
                <div className="group">
                  <p 
                    className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-light"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    Provisional Approval Number
                  </p>
                  <p 
                    className="text-gray-300 font-light group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    AAATD7407JF20214
                  </p>
                </div>
                
                <div className="group">
                  <p 
                    className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-light"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    Document Identification Number
                  </p>
                  <p 
                    className="text-gray-300 font-light group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    AAATD7407JF2021401
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gradient-to-r from-transparent via-[#A37E62]/30 to-transparent pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p 
                  className="text-gray-400 font-light text-sm"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  © 2025 DBV Foundation. All rights reserved.
                </p>
                <p 
                  className="text-gray-500 font-light text-xs mt-1"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  Developed with compassion for social impact.
                </p>
              </div>

              {/* Social Impact Badge */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span 
                    className="text-gray-300 text-xs font-light tracking-wide"
                    style={{ fontFamily: "var(--font-cantata)" }}
                  >
                    Active Impact
                  </span>
                </div>
              </div>
            </div>
            
            {/* Final Accent Line */}
            <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#A37E62]/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-24 bg-gradient-to-t from-[#A37E62]/10 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;