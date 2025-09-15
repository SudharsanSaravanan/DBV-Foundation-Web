import { Heart, Shield, Users, Stethoscope } from 'lucide-react';

const WhyMooSection = () => {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "Every cow deserves love, respect, and proper care. We provide a nurturing environment where abandoned and injured cows can heal and thrive.",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Shelter",
      description: "Our modern shelter facilities provide protection from harsh weather, predators, and human cruelty, ensuring a secure home for all our cows.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Support",
      description: "With regular veterinary checkups, emergency care, and specialized treatment, we ensure the health and wellbeing of every cow in our care.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description: "Our initiative brings together volunteers, families, and supporters to create a community dedicated to animal welfare and compassion.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-green-50 py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-rose-100/30 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse"></div>
            <p
              className="text-green-700 uppercase tracking-widest font-medium"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Our Mission
            </p>
          </div>
          
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-gray-800 via-gray-900 to-green-800 bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-aldrich)",
            }}
          >
            Why Moo With Us?
          </h2>
          
          <p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Cows are gentle, sacred animals that have been integral to human civilization for thousands of years. 
            Yet many find themselves abandoned, injured, or neglected. Our Moo With Us initiative addresses this 
            critical need by providing comprehensive care and protection for these magnificent creatures.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${reason.borderColor} hover:border-opacity-50`}
            >
              {/* Icon Container */}
              <div className={`${reason.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`${reason.color}`}>
                  {reason.icon}
                </div>
              </div>
              
              <h3 
                className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors"
                style={{
                  fontFamily: "var(--font-aldrich)",
                }}
              >
                {reason.title}
              </h3>
              
              <p 
                className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                {reason.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${reason.bgColor} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Mission Statement */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 rounded-3xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-green-700 via-emerald-700 to-green-600 rounded-3xl transform -rotate-1"></div>
          
          {/* Main Content */}
          <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center mb-6">
                <div className="w-12 h-px bg-green-200"></div>
                <Heart className="w-6 h-6 text-green-200 mx-4" />
                <div className="w-12 h-px bg-green-200"></div>
              </div>
              
              <h3 
                className="text-3xl md:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                Our Sacred Promise
              </h3>
              
              <p 
                className="text-xl md:text-2xl text-green-50 max-w-5xl mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                We promise to treat every cow with the dignity, respect, and care they deserve. Through our 
                comprehensive welfare program, we provide not just shelter and food, but love, medical care, 
                and a chance for these beautiful animals to live their lives in peace and happiness.
              </p>

              {/* Stats or Call to Action */}
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-aldrich)" }}>500+</div>
                  <div className="text-green-200 text-sm" style={{ fontFamily: "var(--font-cantata)" }}>Cows Rescued</div>
                </div>
                <div className="w-px h-16 bg-green-400"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-aldrich)" }}>24/7</div>
                  <div className="text-green-200 text-sm" style={{ fontFamily: "var(--font-cantata)" }}>Care Available</div>
                </div>
                <div className="w-px h-16 bg-green-400"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-aldrich)" }}>15+</div>
                  <div className="text-green-200 text-sm" style={{ fontFamily: "var(--font-cantata)" }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMooSection;