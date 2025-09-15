import Header from '@/components/ui/Header';
import MooHeroSection from '@/components/ui/MooHeroSection';
import WhyMooSection from '@/components/ui/WhyMooSection';
import CowGallery from '@/components/ui/CowGallery';
import MooImpactSection from '@/components/ui/MooImpactSection';
import MooCTASection from '@/components/ui/MooCTASection';
import Footer from '@/components/ui/Footer';

export default function MooWithUs() {
  return (
    <>
      <Header />
        <MooHeroSection />
        <WhyMooSection />
        <CowGallery />
        <MooImpactSection />
        <MooCTASection />
        <Footer />
    </>
  );
}