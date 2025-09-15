const MooHeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=800&fit=crop")'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
            <span 
              className="text-green-600 font-bold text-xl"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              T
            </span>
          </div>
          <div className="text-left">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Moo With Us
            </h1>
            <p 
              className="text-xl md:text-2xl text-green-200"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Compassionate Cow Welfare
            </p>
          </div>
        </div>
        
        <p 
          className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-cantata)" }}
        >
          Join us in our mission to provide shelter, care, and protection for abandoned and injured cows. 
          Together, we create a safe haven where these gentle creatures can live with dignity and peace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Support Our Cows
          </button>
          <button 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default MooHeroSection;