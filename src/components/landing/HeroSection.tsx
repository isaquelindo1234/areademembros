"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if(offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const avatars = [
    "https://picsum.photos/seed/avatar1/40/40",
    "https://picsum.photos/seed/avatar2/40/40",
    "https://picsum.photos/seed/avatar3/40/40",
    "https://picsum.photos/seed/avatar4/40/40",
    "https://picsum.photos/seed/avatar5/40/40",
  ]

  return (
    <section
      className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-16"
    >
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-primary mb-4 font-headline">
            Él no te ha olvidado… solo necesita sentir tu energía otra vez. Escucha esta frecuencia 5 minutos al día y observa lo que pasa.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-white leading-tight mb-6">
            en solo 5 minutos por día
          </h1>
          <p className="text-base md:text-lg text-white/80 font-body max-w-2xl mx-auto leading-relaxed mb-10">
            Miles de mujeres ya lo probaron… Y muchas recibieron el mensaje que tanto esperaban.
          </p>

          <div className="flex flex-col items-center gap-8">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg h-16 px-10 font-bold font-body btn-glow glowing-shadow btn-gradient" 
              onClick={scrollToOffer}
            >
              Quiero escuchar la frecuencia
            </Button>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {avatars.map((avatar, index) => (
                    <Image 
                      key={index}
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <div className="ml-4 flex flex-col items-start">
                   <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                   </div>
                   <p className="text-sm text-white/80 font-body mt-1">+8.000 mujeres ya escucharon</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
