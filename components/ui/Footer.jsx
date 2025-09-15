import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span 
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-aldrich)" }}
                >
                  T
                </span>
              </div>
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                Trust Foundation
              </span>
            </div>
            <p 
              className="text-gray-400"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Dedicated to serving humanity with compassion and creating positive change in our communities since 2014.
            </p>
          </div>
          
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#initiatives" 
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  Initiatives
                </Link>
              </li>
              <li>
                <Link 
                  href="/moo-with-us" 
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  Moo With Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              Trust Information
            </h4>
            <p 
              className="text-gray-400 text-sm mb-2"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Registration No: TN/2014/0123456
            </p>
            <p 
              className="text-gray-400 text-sm mb-2"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              12A Registration: AAABT1234C
            </p>
            <p 
              className="text-gray-400 text-sm"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              80G Registration: AAABT1234CF20214
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p 
            className="text-gray-400"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            © 2025 Trust Foundation. All rights reserved. | Developed with ❤️ for social impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;