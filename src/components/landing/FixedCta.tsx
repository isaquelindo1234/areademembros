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
        className="w-full text-lg h-16 font-bold font-body btn-glow"
        onClick={scrollToOffer}
      >
        <Headphones className="mr-2 h-6 w-6"/>
        Escuchar ahora
      </Button>
    </div>
  );
}
