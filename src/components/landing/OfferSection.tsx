"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function OfferSection() {

    const features = [
        "Frecuencia de Reencuentro (5 min)",
        "Audio para Reprogramación de Creencias",
        "Guía de Manifestación del Amor",
        "Acceso Vitalicio y Descargas",
        "Garantía de 30 Días",
    ];

    const scrollToOffer = () => {
        const offerSection = document.getElementById('offer');
        if(offerSection) {
          offerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <section id="offer" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                     <h2 className="text-white text-2xl md:text-3xl font-headline font-bold">
                        Por tiempo limitado…
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-primary/50 rounded-2xl p-6 md:p-10 shadow-2xl glowing-shadow">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 text-center lg:text-left">
                             <div className="space-y-4">
                                <p className="text-lg text-white/80 font-body">Acceso completo por un pago único de:</p>
                                <div className="text-5xl md:text-6xl font-headline font-bold text-white">
                                    <span className="line-through text-2xl md:text-3xl text-white/50 mr-2">$37</span>$9
                                </div>
                                <p className="text-secondary font-body font-semibold">¡Oferta especial por lanzamiento!</p>
                             </div>
                             <ul className="space-y-3 text-left max-w-xs mx-auto lg:mx-0">
                                {features.map((feature, index) => (
                                     <li key={index} className="flex items-center gap-3 font-body text-white/90">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                             </ul>
                             <div className="pt-4">
                                <Button size="lg" className="w-full text-xl h-auto py-4 px-8 font-bold font-body btn-glow btn-gradient" onClick={scrollToOffer}>
                                    Quiero escuchar ahora
                                </Button>
                             </div>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src="https://i.postimg.cc/W1nRNz6B/Chat-GPT-Image-15-de-set-de-2025-11-47-41.png"
                                alt="Caja del producto Frequencia del Reencuentro"
                                width={350}
                                height={350}
                                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] w-full max-w-xs h-auto rounded-xl"
                                data-ai-hint="mystical box"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
