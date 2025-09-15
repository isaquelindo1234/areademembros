"use client";

import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

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
        className="w-full text-base h-auto py-4 font-bold font-body btn-glow btn-gradient-2"
        onClick={scrollToOffer}
      >
        <Headphones className="w-5 h-5 mr-2" />
        Escuchar la frecuencia ahora
      </Button>
    </div>
  );
}
