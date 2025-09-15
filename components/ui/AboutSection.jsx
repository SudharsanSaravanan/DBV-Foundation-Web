const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            About Us
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Making a Difference Together
          </h2>
          
          <p 
            className="text-lg text-gray-700 mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Our trust has been dedicated to serving communities through various humanitarian initiatives. 
            We believe in the power of collective action and strive to create lasting positive impact 
            through our programs focused on animal welfare, food security, and education.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 
                className="text-2xl font-bold mb-4 text-green-800"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                Our Vision
              </h3>
              <p 
                className="text-gray-700"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                To create a world where compassion drives action, and every living being 
                has access to care, dignity, and opportunities for growth.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 
                className="text-2xl font-bold mb-4 text-blue-800"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                Our Mission
              </h3>
              <p 
                className="text-gray-700"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                To implement sustainable programs that address animal welfare, 
                hunger, and educational gaps while fostering community engagement and volunteer participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;