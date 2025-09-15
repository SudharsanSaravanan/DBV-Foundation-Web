import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import AboutSection from '@/components/ui/AboutSection';
import InitiativesCarousel from '@/components/ui/InitiativesCarousel';
import ImpactSection from '@/components/ui/ImpactSection';
import CTASection from '@/components/ui/CTASection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        <HeroSection />
        <AboutSection />
        <InitiativesCarousel />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
