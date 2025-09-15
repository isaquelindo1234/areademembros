"use client";

import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import Image from "next/image";

export function OfferSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const deliverables = [
    "Melodía del Amor para que él rеgrеѕе a ti",
    "Melodía para atraer a tu pareja ideal",
    "Melodía de reconciliación amorosa",
    "Melodía para restaurar la confianza",
    "Melodía del encantamiento: él no tendrá ojos para nadie más",
    "Melodía neutralizadora de emociones negativas"
  ];

  return (
    <section id="offer" className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-headline font-bold">
            Por tiempo limitado…
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-primary/50 rounded-2xl p-6 md:p-10 shadow-2xl glowing-shadow">
          <div className="flex flex-col items-center">

            {/* Price and CTA */}
            <div className="w-full">
              <div className="space-y-2 text-center">
                <p className="text-lg text-white/80 font-body">antes <span className="line-through">$37.00</span></p>
                <p className="text-lg text-white/80 font-body">ahora por solo</p>
                <div className="text-6xl md:text-7xl font-headline font-bold text-white">
                  $9.00
                </div>
              </div>
              <div className="pt-4 flex flex-col items-center">
                <Button 
                  className="w-full max-w-[320px] text-base h-auto py-4 px-6 font-bold font-body btn-glow btn-gradient-2 rounded-full my-5 mx-auto block" 
                  onClick={scrollToOffer}
                >
                  QUIERO ESCUCHAR LA MELODÍA
                </Button>
                <p className="text-xs text-white/70 mt-3 text-center max-w-xs">
                  Precio en dólar (USD). Al pagar, la plataforma convierte automaticamente a tu moneda local
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="mt-10 w-full max-w-md">
              <h3 className="font-bold text-lg text-white text-center mb-4">Incluye:</h3>
              <ul className="space-y-3 font-body text-white/90">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Music2 className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Image */}
            <div className="mt-10 flex justify-center">
              <Image
                src="https://i.postimg.cc/rw6Pkdn9/Whisk-2efa6b0579898fc85bd4a2d03adb581fdr-removebg-preview.png"
                alt="Caja del producto"
                width={350}
                height={350}
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] w-full max-w-[280px] md:max-w-xs h-auto rounded-xl"
                data-ai-hint="mystical box"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
