import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import {PlaceHolderImages} from "@/lib/placeholder-images";

export function OfferSection() {
    const offerImage = PlaceHolderImages.find(p => p.id === 'offer-box');

    const features = [
        "Frecuencia de Reencuentro (5 min)",
        "Audio para Reprogramación de Creencias",
        "Guía de Manifestación del Amor",
        "Acceso Vitalicio y Descargas",
        "Garantía de 30 Días",
    ];

    return (
        <section id="offer" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-white text-3xl md:text-4xl font-headline font-bold">
                        Por tiempo limitado…
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-primary/50 rounded-3xl p-8 md:p-12 shadow-2xl glowing-shadow">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 text-center lg:text-left">
                             <div className="space-y-4">
                                <p className="text-xl text-white/80 font-body">Acceso completo por un pago único de:</p>
                                <div className="text-7xl font-headline font-bold text-white">
                                    <span className="line-through text-4xl text-white/50 mr-2">$37</span>$9
                                </div>
                                <p className="text-secondary font-body font-semibold">¡Oferta especial por lanzamiento!</p>
                             </div>
                             <ul className="space-y-3 text-left">
                                {features.map((feature, index) => (
                                     <li key={index} className="flex items-center gap-3 font-body text-white/90">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                             </ul>
                             <div className="pt-4">
                                <Button size="lg" className="w-full text-xl h-16 px-10 font-bold font-body btn-glow">
                                    Quiero escuchar ahora
                                </Button>
                             </div>
                        </div>

                        <div className="flex justify-center">
                            {offerImage && (
                                <Image
                                    src={offerImage.imageUrl}
                                    alt={offerImage.description}
                                    width={350}
                                    height={350}
                                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                    data-ai-hint={offerImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
