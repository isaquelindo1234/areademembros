"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

export function InfoSection() {
    const womanImage = PlaceHolderImages.find(p => p.id === 'contemplative-woman');

    const scrollToPricing = () => {
      const pricingSection = document.getElementById('pricing');
      if(pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">Se seu relacionamento está por um fio, ou se ele te abandonou...</p>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                Eu sei exatamente como você se sente...<br/>eu já passei por isso!
              </h3>
            </div>
            <div className="text-muted-foreground space-y-4 text-base">
              <p>
                Esta melodia é tão poderosa que lhe dá uma "vantagem injusta". E eu lhe digo agora, se você não gosta de atrair atenção, ser vista e notada, ou ser cortejada pela sua pessoa, é melhor não ouvir.
              </p>
              <p>
                Pare de perder tempo com coisas que não funcionam: sem contato, cantadas, livros de autoajuda ou teorias vazias. Eles não vão te ajudar. Eu tentei de tudo que você pode imaginar até descobrir isso.
              </p>
              <p>
                A Melodia do Amor impulsiona instantaneamente seu campo de energia desalinhado, a verdadeira razão pela qual você está enfrentando desafios em seu relacionamento, como brigas, separações ou até mesmo dificuldade em encontrar alguém.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
                <Button size="lg" className="text-lg py-6 px-8 font-bold" onClick={scrollToPricing}>
                    Sim, eu quero tentar!
                </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {womanImage && (
                <Image
                src={womanImage.imageUrl}
                alt={womanImage.description}
                width={400}
                height={500}
                className="rounded-xl shadow-lg shadow-primary/10 object-cover"
                data-ai-hint={womanImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}