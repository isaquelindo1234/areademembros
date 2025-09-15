"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeartPulse } from "lucide-react";

export function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if(offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 py-2 px-4 rounded-full text-sm font-body bg-secondary/20 border-secondary/50 text-secondary">
            +8.000 mujeres ya escucharon
        </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-tight mb-6">
            Haz que él regrese a ti… <br/> en solo <span className="text-primary">5 minutos</span> por día
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/80 font-body max-w-2xl mx-auto leading-relaxed mb-10">
            Escucha esta frecuencia del amor y activa la energía que ya ayudó a miles de mujeres latinas a reconectar con sus parejas.
          </p>

          <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
            <HeartPulse className="absolute text-primary animate-ping w-24 h-24 opacity-50"/>
          </div>

          <div className="hidden md:block">
            <Button size="lg" className="text-lg h-14 px-10 font-bold font-body btn-glow glowing-shadow" onClick={scrollToOffer}>
              Quiero escuchar la frecuencia
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
