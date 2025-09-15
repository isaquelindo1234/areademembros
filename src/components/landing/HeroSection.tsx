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
      className="relative overflow-hidden text-center pt-8 pb-8 md:pt-16 md:pb-16"
    >
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-md">
          
          <p className="text-primary font-semibold mb-2 text-sm md:text-base">
            🔮 Escucha esta frecuencia durante 5 minutos
          </p>
          
          <h1 className="text-3xl sm:text-4xl font-headline font-extrabold text-white leading-tight mb-4">
            Y haz que tu ex regrese<br/> corriendo a tus brazos
          </h1>
          
          <p className="text-base md:text-lg text-white/80 font-body max-w-sm mx-auto leading-relaxed mb-6">
            Tendrás su amor en la palma de tu mano… Activa este interruptor de atracción en tu mente y el camino hacia la relación que soñaste se abrirá.
          </p>

          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <Button 
              size="lg" 
              className="w-full text-base h-auto py-4 px-8 font-bold font-body btn-glow glowing-shadow btn-gradient-2" 
              onClick={scrollToOffer}
            >
              🎧 Escuchar la frecuencia ahora
            </Button>

            <Image
              src="https://i.postimg.cc/VNbQfSjC/image.png"
              alt="Payment methods"
              width={250}
              height={45}
              className="object-contain"
              data-ai-hint="payment methods"
            />
            
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <Image 
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    width={36}
                    height={36}
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
