import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import AboutSection from '@/components/ui/AboutSection';
import InitiativesCarousel from '@/components/ui/InitiativesCarousel';
import ImpactSection from '@/components/ui/ImpactSection';
import CTASection from '@/components/ui/CTASection';
import Footer from '@/components/ui/Footer';
import RotatingCarousel from '@/components/ui/RotatingCarousel';

export default function Home() {
  return (
    <>
      <Header />
        <HeroSection />
        <AboutSection />
        <RotatingCarousel />
        <InitiativesCarousel />
        <ImpactSection />
        <CTASection />
      <Footer />
    </>
  );
}
