import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function TestimonialSection() {
    const testimonialWoman = PlaceHolderImages.find(p => p.id === 'sad-woman');

  return (
    <section className="py-16 md:py-24 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">
                Yo sé exactamente cómo te sientes… ¡yo también pasé por eso!
            </h2>
            <div className="space-y-4 text-white/80 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Esa sensación de vacío, de mirar el celular esperando un mensaje que no llega. La ansiedad de revisar sus redes sociales y ver que está online, pero no habla contigo. Duele, ¿verdad?
              </p>
              <p>
                Yo también sentí mi mundo desmoronarse. Probé de todo: el contacto cero, los consejos de amigas, los rituales complicados… y nada parecía funcionar. Solo me sentía más lejos de él y de mí misma.
              </p>
              <p>
                Fue en mi punto más bajo que descubrí el poder de las frecuencias vibracionales. Entendí que no se trataba de cambiarlo a él, sino de cambiar mi propia energía para volver a atraerlo de forma natural. Y funcionó.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
             <div className="relative">
                {testimonialWoman && (
                    <Image
                        src={testimonialWoman.imageUrl}
                        alt={testimonialWoman.description}
                        width={400}
                        height={500}
                        className="rounded-2xl shadow-2xl shadow-black/50 w-full max-w-sm h-auto"
                        data-ai-hint={testimonialWoman.imageHint}
                    />
                )}
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10 animate-pulse"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
