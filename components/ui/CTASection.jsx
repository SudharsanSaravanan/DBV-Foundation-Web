'use client';

import { Phone, MapPin } from 'lucide-react';

const DBVCTASection = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <p
            className="text-lg text-[#2E7D32] uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Get Involved
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Join Our Mission
          </h2>

          <p 
            className="text-lg text-gray-700 mb-12"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Be part of the change you want to see. Your support helps us continue our mission 
            of serving communities and creating lasting positive impact.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 
                  className="font-semibold mb-1"
                  style={{ fontFamily: "var(--font-aldrich)" }}
                >
                  Call Us
                </h4>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  +91 97511 32000
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 
                  className="font-semibold mb-1"
                  style={{ fontFamily: "var(--font-aldrich)" }}
                >
                  Visit Us
                </h4>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-cantata)" }}
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

export default DBVCTASection;
