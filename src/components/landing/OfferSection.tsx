"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function OfferSection() {

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
                             <div className="space-y-2 text-center">
                                <p className="text-lg text-white/80 font-body">antes <span className="line-through">$27.00</span></p>
                                <p className="text-lg text-white/80 font-body">ahora por solo</p>
                                <div className="text-6xl md:text-7xl font-headline font-bold text-white">
                                    $9.00
                                </div>
                             </div>
                             <div className="pt-4 flex flex-col items-center">
                                <Button size="lg" className="w-full max-w-sm text-xl h-auto py-4 px-8 font-bold font-body btn-glow btn-gradient-2" onClick={scrollToOffer}>
                                    QUIERO ESCUCHAR LA MELODÍA
                                </Button>
                                <p className="text-xs text-white/70 mt-3 text-center max-w-xs">
                                    Precio en dólar (USD). Al pagar, la plataforma convierte automaticamente a tu moneda local
                                </p>
                                <Image
                                    src="https://i.postimg.cc/8cJc7W2x/image.png"
                                    alt="Métodos de pago"
                                    width={300}
                                    height={50}
                                    className="mt-4"
                                    data-ai-hint="payment methods"
                                />
                             </div>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src="https://i.postimg.cc/rw6Pkdn9/Whisk-2efa6b0579898fc85bd4a2d03adb581fdr-removebg-preview.png"
                                alt="Caja del producto"
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
