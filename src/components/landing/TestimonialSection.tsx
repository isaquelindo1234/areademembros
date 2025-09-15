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
                    alt="Depoimento de uma cliente"
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
                Veía a otras mujeres recibiendo flores, mensajes, amor... Y yo ahí, esperando que sonara el celular, mirando sus historias, sintiendo que me estaba olvidando.
              </p>
              <p>
                Me preguntaba: <strong className="text-white">¿Qué estoy haciendo mal?</strong> ¿Será que no soy suficiente? ¿Será que el amor no es para mí?
              </p>
              <p>
                No... solo estaba vibrando en la frecuencia equivocada. Cuando descubrí esta <span className="text-primary font-semibold">FRECUENCIA DEL REENCUENTRO</span>, todo cambió. Sentí como si alguien hubiese desbloqueado algo en mí.
              </p>
              <p>
                Después de escucharla, <strong className="text-white">él me escribió.</strong> No fue magia. Fue energía alineada... y funciona.
              </p>
          </div>

        </div>
      </div>
    </section>
  );
}
