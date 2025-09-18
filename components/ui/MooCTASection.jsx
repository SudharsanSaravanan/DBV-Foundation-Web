'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const MooCTASection = () => {
  return (
    <section id="cta" className="py-20 bg-[#e7d0c1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg uppercase tracking-widest mb-4 text-[#A37E62]"
            style={{ fontFamily: 'var(--font-cantata)' }}
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
            className="text-lg text-[#67391C] mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-cantata)' }}
          >
            Every cow deserves a chance at a better life. Your support through donations, volunteering, or spreading awareness helps us create lasting positive impact for these gentle creatures and our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#cta"
              className="px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 bg-[#67391C] hover:bg-[#A37E62] hover:transform hover:scale-105 shadow-md hover:shadow-lg"
              style={{ fontFamily: 'var(--font-cantata)' }}
            >
              Get Involved Now
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1 text-[#67391C]"
                  style={{ fontFamily: 'var(--font-aldrich)' }}
                >
                  Email Us
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  contact@moowithus.org
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1 text-[#67391C]"
                  style={{ fontFamily: 'var(--font-aldrich)' }}
                >
                  Call Us
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  +91 98765 43210
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#A37E62] mt-1 flex-shrink-0" />
              <div>
                <h4
                  className="font-semibold mb-1 text-[#67391C]"
                  style={{ fontFamily: 'var(--font-aldrich)' }}
                >
                  Visit Us
                </h4>
                <p
                  className="text-[#67391C]"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  123 Service Street, Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="#"
              className="text-[#67391C] hover:text-[#A37E62] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#67391C] hover:text-[#A37E62] transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#67391C] hover:text-[#A37E62] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[#67391C] hover:text-[#A37E62] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MooCTASection;