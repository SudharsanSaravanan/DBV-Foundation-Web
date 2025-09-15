import { Heart, Shield, Users, Stethoscope } from 'lucide-react';

const WhyMooSection = () => {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Every cow deserves love, respect, and proper care. We provide a nurturing environment where abandoned and injured cows can heal and thrive.",
      color: "text-red-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Shelter",
      description: "Our modern shelter facilities provide protection from harsh weather, predators, and human cruelty, ensuring a secure home for all our cows.",
      color: "text-blue-600"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Support",
      description: "With regular veterinary checkups, emergency care, and specialized treatment, we ensure the health and wellbeing of every cow in our care.",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description: "Our initiative brings together volunteers, families, and supporters to create a community dedicated to animal welfare and compassion.",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className="text-lg text-green-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Our Mission
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#0E141C",
            }}
          >
            Why Moo With Us?
          </h2>
          
          <p 
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Cows are gentle, sacred animals that have been integral to human civilization for thousands of years. 
            Yet many find themselves abandoned, injured, or neglected. Our Moo With Us initiative addresses this 
            critical need by providing comprehensive care and protection for these magnificent creatures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${reason.color} mb-6`}>
                {reason.icon}
              </div>
              
              <h3 
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-aldrich)",
                  color: "#0E141C",
                }}
              >
                {reason.title}
              </h3>
              
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            Our Promise
          </h3>
          
          <p 
            className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            We promise to treat every cow with the dignity, respect, and care they deserve. Through our 
            comprehensive welfare program, we provide not just shelter and food, but love, medical care, 
            and a chance for these beautiful animals to live their lives in peace and happiness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMooSection;