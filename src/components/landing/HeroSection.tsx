"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroCoupleImage = PlaceHolderImages.find(p => p.id === 'hero-couple');

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-white text-xl md:text-2xl font-semibold font-['Poppins'] leading-10">
            Quer suas mensagens de enviar por 5 minutos
          </h2>
          <h2 className="text-white text-xl md:text-2xl font-semibold font-['Poppins'] leading-10">
            E faça o seu ex voltar
          </h2>
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold font-['Poppins'] leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 54px)",
              lineHeight: "50px",
              textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
              WebkitTextStroke: "1px rgb(0, 0, 0)",
            }}
          >
            correndo para você
          </h1>

          <p className="text-muted-foreground text-lg font-light font-['Poppins'] max-w-2xl mx-auto leading-relaxed">
            Uma estratégia comprovada que desperta o interesse perdido e faz seu
            ex perceber o que perdeu. Funciona mesmo quando parece impossível.
          </p>
          <div className="pt-4">
            <Button className="bg-[#61CE70] hover:bg-[#4fb85f] text-white font-medium text-sm px-12 py-5 rounded-[28px] font-['Poppins'] shadow-romantic hover:shadow-glow transition-all duration-300 h-auto">
              QUERO RECONQUISTAR AGORA
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 pt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="relative max-w-sm mx-auto">
            {heroCoupleImage && (
              <Image
                src={heroCoupleImage.imageUrl}
                alt={heroCoupleImage.description}
                width={300}
                height={450}
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ width: "32%", margin: "0 auto", display: "block" }}
                data-ai-hint={heroCoupleImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
