import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { InfoSection } from '@/components/landing/InfoSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials }from '@/components/landing/Testimonials';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <InfoSection />
        <HowItWorks />
        <Testimonials />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
