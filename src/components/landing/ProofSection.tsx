import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export function ProofSection() {
    const image1 = PlaceHolderImages.find(p => p.id === "testimonial-1");
    const image2 = PlaceHolderImages.find(p => p.id === "testimonial-2");

    return (
        <section className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-white text-2xl md:text-3xl font-headline font-bold mb-4">
                        Más de 8.000 mujeres ya lo usaron…
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-10">
                    {image1 && (
                        <Card className="bg-transparent border-0 shadow-none w-full max-w-md">
                            <CardContent className="flex aspect-[9/16] items-center justify-center p-0">
                                <Image
                                    src={image1.imageUrl}
                                    alt={`Testimonio 1`}
                                    width={400}
                                    height={711}
                                    className="rounded-xl object-cover w-full h-full"
                                    data-ai-hint={image1.imageHint}
                                />
                            </CardContent>
                        </Card>
                    )}
                    
                    <div className="relative group cursor-pointer w-full max-w-xs">
                        <Image
                            src="https://i.postimg.cc/26sMgFkD/image.png"
                            alt="Testimonio en video"
                            width={320}
                            height={570}
                            className="rounded-2xl shadow-2xl shadow-primary/20 w-full h-auto"
                            data-ai-hint="chat message"
                        />
                    </div>

                    {image2 && (
                         <Card className="bg-transparent border-0 shadow-none w-full max-w-md">
                            <CardContent className="flex aspect-[9/16] items-center justify-center p-0">
                                <Image
                                    src={image2.imageUrl}
                                    alt={`Testimonio 2`}
                                    width={400}
                                    height={711}
                                    className="rounded-xl object-cover w-full h-full"
                                    data-ai-hint={image2.imageHint}
                                />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
}
