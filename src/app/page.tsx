import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { ProofSection } from '@/components/landing/ProofSection';
import { MethodSection } from '@/components/landing/MethodSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { PricingSection } from '@/components/landing/PricingSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        <TestimonialSection />
        <ProofSection />
        <MethodSection />
        <PricingSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
