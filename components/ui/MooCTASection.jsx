'use client';

import Link from 'next/link';
import { Phone, MapPin, Instagram } from 'lucide-react';

const MooCTASection = () => {
  return (
    <section id="cta" className="py-20" style={{ backgroundColor: '#e7d0c1' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-cantata)', color: '#A37E62' }}
          >
            Get Involved
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-[#0E141C]"
            style={{ fontFamily: 'var(--font-aldrich)' }}
          >
            Support Moo With Us
          </h2>
          
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-cantata)', color: '#67391C' }}
          >
            Every cow deserves a chance at a better life. Your support through donations, volunteering, or spreading awareness helps us create lasting positive impact for these gentle creatures and our communities.
          </p>
          <br />
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-aldrich)', color: '#67391C' }}
                >
                  Phone No
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  +91 97511 32000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Instagram className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-aldrich)', color: '#67391C' }}
                >
                  Follow Us
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  <a href="https://www.instagram.com/moowithus.india/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A37E62]">
                    @moowithus.india
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-aldrich)', color: '#67391C' }}
                >
                  Address
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  DBV Foundation, K. Vadamadurai, Kurudampalayam, Tamil Nadu 641017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MooCTASection;