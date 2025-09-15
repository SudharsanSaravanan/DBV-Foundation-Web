'use client';

import { useState } from 'react';

const CowGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder cow images with descriptions
  const cowImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
      title: "Rescued Cow Bella",
      description: "Bella was rescued from the streets and now lives happily at our shelter."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
      title: "Our Shelter Facility",
      description: "Our modern shelter provides a safe and comfortable environment for all our cows."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop",
      title: "Daily Care Routine",
      description: "Our volunteers provide daily care including feeding, grooming, and health checkups."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Happy Grazing Time",
      description: "Cows enjoying their free grazing time in our spacious fields."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=400&h=300&fit=crop",
      title: "Veterinary Care",
      description: "Regular health checkups ensure all our cows receive the best medical care."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1605664515998-3190e1f49c5f?w=400&h=300&fit=crop",
      title: "Community Involvement",
      description: "Local families visit our shelter to participate in cow care activities."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Our Work in Action
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Cow Care Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cowImages.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-aldrich)",
                    color: "#0E141C",
                  }}
                >
                  {image.title}
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❝</span>
              </div>
            </div>
            
            <p 
              className="text-xl md:text-2xl text-gray-700 mb-6 italic"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              "The work that Moo With Us does is truly inspiring. Seeing the cows happy and healthy 
              brings such joy to our hearts. We're proud to support this wonderful initiative."
            </p>
            
            <div>
              <p 
                className="font-bold text-lg"
                style={{
                  fontFamily: "var(--font-aldrich)",
                  color: "#0E141C",
                }}
              >
                - Priya Sharma
              </p>
              <p 
                className="text-green-600"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                Long-time Volunteer & Supporter
              </p>
            </div>
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-aldrich)",
                    color: "#0E141C",
                  }}
                >
                  {selectedImage.title}
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CowGallery;