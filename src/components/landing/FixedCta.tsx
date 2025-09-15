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
        className="w-full text-lg h-14 font-bold font-body btn-glow"
        onClick={scrollToOffer}
      >
        Quiero escuchar la frecuencia
      </Button>
    </div>
  );
}
