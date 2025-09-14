import Image from "next/image";
import { Check, CreditCard } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
    "Melodia de Amor personalizada",
    "Frequências que ativam a atração",
    "Melodia subliminar para amor-próprio",
    "Versão para meditação guiada",
    "Bônus: A Chave para o Amor Desejado",
    "Garantia de 30 dias",
    "Acesso vitalício e downloads ilimitados"
]

export function PricingSection() {
    const pricingImage = PlaceHolderImages.find(p => p.id === 'pricing-image');
    
    return (
        <section id="pricing" className="py-16 md:py-24 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <p className="font-semibold text-white">Promoção válida até</p>
                    <h2 className="text-2xl font-bold text-primary">Domingo, 14 de Setembro de 2025</h2>
                </div>
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        {pricingImage && (
                            <Image
                                src={pricingImage.imageUrl}
                                alt={pricingImage.description}
                                width={400}
                                height={500}
                                className="object-contain"
                                data-ai-hint={pricingImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="lg:col-span-3">
                        <Card className="bg-background/50 border-primary shadow-2xl shadow-primary/20">
                            <CardHeader className="text-center">
                                <p className="text-lg text-muted-foreground">por apenas</p>
                                <p className="text-6xl font-bold text-white">R$ 37,00</p>
                                <p className="text-muted-foreground">ou 12x de R$ 3,60</p>
                            </CardHeader>
                            <CardContent className="space-y-4 px-6 md:px-10">
                               <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-primary" />
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                               </ul>
                            </CardContent>
                            <CardFooter className="flex-col gap-4 p-6 md:p-10">
                                <Button size="lg" className="w-full text-xl font-bold py-8">
                                    <CreditCard className="mr-3 w-7 h-7" />
                                    COMPRAR AGORA
                                </Button>
                                <p className="text-xs text-muted-foreground">Pagamento 100% seguro via Pix, Cartão ou Boleto.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
