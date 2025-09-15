"use client";

import { Button } from "@/components/ui/button";

export function FixedCta() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed-cta">
      <Button
        size="lg"
        className="w-full text-lg h-16 font-bold font-body btn-glow btn-gradient"
        onClick={scrollToOffer}
      >
        QUERO OUVIR A FREQUÊNCIA
      </Button>
    </div>
  );
}
