import { Heart, Shield, Users, Stethoscope, Beef, Award } from 'lucide-react';

const WhyMooSection = () => {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "We treat every cow with love and respect, fostering a peaceful and secure environment where abandoned and sick cows can heal and thrive emotionally and physically.",
      color: "text-[#67391C]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Haven",
      description: "We provide spacious enclosures with natural elements and enriched environments to reduce stress and boost immunity, creating a secure home for our bovine family.",
      color: "text-[#67391C]"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Enhanced Health Care",
      description: "Regular vaccinations, meticulous health checks, and improved sanitation ensure optimal well-being. We've learned from challenges and strengthened our health protocols.",
      color: "text-[#67391C]"
    },
    {
      icon: <Beef className="w-8 h-8" />,
      title: "Nutritional Excellence",
      description: "Each cow receives a balanced diet tailored to their individual needs for optimal health and disease resistance, ensuring they get the nutrition they deserve.",
      color: "text-[#67391C]"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Heritage Preservation",
      description: "We protect India's native breeds like Kankrej, Ongole, Hallikar, Gir, Kangeyam, and Punganur from extinction, preserving our rich cultural heritage.",
      color: "text-[#67391C]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description: "Our initiative brings together supporters and volunteers in collective action, creating awareness and building a more compassionate world for these magnificent animals.",
      color: "text-[#67391C]"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p
            className="text-lg uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-cantata)", color: "#A37E62" }}
          >
            A Tail of Happiness
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{
              fontFamily: "var(--font-aldrich)",
              color: "#67391C",
            }}
          >
            Advocating for Joyful Lives for Cows
          </h2>
          
          <p 
            className="text-lg max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-cantata)", color: "#A37E62" }}
          >
            This NGO was started out of genuine concern for cow welfare, a commitment to ethical 
            considerations, a desire to conserve native breeds, a passion for raising awareness, 
            and a belief in the power of collective action. Our goal is to make a positive difference 
            in the lives of cows and create a more compassionate and sustainable world for these 
            magnificent animals.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1" style={{ backgroundColor: '#d6bdae' }}>
              <div className={`${reason.color} mb-6`}>
                {reason.icon}
              </div>
              
              <h3 
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-aldrich)",
                  color: "#67391C",
                }}
              >
                {reason.title}
              </h3>
              
              <p 
                className="leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", color: "#936b51" }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="rounded-2xl p-8 md:p-12 text-center mb-12" style={{ backgroundColor: '#67391C' }}>
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            Our Mission: Empowering the Future of Cows, Nurturing Heritage
          </h3>
          
          <p 
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)", color: "#E9D1B5" }}
          >
            Our mission is to tirelessly advocate for the welfare of cows and protect India's native 
            breeds from the brink of extinction. We are dedicated to safeguarding these gentle 
            creatures and preserving our rich cultural heritage for generations to come through 
            sustainable practices, education, and compassionate care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMooSection;