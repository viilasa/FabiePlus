import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { AboutSection } from '@/components/sections/about';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { LocationsSection } from '@/components/sections/locations';
import { ContactSection } from '@/components/sections/contact';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { CustomersSection } from '@/components/sections/customers';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CustomersSection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <LocationsSection />
      <ContactSection />
    </>
  );
}