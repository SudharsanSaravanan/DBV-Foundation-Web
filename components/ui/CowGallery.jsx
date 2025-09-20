'use client';

import { useState, useEffect } from 'react';

const CowGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImagesCount, setVisibleImagesCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cowImages = [
    { id: 1, url: "/moo-gallery/cow1.jpg", title: "Calf" },
    { id: 2, url: "/moo-gallery/cow2.jpg", title: "Calf" },
    { id: 3, url: "/moo-gallery/cow3.jpg", title: "Calf Resting" },
    { id: 4, url: "/moo-gallery/cow4.jpg", title: "Cow" },
    { id: 5, url: "/moo-gallery/cow5.jpg", title: "Cows" },
    { id: 6, url: "/moo-gallery/cow6.jpg", title: "Bull" },
    { id: 7, url: "/moo-gallery/cow7.jpg", title: "Cow in Field" },
    { id: 8, url: "/moo-gallery/cow8.jpg", title: "Bull in Grass" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewMore = () => setVisibleImagesCount((prev) => prev + 6);

  const handleImageClick = (image) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedImage(image);
      setIsLoading(false);
    }, 3000);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsLoading(false);
  };

  const displayedImages = isMobile ? cowImages.slice(0, visibleImagesCount) : cowImages;

  return (
    <section style={{ backgroundColor: '#f8fff7' }} className="py-20"> {/* soft light green */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)", color: "#2E7D32" }} // medium green
          >
            Sacred Bovines
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-aldrich)", color: "#0E141C" }}
          >
            Moo Moments
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-cantata)", color: "#388E3C" }} // greenish text
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
              className="rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
              style={{ backgroundColor: '#C8E6C9' }} // light green cards
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
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

        {/* View More Button */}
        {isMobile && visibleImagesCount < cowImages.length && (
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:transform hover:scale-105"
              style={{ backgroundColor: '#1B5E20', fontFamily: "var(--font-cantata)" }} // dark green button
            >
              View More
            </button>
          </div>
        )}

        {/* Loading Modal */}
        {isLoading && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-4"></div>
              <p className="text-white text-lg" style={{ fontFamily: "var(--font-cantata)" }}>
                Loading image...
              </p>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedImage && !isLoading && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl max-h-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
              style={{ backgroundColor: '#E8F5E9' }} // light green modal background
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(27, 94, 32, 0.8)' }} // dark green close
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-aldrich)", color: "#1B5E20" }} // dark green title
                >
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Fade-in Animation */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out; }
        `}</style>
      </div>
    </section>
  );
};

export default CowGallery;
