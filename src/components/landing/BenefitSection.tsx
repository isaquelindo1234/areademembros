import Image from "next/image";
import { Sparkles } from "lucide-react";

export function BenefitSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="https://i.postimg.cc/W1nRNz6B/Chat-GPT-Image-15-de-set-de-2025-11-47-41.png"
                alt="Caja del producto Frequencia del Reencuentro"
                width={500}
                height={500}
                className="rounded-xl h-auto object-cover"
                data-ai-hint="mystical box"
              />
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              Reprograma tu energía para reconectar los lazos afectivos
            </h2>
            <div className="font-body text-base text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 space-y-4">
              <p>
                Esta frecuencia te da una{' '}
                <strong className="text-primary font-medium">
                  ventaja vibracional injusta
                </strong>
                . Si no estás lista para ser deseada, buscada y recordada…{' '}
                <strong className="text-white">no la escuches.</strong>
              </p>
              <p>
                Ya probaste contacto cero, mensajes fríos y mil teorías vacías.{' '}
                <strong className="text-primary">
                  Nada de eso funciona.
                </strong>
              </p>
              <p>
                Yo también lo intenté todo. Hasta que activé esta frecuencia…{' '}
                <em className="text-white not-italic">y sentí algo diferente.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}