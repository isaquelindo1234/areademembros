import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function OfferSection() {
    const offerAppImage = PlaceHolderImages.find(p => p.id === 'offer-app');

    const features = [
        "Acesso imediato após o pagamento",
        "Método completo em vídeo e PDF",
        "Suporte especializado incluso",
        "Acesso vitalício",
        "Atualizações gratis para toda a vida",
        "Você pode acessar quando quiser",
        "Baixar no celular ou computador",
        "Grupo vip no telegram",
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-10 mb-6">
                        Promoção válida até <br className="hidden md:block" />
                        Domingo, 14 de setembro de 2025
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        <div className="flex justify-center">
                            <div className="relative">
                                {offerAppImage && (
                                     <Image
                                        src={offerAppImage.imageUrl}
                                        alt={offerAppImage.description}
                                        width={320}
                                        height={640}
                                        className="w-80 h-auto rounded-3xl shadow-2xl"
                                        data-ai-hint={offerAppImage.imageHint}
                                    />
                                )}
                                <div className="absolute -inset-6 bg-primary/20 rounded-3xl blur-2xl -z-10"></div>
                            </div>
                        </div>

                        <div className="space-y-8">
                             <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-muted-foreground font-light font-['Poppins'] text-lg">De R$ 197,00 por apenas</p>
                                    <div className="text-6xl font-bold text-primary font-['Poppins']">R$ 37,00</div>
                                    <p className="text-muted-foreground font-light font-['Poppins']">ou 12x de R$ 3,60</p>
                                </div>
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                         <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                            <p className="text-muted-foreground font-light font-['Poppins']">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                             </div>
                             <div className="pt-4">
                                <Button className="w-full bg-[#61CE70] hover:bg-[#4fb85f] text-white font-bold text-lg px-12 py-6 rounded-[28px] font-['Poppins'] uppercase tracking-wider h-auto shadow-romantic hover:shadow-glow transition-all duration-300">
                                    QUERO RECONQUISTAR AGORA
                                </Button>
                             </div>
                             <div className="text-center pt-4">
                                 <p className="text-xs text-muted-foreground font-light font-['Poppins']">💳 Parcele em até 12x no cartão de crédito</p>
                                 <p className="text-xs text-muted-foreground font-light font-['Poppins'] mt-2">🔒 Compra 100% segura e protegida</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
