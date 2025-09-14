import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    { id: "testimonial-1", imageHint: 'chat message' },
    { id: "testimonial-2", imageHint: 'chat message' },
    { id: "testimonial-3", imageHint: 'chat message' },
  ];
  const videoThumbnail = PlaceHolderImages.find(p => p.id === 'happy-couple');


  return (
    <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h3 className="text-primary font-semibold">Mais de 6 mil mulheres usaram essa frequência</h3>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-2">
                    Melhor do que falar... é mostrar os resultados
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="flex justify-center md:justify-end">
                    <Image src="https://picsum.photos/seed/105/300/400" alt="Testimonial 1" width={300} height={400} className="rounded-lg object-cover" data-ai-hint="chat message"/>
                </div>
                
                <div className="relative flex justify-center group">
                    {videoThumbnail && (
                        <Image src={videoThumbnail.imageUrl} alt="Video testimonial" width={320} height={570} className="rounded-lg object-cover" data-ai-hint={videoThumbnail.imageHint}/>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg group-hover:bg-opacity-10 transition-colors">
                        <Youtube className="w-20 h-20 text-white text-opacity-80 group-hover:text-opacity-100" />
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <Image src="https://picsum.photos/seed/106/300/400" alt="Testimonial 2" width={300} height={400} className="rounded-lg object-cover" data-ai-hint="chat message"/>
                </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm">
                Essas são apenas algumas das milhares de mulheres que tiveram suas vidas amorosas transformadas pela Melodia do Amor. <br/> Os resultados podem variar de pessoa para pessoa.
            </p>
        </div>
    </section>
  );
}
