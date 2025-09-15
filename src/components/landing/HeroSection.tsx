"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Headphones } from "lucide-react";

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
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-8 md:pt-20 md:pb-16 text-center"
    >
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          
          <p className="text-primary font-semibold mb-2 text-sm md:text-base">
            Escucha esta frecuencia durante 5 minutos
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-3">
            Y haz que tu ex regrese<br/> corriendo a tus brazos
          </h1>
          
          <p className="text-base md:text-lg text-white/80 font-body max-w-md mx-auto leading-relaxed mb-6">
            Tendrás su amor en la palma de tu mano… Cuando actives este interruptor de atracción en tu mente, se abrirá el camino hacia la relación que soñaste.
          </p>

          <div className="flex flex-col items-center gap-5">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-base h-auto py-4 px-8 font-bold font-body btn-glow glowing-shadow btn-gradient-2" 
              onClick={scrollToOffer}
            >
              <Headphones className="w-5 h-5 mr-2" />
              Escuchar la frecuencia ahora
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <Image 
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-left">
                 <div className="flex">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                 </div>
                 <p className="text-xs text-white/80 font-body mt-1">+8.000 mujeres ya escucharon</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
