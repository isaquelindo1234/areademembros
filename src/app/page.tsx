import { HeroSection } from '@/components/landing/HeroSection';
import { ProofSection } from '@/components/landing/ProofSection';
import { MethodSection } from '@/components/landing/MethodSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { BenefitSection } from '@/components/landing/BenefitSection';
import { ParticleBackground } from '@/components/landing/ParticleBackground';
import { TestimonialSection } from '@/components/landing/TestimonialSection';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background overflow-x-hidden">
      <ParticleBackground />
      <main className="flex-1 z-10">
        <HeroSection />
        <BenefitSection />
        <TestimonialSection />
        <ProofSection />
        <MethodSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
