const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-[0.3em] mb-4 font-medium"
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
              The <span className="font-semibold text-[#67391C]">DBV Foundation</span> is committed to
              transforming lives through compassion, empathy, and service. Since 2009, we have been
              working tirelessly to uplift communities by focusing on three core areas:
              <span className="text-[#67391C] font-medium"> education, food security, and animal
              welfare</span>. Our efforts are rooted in the belief that every child deserves the
              opportunity to dream, every family has the right to food, and every animal should be
              treated with kindness and dignity.
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
                  To create a world where every child's aspirations are nurtured through quality
                  education, no individual goes to bed hungry, and all animals — especially cows — are
                  treated with reverence and care. We envision communities built on
                  <span className="text-[#67391C] font-medium"> empathy, inclusivity, and sustainability</span>,
                  where kindness becomes the foundation of progress and harmony.
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
                  To deliver sustainable programs that empower children with dream-driven education,
                  provide nutritious meals to underprivileged families, and establish sanctuaries for
                  animals in need. Through <span className="text-[#67391C] font-medium">community
                  participation, volunteer engagement, and innovative initiatives</span>, we aim to
                  drive long-term impact and inspire a culture of compassion that uplifts society as a
                  whole.
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg">
              <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] mx-auto mb-6 group-hover:h-16 transition-all duration-300"></div>
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
                We believe in treating every individual and animal with kindness, respect, and dignity.
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg">
              <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] mx-auto mb-6 group-hover:h-16 transition-all duration-300"></div>
              <h4
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
              >
                Service
              </h4>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.6" }}
              >
                Through selfless service, we aim to uplift communities and address the root causes of
                poverty and inequality.
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-gray-100 hover:border-[#A37E62] transition-all duration-300 hover:shadow-lg">
              <div className="w-1 h-12 bg-gradient-to-b from-[#A37E62] to-[#67391C] mx-auto mb-6 group-hover:h-16 transition-all duration-300"></div>
              <h4
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-aldrich)", color: "#67391C" }}
              >
                Sustainability
              </h4>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)", lineHeight: "1.6" }}
              >
                Our programs are designed to create lasting impact, promoting education, food
                security, and animal welfare for generations to come.
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