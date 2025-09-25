'use client';

import { useState, useEffect } from 'react';
import { Play, X, Image as ImageIcon } from 'lucide-react';

const CowGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [visibleMediaCount, setVisibleMediaCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Breed stories data
  const breedStories = {
    "Kankrej": "The Kankrej is one of the heaviest Indian cattle breeds, known for being both fast and powerful as a draft animal, as well as a good milk producer. From about 1870 onward, Kankrej bulls and cows were exported to Brazil, where they contributed to the creation of the Guzerá breed, which was a founding breed of the American Brahman. Interestingly, the Kankrej has a reputation for being 'aggressive to furious' but will recognize its owner and come when called.",
    
    "Ongole": "The Ongole breed, which originated in Andhra Pradesh, is in high demand internationally due to its resistance to diseases like foot and mouth disease and its adaptability to harsh tropical climates. A traditional custom in the Ongole breeding area was to dedicate the best young bull to a local deity on the 14th day of a well-to-do villager's funeral ceremony. This bull would then become the village's sire and was allowed to roam freely, even entering crop fields, where the farmer had no choice but to feed it. The breed is also known for its strength and is used in traditional bull fights in Andhra Pradesh and Tamil Nadu.",
    
    "Hallikar": "The Hallikar breed has a strong connection to the royal family of Mysore, who provided patronage for the breed and played a key role in its selective breeding for superior draught strength. In the year 2000, the Government of India's Department of Posts commemorated the Hallikar breed by releasing a postage stamp in its name. The bulls are highly valued for their endurance, with a team of Hallikar oxen capable of pulling a loaded cart up to 40 miles per day over rough roads.",
    
    "Gir": "The Gir cow, native to the Gir hills of Gujarat, has a rich history of being a crucial companion to local farmers for centuries. The breed's ability to withstand heat stress and resist diseases has made it a valuable asset in tropical climates. In Brazil, the introduction of the Gir breed led to a revolution in dairy farming, and it was crossbred with the Holstein to create the Girolando breed. The Girolando breed now accounts for 80% of the milk produced in Brazil, highlighting the Gir cow's significant genetic contribution.",
    
    "Kangeyam": "The Kangeyam breed, which originated in Tamil Nadu, is known for its strength and active nature. Bulls of this breed are traditionally used in bull races and the sport of Jallikattu. There are two varieties of the Kangeyam cattle: a smaller one with horns that spread nearly straight, and a larger one with much longer horns that curve outward and backward to almost form a circle. The breed was developed by the late Pattagar of Palayakottai, who was said to have one of the best herds of the breed in the country.",
    
    "Punganur": "The Punganur cow is one of the world's smallest humped cattle breeds, with an average height of 70-90 cm. This rare and endangered breed has gained recent popularity after Prime Minister Narendra Modi posted a video of himself feeding and caressing the cows at his residence. The Punganur cow's milk is particularly notable for its high fat content, at about 8%, compared to the 3-5% found in other cow's milk. Due to its perceived medicinal value, ghee made from Punganur milk is used in offerings for Lord Venkateswara at the Tirumala Tirupati Devasthanams (TTD).",
    
    "Jersey": "The Jersey breed originated on the small British island of Jersey in the English Channel. For over 200 years, from 1789 to 2008, the breed was kept isolated from outside influences by a law that prohibited the import of foreign cattle to the island. This was done to preserve the purity of the breed and maintain its export value. Jersey cows are known for their gentle and docile nature, though bulls can be more aggressive. They are also famous for producing milk that is rich in butterfat and protein, which gives it a creamy, golden color."
  };

  // Media gallery with mixed content (images and videos)
  const mediaGallery = [
    {
      id: 1,
      type: 'image',
      url: "/moo-gallery/cow1.jpg",
      title: "Kankrej Bull",
      breed: "Kankrej"
    },
    {
      id: 2,
      type: 'video',
      url: "/moo-gallery/video1.mp4",
      thumbnail: "/moo-gallery/cow2.jpg",
      title: "Kankrej in Action",
      breed: "Kankrej"
    },
    {
      id: 3,
      type: 'image',
      url: "/moo-gallery/cow3.jpg",
      title: "Ongole Calf Resting",
      breed: "Ongole"
    },
    {
      id: 4,
      type: 'video',
      url: "/moo-gallery/video2.mp4",
      thumbnail: "/moo-gallery/cow4.jpg",
      title: "Ongole Bull Fighting",
      breed: "Ongole"
    },
    {
      id: 5,
      type: 'image',
      url: "/moo-gallery/cow5.jpg",
      title: "Hallikar Cows",
      breed: "Hallikar"
    },
    {
      id: 6,
      type: 'image',
      url: "/moo-gallery/cow6.jpg",
      title: "Gir Bull",
      breed: "Gir"
    },
    {
      id: 7,
      type: 'video',
      url: "/moo-gallery/video3.mp4",
      thumbnail: "/moo-gallery/cow7.jpg",
      title: "Gir Cow in Field",
      breed: "Gir"
    },
    {
      id: 8,
      type: 'image',
      url: "/moo-gallery/cow8.jpg",
      title: "Kangeyam Bull in Grass",
      breed: "Kangeyam"
    },
  ];

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle View More button click
  const handleViewMore = () => {
    setVisibleMediaCount((prevCount) => prevCount + 6);
  };

  // Handle media click with loader
  const handleMediaClick = (media) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setSelectedMedia(media);
      setIsLoading(false);
    }, 1500);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleMediaCount(6);
  };

  // Close modal
  const closeModal = () => {
    setSelectedMedia(null);
    setIsLoading(false);
  };

  // Determine media to display based on filter and device
  const filteredMedia = activeFilter === 'All' 
    ? mediaGallery 
    : mediaGallery.filter(item => item.breed === activeFilter);
  
  const displayedMedia = isMobile ? filteredMedia.slice(0, visibleMediaCount) : filteredMedia;

  // Get unique breed names for filters
  const uniqueBreeds = [...new Set(mediaGallery.map(item => item.breed))];

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
            Moo Moments & Breed Stories
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: "#A37E62"
            }}
          >
            Discover the fascinating stories behind different cow breeds and enjoy our collection 
            of images and videos showcasing these magnificent creatures.
          </p>
        </div>

        {/* Breed Stories Section */}
        <div className="mb-16">
          <h3
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#67391C",
            }}
          >
            Breed Stories & Heritage
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {Object.entries(breedStories).map(([breed, story]) => (
              <div
                key={breed}
                className="p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: 'white' }}
              >
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: "var(--font-aldrich)",
                    color: "#67391C"
                  }}
                >
                  {breed} Cattle
                </h4>
                <div 
                  className="text-sm leading-relaxed space-y-3"
                  style={{ 
                    fontFamily: "var(--font-cantata)",
                    color: "#67391C"
                  }}
                >
                  {story.split('. ').map((point, index, array) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#C49E75" }}
                      ></div>
                      <p className="flex-1">
                        {point}{index < array.length - 1 ? '.' : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleFilterChange('All')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 ${
              activeFilter === 'All' 
                ? 'text-white shadow-lg' 
                : 'text-gray-600 bg-white shadow-md hover:shadow-lg'
            }`}
            style={{
              backgroundColor: activeFilter === 'All' ? '#67391C' : 'white',
              fontFamily: "var(--font-cantata)"
            }}
          >
            All
          </button>
          {uniqueBreeds.map((breed) => (
            <button
              key={breed}
              onClick={() => handleFilterChange(breed)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:transform hover:scale-105 ${
                activeFilter === breed 
                  ? 'text-white shadow-lg' 
                  : 'text-gray-600 bg-white shadow-md hover:shadow-lg'
              }`}
              style={{
                backgroundColor: activeFilter === breed ? '#67391C' : 'white',
                fontFamily: "var(--font-cantata)"
              }}
            >
              {breed}
            </button>
          ))}
        </div>

        {/* Media Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {displayedMedia.map((media) => (
            <div key={media.id} className="group">
              <div 
                className="rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: '#C49E75' }}
                onClick={() => handleMediaClick(media)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={media.type === 'video' ? media.thumbnail : media.url}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Media type indicator */}
                  <div className="absolute top-3 left-3">
                    {media.type === 'video' ? (
                      <div className="bg-black/70 rounded-full p-2">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="bg-black/70 rounded-full p-2">
                        <ImageIcon className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play button for videos */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="w-8 h-8 text-gray-800 fill-current" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Title below the card */}
              <div className="mt-3">
                <h3 
                  className="text-sm font-bold text-center"
                  style={{ 
                    fontFamily: "var(--font-aldrich)",
                    color: "#67391C"
                  }}
                >
                  {media.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Mobile Only) */}
        {isMobile && visibleMediaCount < filteredMedia.length && (
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

        {/* Loading Modal */}
        {isLoading && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-4"></div>
              <p 
                className="text-white text-lg"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                Loading {selectedMedia?.type || 'content'}...
              </p>
            </div>
          </div>
        )}

        {/* Media Modal */}
        {selectedMedia && !isLoading && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-6xl max-h-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
              style={{ backgroundColor: '#F0EFF1' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedMedia.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[70vh] object-contain"
                    poster={selectedMedia.thumbnail}
                  >
                    <source src={selectedMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(103, 57, 28, 0.8)' }}
                >
                  <X className="w-6 h-6" />
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
                  {selectedMedia.title}
                </h3>
                <p 
                  className="text-sm uppercase tracking-wide"
                  style={{ 
                    fontFamily: "var(--font-cantata)",
                    color: "#A37E62"
                  }}
                >
                  {selectedMedia.type} • {selectedMedia.breed} Breed
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CowGallery;