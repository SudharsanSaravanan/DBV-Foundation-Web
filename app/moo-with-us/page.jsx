import Header2 from '@/components/ui/Header2';
import MooHeroSection from '@/components/ui/MooHeroSection';
import WhyMooSection from '@/components/ui/WhyMooSection';
import CowGallery from '@/components/ui/CowGallery';
import MooImpactSection from '@/components/ui/MooImpactSection';
import MooCTASection from '@/components/ui/MooCTASection';
import Footer from '@/components/ui/Footer';

export default function MooWithUs() {
  return (
    <>
      <Header2 />

      <section id="hero">
        <MooHeroSection />
      </section>

      <section id="why-moo">
        <WhyMooSection />
      </section>

      <section id="gallery">
        <CowGallery />
      </section>

      <section id="impact">
        <MooImpactSection />
      </section>

      <section id="cta">
        <MooCTASection />
      </section>

      <Footer />
    </>
  );
}