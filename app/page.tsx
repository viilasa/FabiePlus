import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { AboutSection } from '@/components/sections/about';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { LocationsSection } from '@/components/sections/locations';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <LocationsSection />
      <ContactSection />
    </>
  );
}