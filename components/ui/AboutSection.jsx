const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <p
              className="text-lg uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-cantata)", color: "#A37E62" }}
            >
              About Us
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
              style={{
                fontFamily: "var(--font-aldrich)",
                color: "#67391C",
              }}
            >
              Making a Difference Together
            </h2>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="text-center mb-20">
            <p
              className="text-xl leading-relaxed max-w-4xl mx-auto font-light"
              style={{ fontFamily: "var(--font-cantata)", color: "#555", lineHeight: "1.8" }}
            >
              The <span className="font-semibold text-[#67391C]">DBV Foundation</span> has been
              transforming lives through compassion, empathy, and service since our establishment.
              Our journey began with <span className="text-[#67391C] font-medium">education for children in 2006</span>,
              expanded to <span className="text-[#67391C] font-medium">animal welfare with "Moo With Us" in 2021</span>,
              and launched our <span className="text-[#67391C] font-medium">"Food for All" program on 20th August 2023</span>.
              We believe that every child deserves quality education, every family has the right to
              nutritious food, and every animal should be treated with kindness and dignity.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E9D1B5] to-[#D4C4A8] rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-px bg-[#A37E62] mb-6"></div>
                <h3
                  className="text-2xl font-light mb-6"
                  style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-gray-600 leading-relaxed font-light"
                  style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.7" }}
                >
                  To create a world where every child's potential is unlocked through quality education,
                  no individual experiences hunger, and all animals — especially cows — are treated
                  with reverence and care. We envision communities built on
                  <span className="text-[#67391C] font-medium"> empathy, inclusivity, and sustainability</span>,
                  where kindness becomes the foundation of progress and harmony between humans and nature.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D5DEE3] to-[#C4D0D6] rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-px bg-[#A37E62] mb-6"></div>
                <h3
                  className="text-2xl font-light mb-6"
                  style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-gray-600 leading-relaxed font-light"
                  style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.7" }}
                >
                  To deliver impactful programs that empower underprivileged children through education,
                  provide wholesome meals to families in need every Monday, and offer comprehensive
                  care for cows including food, shelter, and medical assistance. Through
                  <span className="text-[#67391C] font-medium"> community engagement, dedicated service,
                  and innovative approaches</span>, we create lasting change that promotes harmony
                  between humans and animals while addressing fundamental social needs.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3
              className="text-3xl font-light mb-2"
              style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
            >
              Our Core Values
            </h3>
            <p
              className="text-gray-500 font-light"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              The principles that guide our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pb-8">
            <div 
              className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg hover:translate-y-2"
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="h-16 flex items-end justify-center mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] group-hover:h-16 transition-all duration-300"></div>
              </div>
              <h4
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
              >
                Compassion
              </h4>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.6" }}
              >
                We believe in treating every individual and animal with kindness, respect, and dignity,
                fostering harmony between humans and nature.
              </p>
            </div>

            <div 
              className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg hover:translate-y-2"
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="h-16 flex items-end justify-center mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] group-hover:h-16 transition-all duration-300"></div>
              </div>
              <h4
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
              >
                Consistency
              </h4>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.6" }}
              >
                Through regular service like our weekly food distribution, we ensure reliable support
                and build trust within the communities we serve.
              </p>
            </div>

            <div 
              className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg hover:translate-y-2"
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="h-16 flex items-end justify-center mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] group-hover:h-16 transition-all duration-300"></div>
              </div>
              <h4
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
              >
                Holistic Impact
              </h4>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.6" }}
              >
                Our programs address education, nutrition, and animal welfare, creating comprehensive
                solutions that strengthen entire communities for generations.
              </p>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="text-center mt-16">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#A37E62] to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;