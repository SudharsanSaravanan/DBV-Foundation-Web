import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
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
            Be part of the change you want to see. Your support helps us continue 
            our mission of serving communities and creating lasting positive impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Join Us
            </button>
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Donate Now
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 
                  className="font-semibold mb-1"
                  style={{ fontFamily: "var(--font-aldrich)" }}
                >
                  Email Us
                </h4>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  contact@trustfoundation.org
                </p>
              </div>
            </div>
            
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
                  +91 98765 43210
                </p>
              </div>
            </div>
            
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
                  123 Service Street, Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;