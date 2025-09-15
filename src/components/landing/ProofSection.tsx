import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export function ProofSection() {
    const videoThumbnail = PlaceHolderImages.find(p => p.id === 'tiktok-video');
    const testimonials = [
        { id: "testimonial-1", imageHint: 'chat message' },
        { id: "testimonial-2", imageHint: 'chat message' },
        { id: "testimonial-3", imageHint: 'chat message' },
        { id: "testimonial-4", imageHint: 'chat message' },
    ];

    return (
        <section className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-white text-2xl md:text-3xl font-headline font-bold mb-4">
                        Más de 8.000 mujeres ya lo usaron…
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="w-full max-w-md mx-auto">
                         <Carousel opts={{ loop: true }} className="w-full">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => {
                                    const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                                    return (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card className="bg-transparent border-0 shadow-none">
                                                    <CardContent className="flex aspect-[9/16] items-center justify-center p-0">
                                                        {image && (
                                                            <Image
                                                                src={image.imageUrl}
                                                                alt={`Testimonio ${index + 1}`}
                                                                width={400}
                                                                height={711}
                                                                className="rounded-xl object-cover w-full h-full"
                                                                data-ai-hint={image.imageHint}
                                                            />
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                            <CarouselPrevious className="text-white bg-white/10 hover:bg-white/20 border-white/20 -left-4" />
                            <CarouselNext className="text-white bg-white/10 hover:bg-white/20 border-white/20 -right-4" />
                        </Carousel>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative group cursor-pointer w-full max-w-xs">
                            {videoThumbnail && (
                                <Image
                                    src={videoThumbnail.imageUrl}
                                    alt={videoThumbnail.description}
                                    width={320}
                                    height={570}
                                    className="rounded-2xl shadow-2xl shadow-primary/20 w-full h-auto"
                                    data-ai-hint={videoThumbnail.imageHint}
                                />
                            )}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                                <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
