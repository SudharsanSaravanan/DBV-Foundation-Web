import { Heart, Users, DollarSign, Calendar } from 'lucide-react';

const MooCTASection = () => {
  const supportOptions = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Donate",
      description: "Your financial support helps us provide food, medical care, and shelter maintenance.",
      action: "Make a Donation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Volunteer",
      description: "Join our team and directly help with feeding, cleaning, and caring for our cows.",
      action: "Become a Volunteer"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sponsor a Cow",
      description: "Sponsor the complete care of one cow including food, medical care, and shelter.",
      action: "Sponsor Now"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Visit Us",
      description: "Schedule a visit to our shelter to see our work firsthand and meet our cows.",
      action: "Schedule Visit"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            Support Moo With Us
          </h2>
          
          <p 
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Every cow deserves a chance at a better life. Your support, whether through donations, 
            volunteering, or spreading awareness, makes a real difference in the lives of these gentle creatures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="text-green-600 mb-4 flex justify-center">
                {option.icon}
              </div>
              
              <h3 
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-aldrich)",
                  color: "#0E141C",
                }}
              >
                {option.title}
              </h3>
              
              <p 
                className="text-gray-600 mb-4 text-sm"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                {option.description}
              </p>
              
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            Ready to Make a Difference?
          </h3>
          
          <p 
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Join hundreds of compassionate individuals who are already supporting our mission. 
            Together, we can provide a safe, loving home for more cows in need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Support Moo With Us Today
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Learn More About Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MooCTASection;