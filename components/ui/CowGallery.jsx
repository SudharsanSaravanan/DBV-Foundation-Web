'use client';

import { useState, useEffect } from 'react';

const CowGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImagesCount, setVisibleImagesCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  // Extensive cow gallery images
  const cowImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
      title: "Beautiful Holstein Cow"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
      title: "Cow in Green Pasture"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop",
      title: "Brown Cow Portrait"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Cow Herd Together"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=400&h=300&fit=crop",
      title: "Black and White Cow"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Cow Family"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      title: "Jersey Cow"
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Mother and Calf"
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1533318087102-b3ad366ed041?w=400&h=300&fit=crop",
      title: "Peaceful Cow"
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Farm Cow"
    },
  ];

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle View More button click
  const handleViewMore = () => {
    setVisibleImagesCount((prevCount) => prevCount + 6);
  };

  // Determine images to display based on device
  const displayedImages = isMobile ? cowImages.slice(0, visibleImagesCount) : cowImages;

  return (
    <section style={{ backgroundColor: '#F0EFF1' }} className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: "#67391C"
            }}
          >
            Sacred Bovines
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#67391C",
            }}
          >
            Moo Moments
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: "#A37E62"
            }}
          >
            A beautiful collection of our beloved cows, showcasing their peaceful nature, 
            diverse breeds, and the sacred bond between humans and these gentle creatures.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {displayedImages.map((image) => (
            <div 
              key={image.id}
              className="rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{ backgroundColor: '#C49E75' }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <h3 
                    className="text-sm font-bold mb-1"
                    style={{ fontFamily: "var(--font-aldrich)" }}
                  >
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Mobile Only) */}
        {isMobile && visibleImagesCount < cowImages.length && (
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: '#67391C',
                fontFamily: "var(--font-cantata)"
              }}
            >
              View More
            </button>
          </div>
        )}

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="max-w-4xl max-h-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#F0EFF1' }}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(103, 57, 28, 0.8)' }}
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-aldrich)",
                    color: "#67391C",
                  }}
                >
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CowGallery;