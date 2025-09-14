import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProofSection() {
    const phoneMockup = PlaceHolderImages.find(p => p.id === 'phone-mockup');

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-muted-foreground font-light font-['Poppins'] text-lg mb-4">= Os 3 métodos como você saber resultados</p>
                    <h2 className="text-white text-3xl md:text-4xl font-semibold font-['Poppins'] leading-10">
                        Melhor do que falar... é mostrar os resultados
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 items-center justify-center">
                        {/* Testimonial 1 */}
                        <div className="bg-gray-800/30 p-6 rounded-xl shadow-2xl space-y-4">
                            <div className="text-sm text-muted-foreground font-light font-['Poppins']">"Funcionou perfeitamente! Ele me mandou mensagem no mesmo dia que comecei a aplicar as técnicas. Incrível como funciona rápido!"</div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold">M</div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Mariana</p>
                                    <p className="text-xs text-muted-foreground">Resultado em 1 dia</p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Mockup */}
                        <div className="flex justify-center">
                           <div className="relative">
                                {phoneMockup && (
                                     <Image
                                        src={phoneMockup.imageUrl}
                                        alt={phoneMockup.description}
                                        width={256}
                                        height={512}
                                        className="w-64 h-auto rounded-3xl shadow-2xl"
                                        data-ai-hint={phoneMockup.imageHint}
                                    />
                                )}
                               <div className="absolute inset-0 bg-primary/10 rounded-3xl"></div>
                           </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-gray-800/30 p-6 rounded-xl shadow-2xl space-y-4">
                            <div className="text-sm text-muted-foreground font-light font-['Poppins']">"Eu não acreditava que ia dar certo, mas deu! Meu ex voltou a me procurar e hoje estamos mais apaixonados que antes."</div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold">C</div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Carla</p>
                                    <p className="text-xs text-muted-foreground">Reconquistou em 5 dias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="text-center mt-12">
                        <p className="text-muted-foreground font-light font-['Poppins'] mb-8 max-w-2xl mx-auto">Estes são apenas alguns dos milhares de depoimentos que recebemos. Pessoas reais que conseguiram reconquistar seus amores usando nossa metodologia.</p>
                        <Button className="bg-[#61CE70] hover:bg-[#4fb85f] text-white font-medium text-sm px-12 py-5 rounded-[28px] font-['Poppins'] h-auto shadow-romantic hover:shadow-glow transition-all duration-300">
                            QUERO MEUS RESULTADOS AGORA
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
