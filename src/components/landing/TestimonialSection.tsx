import Image from "next/image";

export function TestimonialSection() {

  return (
    <section className="py-8 md:py-16 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">
                Yo sé exactamente cómo te sientes… ¡yo también pasé por eso!
            </h2>
          </div>
          
          <div className="flex justify-center">
             <div className="relative">
                <Image
                    src="https://i.postimg.cc/BZLNTfCL/Design-sem-nome-19.png"
                    alt="Mujer pensativa o triste"
                    width={400}
                    height={500}
                    className="rounded-xl shadow-2xl shadow-black/50 w-full max-w-sm h-auto object-cover"
                    data-ai-hint="woman testimonial"
                />
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10 animate-pulse"></div>
             </div>
          </div>

          <div className="space-y-4 text-white/80 font-body text-base leading-relaxed max-w-xl mx-auto text-center">
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
      </div>
    </section>
  );
}
