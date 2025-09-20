"use client";
import React from "react";

const carouselMessages = [
  "Serving Humanity with Compassion",
  "Child Dream Education",
  "Food for the Needy",
  "Caring for Cows & Animals",
  "Promoting Kindness",
  "Uplifting Communities",
  "Empowering Through Service",
  "Hope for Every Child",
  "Unity in Diversity",
  "Sustainable Impact",
  "Dedicated Volunteers",
  "Creating Smiles",
  "Transforming Lives",
  "Together for a Better Tomorrow"
];

export default function RotatingCarousel() {
  return (
    <div
      className="w-full py-4 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#1B5E20", // deep green background
        minHeight: "50px",
      }}
    >
      {/* Scrolling Text */}
      <div className="relative overflow-hidden">
        <div
          className="whitespace-nowrap inline-block animate-scroll"
          style={{
            fontFamily: "var(--font-aldrich)",
            color: "#E8F5E9", // light green text
            fontSize: "0.95rem",
            fontWeight: "300",
            letterSpacing: "0.05em",
            lineHeight: "1.4",
          }}
        >
          {[...carouselMessages, ...carouselMessages].map((message, index) => (
            <span key={index} className="inline-block">
              {message}
              <span className="mx-4 sm:mx-3 text-green-200/50">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Fades */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#1B5E20] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#1B5E20] to-transparent pointer-events-none z-10"></div>

      {/* Animation + Responsive Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 70s linear infinite;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 55s linear infinite;
            font-size: 0.8rem !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 65s linear infinite;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
